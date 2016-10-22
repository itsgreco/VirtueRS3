var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		/*****************************************WARNING****************************************
		 * DO NOT PUT THIS COMMAND IN PlayerCommands.js! 
		 * It will eventually be restricted to admin-only, and separating it will be more difficult if it's part of the player command script
		 */
		
		if (args.length < 2) {
			sendCommandResponse(player, "Usage: "+syntax+" [x-coord] [y-coord]", scriptArgs.console);
			return;
		}
		if (args.length >= 5) {
			var level = parseInt(args[0]);
			var squareX = parseInt(args[1]);
			var squareY = parseInt(args[2]);
			var localX = parseInt(args[3]);
			var localY = parseInt(args[4]);
			
			api.teleportEntity(player, level, squareX, squareY, localX, localY);
		} else	if (args.length == 2) {
			var level = api.getCoordLevel(player);
			api.teleportEntity(player, parseInt(args[0]), parseInt(args[1]), level);
		} else {
			api.teleportEntity(player, parseInt(args[0]), parseInt(args[1]), parseInt(args[2]));
		}
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var commands = [ "tele", "goto", "move" ];
	var listener = new CommandListener();
	for (var i in commands) {
		scriptManager.registerListener(EventType.COMMAND, commands[i], listener);
	}
};