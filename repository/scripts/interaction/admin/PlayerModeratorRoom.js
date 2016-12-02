var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
		case 26806://Staircase
        api.teleportEntity(player, 3230, 3231, 0);
		return true;
		case EventType.OPLOC2:
		case 26807://Table
		api.sendMessage(player, "todo");
		return true;	
		return;
		default:
		return false;
		}
	}
});

/* Listen to the object ids specified */
var listen = function(scriptManager) {
	var locs = [26806, 26807];
	var listener = new LocationListener();
	for (var i in locs) {
	scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	scriptManager.registerListener(EventType.OPLOC2, locs[i], listener);
	}
};