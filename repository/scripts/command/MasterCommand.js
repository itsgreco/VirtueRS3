var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		
		for (skill=0; skill < 27; skill++) {
			api.addExperience(player, skill, 13034431, false);
		}
		api.restoreLifePoints(player);
		return;
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND, "master", listener);
	scriptManager.registerListener(EventType.COMMAND, "max", listener);
};