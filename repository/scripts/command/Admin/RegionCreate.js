var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		if (syntax.toLowerCase() == "makeregion") {
			var dynamicRegion = mapApi.createArea();
			for (var xOffSet = 0; xOffSet < 8; xOffSet++) {
				for (var yOffSet = 0; yOffSet < 8; yOffSet++) {
					mapApi.setChunk(dynamicRegion, xOffSet, yOffSet, 0, 14, 624, 0, 0);
				}
			}
			mapApi.setChunk(dynamicRegion, 1, 1, 0, 18, 532, 0, 0);
			mapApi.buildArea(dynamicRegion);
			var squareX = mapApi.getSquareX(dynamicRegion);
			var squareY = mapApi.getSquareY(dynamicRegion);
			api.teleportEntity(player, 0, squareX, squareY, 10, 10);
			api.sendMessage(player, "You made a dynamic region!");
		} else if (syntax.toLowerCase() == "delregion") {
			var dynamicRegion = player.getArmarDynamicRegion();
			mapApi.destroyArea(dynamicRegion);
			api.sendMessage(player, "Dynamic Region deleted!");
		}
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "makeregion", listener);
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "delregion", listener);
};