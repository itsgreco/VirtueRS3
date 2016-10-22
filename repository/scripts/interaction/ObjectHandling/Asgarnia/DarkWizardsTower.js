var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
			
		case 2861://Door (Quest Witch's House)
		if (map_members == false){
		mesbox(player, "You need to be on a member's world to use this feature.", function () {	
		});
		} else {
        api.sendMessage(player, "This door is locked.");
		}
	    return true;
        case 24842://Manhole (Quest Witch's House)
		if (map_members == false){
		mesbox(player, "You need to be on a member's world to use this feature.", function () {	
		});
		} else {
        api.sendMessage(player, "The cover won't budge. It seems to be locked.");
		}
	    return true;
        default:
		return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [2861,24842];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};