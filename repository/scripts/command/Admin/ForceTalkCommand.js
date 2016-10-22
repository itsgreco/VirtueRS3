var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		var message = "";
		for (i = 0; i < args.length; i++)
			message += (i == 0 ? (args[i].substring(0, 1).toUpperCase() + args[i].substring(1)) : args[i]) + (i == args.length - 1 ? "" : " ");
		
		var iterate = Java.type('org.virtue.game.World').getInstance().getPlayers().iterator();
		var players = null;
		while (iterate.hasNext()) {
			players = iterate.next();
			api.playerForceSay(player, message, false);
		}
		
		return true;
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "forcetalk", listener);
};