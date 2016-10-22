var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;

		var iterate = Java.type('org.virtue.game.World').getInstance().getPlayers().iterator();
		var players = null;
		while (iterate.hasNext()) {
			players = iterate.next();
			players.stopAll();
		}
		
		return true;
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "clearall", listener);
};