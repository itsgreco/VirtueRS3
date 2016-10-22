var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		if (args.length < 1) {
			sendCommandResponse(player, "Usage: "+syntax+" [name]", scriptArgs.console);
			return;
		}
		
		api.openDialog(player, args[0]);
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "dialog", listener);
};