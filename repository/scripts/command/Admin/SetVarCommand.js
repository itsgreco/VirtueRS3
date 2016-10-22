var EventListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, args) {
		var player = args.player;
		if (args.cmdArgs.length < 2) {
			sendCommandResponse(player, "Usage: "+syntax+" [id] [value]", args.console);
			return;
		}
		var key = parseInt(args.cmdArgs[0]);
		var value = args.cmdArgs[1];
		switch (syntax) {
		case "setvarp":
		case "varp":
			api.setVarp(player, key, parseInt(value));
			sendCommandResponse(player, "Setting varp "+key+" to "+value, args.console);
			return;
		case "varbit":
		case "setvarbit":
			if (api.setVarBit(player, key, parseInt(value))) {
				sendCommandResponse(player, "Setting varbit "+key+" to "+value, args.console);
			} else {
				sendCommandResponse(player, "Failed to set varbit "+key, args.console);
			}
			return;
		case "varc":
		case "setvarc":
			api.setVarc(player, key, parseInt(value));
			sendCommandResponse(player, "Setting varc "+key+" to "+value, args.console);
			return;
		case "varcstr":
		case "setvarcstr":
			api.setVarc(player, key, value);
			sendCommandResponse(player, "Setting varcstr "+key+" to "+value, args.console);
			return;
		}
	}
});

function sendCommandResponse (player, message, console) {
	api.sendMessage(player, message, console ? MesType.CONSOLE : MesType.GAME);
}

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var commands = ["varp", "varbit", "varc", "varcstr"];
	var listener = new EventListener();
	for (var i in commands) {
		scriptManager.registerListener(EventType.COMMAND_ADMIN, commands[i], listener);
		scriptManager.registerListener(EventType.COMMAND_ADMIN, "set"+commands[i], listener);
	}	
};