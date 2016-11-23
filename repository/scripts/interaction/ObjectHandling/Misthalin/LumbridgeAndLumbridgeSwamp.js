var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
			case 69776://///////////sign posts
			api.sendMessage(player, "North to the Chsmpions' Guild and Varrock.");
			return true;
			case 69778:
			api.sendMessage(player, "West to Lumbridge's mill.");
			return true;
			case 69780:
			api.sendMessage(player, "East to Lumbridge.");
			return true;
			case 69782:
			api.sendMessage(player, "North to Lumbridge farms.");
			return true;
            case 69783:
			api.sendMessage(player, "South to Lumbridge.");
			return true;
			case 69784:
			api.sendMessage(player, "West to Draynow and Wizards' Tower.");
			return true;
			case 69785:
			case 69790:
			api.sendMessage(player, "East to Al Kharid.");
			return true;
			case 69786:
			api.sendMessage(player, "South to Lumbridge's graveyard/swamp and boat to Daemonheim.");
			return true;
			case 69787:
			api.sendMessage(player, "South-west into Lumbridge Castle.");
			return true;
			case 69788:
			api.sendMessage(player, "North-west to Lumbridge farms.");
			return true;
			case 69789:
			api.sendMessage(player, "North to Varrock.");
			return true;
			case 69791:
			api.sendMessage(player, "West into Lumbridge.");
			return true;/////////////////////end of sign posts
			case 15468://Crate of hammers
			if(api.itemTotal(player, Inv.BACKPACK, 2347)) {
			mesbox(player, "You already have a hammer.", function () {
		    });	
			} else {
		    api.addCarriedItem(player, 2347,1);
			chatobj(player, 2347, "You take a hammer from the crate.", function () {	
	     	});
			} 
	        return true;
			case 47713://Rocks (Quest The Restless Ghost)
			mesbox(player, "There's nothing there of any use to you.", function () {
			});
		    return true;	
			case 86431://Old mine entrance(Ham hidout)
			if (map_members == false){
		    mesbox(player, "You need to be on a member's world to use this feature.", function () {	
		    });
		    } else {
			// make sure varp is  api.setVarp(player, 114, 16384);  befor you can tele in
		    api.teleportEntity(player, 3149, 9652, 0);
		  //  api.setVarp(player, 114, 0); 
		    }
	        return true;
			case 91021://dark hole under tree
			if (map_members == false){
		    mesbox(player, "You need to be on a member's world to use this feature.", function () {	
		    });
		    } else {
		    //what it will do here
		    }
	        return true;
			case 2409://Swamp Tree
			if (map_members == false){
		    api.sendMessage(player, "You need to be on a member's world to use this feature.");
		    } else {
		   //what it will do here
		    }
	        return true;
			default:
			return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [15468,47713,86431,91021,2409,69776,69778,69780,69782,69783,69784,69785,69786,69787,69788,69789,69790,69791];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};