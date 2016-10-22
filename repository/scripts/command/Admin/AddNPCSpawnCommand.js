var BufferedWriter = Java.type('java.io.BufferedWriter');
var FileWriter = Java.type('java.io.FileWriter');

var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {	
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		if (args.length == 0 || isNaN(args[0])) {
			api.sendConsoleMessage(player, "Usage: npcTypeID [posX] [posY] [posZ]");
			return false;
		}
		var writer = null;
		try {
			writer = new BufferedWriter(new FileWriter("./repository/NPCSpawns.txt", true));
			writer.newLine();
			var npcType = parseInt(args[0]);
			var posX = api.getCoordX(player);
			var posY = api.getCoordY(player);
			var posZ = api.getCoordLevel(player);
			if (args.length >= 3) {
				posX = parseInt(args[1]);
				posY = parseInt(args[2]);
			}
			if (args.length >= 4) {
				posZ = parseInt(args[3]);
			}
			var npc = api.createNpc(npcType, api.getCoords(posX, posY, posZ));
			writer.write("//Added by "+api.getName(player)+": "+api.getName(npc));
			writer.newLine();
			writer.write(npcType + " - " + posX + " " + posY + " " + posZ);
			api.spawnNpc(npc, true);
			writer.close();
		} catch (e) { 
			if (writer != null) {
				writer.close();
			}
			return false; 
		} 
		return true;
	}

});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "addspawn", listener);
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "addnpcspawn", listener);
};