var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		var message = "";
		for (i = 0; i < args.length; i++) {
			message += (i == 0 ? (args[i].substring(0, 1).toUpperCase() + args[i].substring(1)) : args[i]) + (i == args.length - 1 ? "" : " ");
		}			
		if (syntax.toLowerCase() == "title") {
			player.getAppearance().setPrefixTitle(message + "");
			player.getAppearance().refresh();
		} else if (syntax.toLowerCase() == "endtitle") {
			player.getAppearance().setSuffixTitle(message + "");
			player.getAppearance().refresh();
		}
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "title", listener);
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "endtitle", listener);
};