var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		if (args.length < 1 || isNaN(args[0])) {
			sendCommandResponse(player, "Usage: "+syntax+" [id] [args]", scriptArgs.console);
			return false;
		}
		var scriptID = parseInt(args[0]);
		var params = [];
		for (var i = 1; i<args.length;i++) {
			if (args[i].trim().length == 0) {
				continue;
			}
			try {
				params[i-1] = parseInt(args[i]);
			} catch (e) {
				params[i-1] = args[i];
			}
			if (isNaN(params[i-1])) {
				params[i-1] = args[i];
			}
		}
		sendCommandResponse(player, "Running client script "+scriptID+" with params "+JSON.stringify(params), scriptArgs.console);
		api.runClientScript(player, scriptID, params);
		return true;
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "cs2", listener);
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "cscript", listener);
};