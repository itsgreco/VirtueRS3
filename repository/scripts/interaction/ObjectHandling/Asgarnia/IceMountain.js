var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {	
		case 100850://Invention guild
		api.teleportEntity(player, 6169, 1038, 0);
		
		//api.openCentralWidget(player, 1048, false);
		//api.setWidgetText(player, 1048, 5, 26543");//icon 26543
	//	api.setWidgetText(player, 1048, 10, "You require 80 in Crafting, Divination<br> and Smithing to enter the invention<br> guild");

		
		
		
	  return true;
        default:
		return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [100850];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};