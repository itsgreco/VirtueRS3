var WorldMapOpen = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		
		api.setWidgetEvents(player, World_Map_Interface, 38, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 39, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 40, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 41, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 42, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 43, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 44, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 45, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 46, 2, 2, 2);
		api.setWidgetEvents(player, World_Map_Interface, 47, 2, 2, 2);
		api.setVarc(player, 622, api.getCoordHash(api.getCoords(player)));
		api.setWidgetEvents(player, World_Map_Interface, 86, 0, 19, 2);
		api.hideWidget(player, World_Map_Interface, 49, true);
		api.setVarc(player, 4197, -1);
		api.setVarc(player, 674, api.getCoordHash(api.getCoords(player)));
		player.setAction(new WorldMapOpenAction());
	}
});

var WorldMapClose = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		api.runClientScript(player, 8105, []);
		api.setVarc(player, 622, -1);
		api.setVarc(player, 674, -1);
		api.openOverlaySub(player, 1015, 1215, true);
		api.openWidget(player, 1477, 16, 1482, true);
		player.clearAction();
		api.runAnimation(player, 22749);
	}
});

var WorldMapOpenAction = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {	
	process : function (player) {
		api.runAnimation(player, 22748);
		api.setVarc(player, 4197, -1);
		return false;
	},
	stop : function (player) {
		api.stopAnimation(player);
	}
	
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new WorldMapOpen();
	scriptManager.registerListener(EventType.IF_OPEN, World_Map_Interface, listener);
	
	listener = new WorldMapClose();
	scriptManager.registerListener(EventType.IF_CLOSE, World_Map_Interface, listener);
};
