var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		var iterate = api.getPlayerIterator(api.getWorld());
		var p2 = null;
		while (iterate.hasNext()) {
			var animID = parseInt(args[0]);
			p2 = iterate.next();
			if (syntax.toLowerCase() == "forcedance") {
				p2.getAppearance().setRenderAnimation(3171);
				p2.getAppearance().refresh();
				api.runAnimation(p2, 7071);//7071
			} else if (syntax.toLowerCase() == "toplayer") {
				p2.getAppearance().setRender(Render.PLAYER);
				p2.getAppearance().refresh();
			} 
				
		}
		
		return true;
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var commands = [ "forcedance", "forcekick", "toplayer" ];
	var listener = new CommandListener();
	for (var i in commands) {
		scriptManager.registerListener(EventType.COMMAND_ADMIN, commands[i], listener);
	}
};