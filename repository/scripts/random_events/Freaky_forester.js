var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
		case 15645://Portal
		chatnpc(player, 16857, "NEUTRAL", "Hay, "+ api.getName(player) +" , you've got a job to do befor you can<br> leave!", function () {	
        //ment to walk or run to the Freaky forester then say
	    chatnpc(player, 16857, "NEUTRAL", "Can you kill a three-tailed pheasant, please?<br> Bring me the raw pheasant when you're done.", function () {	
	    });
		});
		return true;

			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [15645];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};