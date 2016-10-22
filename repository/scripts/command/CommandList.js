var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		sendCommandResponse(scriptArgs.player, "<col=00FFCC>[Player Commands List]</col> ::players, ::item, ::anim, ::gfx, ::tele, ::bank, ::coords, ::max, ::openge", scriptArgs.console);
	},
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();	
	var commands = [ "help", "commands", "list", "command" ];
	for (var i in commands) {
		scriptManager.registerListener(EventType.COMMAND, commands[i], listener);
	}
};