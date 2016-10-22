var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		
		switch (locTypeId) {
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
		   //code to get in here
		    }
	        return true;
			case 91021://dark hole under tree
			if (map_members == false){
		    mesbox(player, "You need to be on a member's world to use this feature.", function () {	
		    });
		    } else {
		   //code to get in here
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
	var locs = [15468,47713,86431,91021,2409];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};