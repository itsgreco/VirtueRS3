var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		
		switch (locTypeId) {
            case 75852://Trapdoor old xmas event
			//todo add knocking sound
            chatnpc(player, 15874, "NEUTRAL", "Get lost!", function () {
			 //todo add get lost sound
		    });	 
			return true;
			case 96780:
			case 96781:
			api.runAnimation(player, 23603, function () {
			api.teleportEntity(player, 414, 652, 0);
			});	 
	        return true;
			
			case 96782:
			case 96783:
			api.runAnimation(player, 23603, function () {
			api.teleportEntity(player, 3107, 3310, 0);
			});	 
	        return true;
	
	//dog kennel 
	//varp 3468   1246925975 all blue draynor
	
	//interface 1383
	
	
	
	
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [75852,96780,96781,96782,96783];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};