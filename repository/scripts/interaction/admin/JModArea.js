var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
			
			case 26807:
			
			return true;
			
			
			case 26806:

            //tele out of mod room 3230 3231
			return true;

			default:
				return false;
		}
	
	}
});

/* Listen to the object ids specified */
var listen = function(scriptManager) {
	var locs = [26807, 26806];
	var listener = new LocationListener();
	for (var i in locs) {
	scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};