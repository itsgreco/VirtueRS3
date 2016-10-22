var SkillsListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		switch (args["interface"]) {
		case 1466:
		Overlay.openOverlay(player, 0);
			return;	
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new SkillsListener();
	var inter = [1466];
	for (var i in inter) {
		scriptManager.registerListener(EventType.IF_BUTTON, inter[i], listener);
	}


};
