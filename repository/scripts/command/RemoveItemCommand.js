var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		if (args.length < 1) {
			sendCommandResponse(player, "Usage: "+syntax+" [id] [amount]", scriptArgs.console);
			return;
		}
		var amount = 1;
		var itemID = parseInt(args[0]);
		if (isNaN(itemID)) {
			sendCommandResponse(player, "Usage: "+syntax+" [id] [amount]", scriptArgs.console);
			return;
		}
		
		if (args.length == 2) {
			amount = parseInt(args[1]);
		}
		api.delCarriedItem(player, itemID, amount);
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var commands = [ "removeitem", "delitem", "clearitem", "takeitem" ];
	var listener = new CommandListener();
	for (var i in commands) {
		scriptManager.registerListener(EventType.COMMAND, commands[i], listener);
	}
};