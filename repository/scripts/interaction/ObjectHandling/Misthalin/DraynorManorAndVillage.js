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
		    case 5116://Trapdoor (Mysterious old man house)
			chatnpc(player, 16873, "NEUTRAL", "Keep out of my basement!", function () {
			});//varp 3524 32772 to enter
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
	        case 47424: 
			chatplayer(player,"NEUTRAL", "There's a sign on the door that says:", function () {
			mesbox(player,"Adventurers beware: Going in doesn't mean you'll come out again.", function () {
				//varp 2170	from 67108864 to 67108992
				//or varp 20
			});
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
	var locs = [75852,96780,96781,96782,96783,5116,47424];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};