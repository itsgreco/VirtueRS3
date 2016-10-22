var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		if (event == EventType.OPLOC1) {
		switch (locTypeId) {
			case 1317://GE
            chatnpc(player, 3636,"angry", "If you are a friend of the gnome people, you are a friend<br> of mine. Do you wish to travel, or do you wish to ask<br> about the evil tree?", function () {	
	        });
			return true;
			case 68974:// Tree Gnome Village
			return true;
			case 68973:// Tree Gnome Stronghold
			return true;
			
			default:
			return false;
		}
}

// varp 2662 52186551
//inter 1145
//anim
//23868
//23870

//old anim and gfx 
//7082, 7084, 1229, 1229,
if (event == EventType.OPLOC2) {
		switch (locTypeId) {
         case 1317://GE
		 api.openCentralWidget(player, 1145, false);
		 return true;
		 case 68974:// Tree Gnome Village
		 return true;
		 case 68973:// Tree Gnome Stronghold
		 return true;
		 
           default:
		   return false;
	    }
}
		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [1317,68974,68973 ];
	
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
		scriptManager.registerListener(EventType.OPLOC2, locs[i], listener);
	}
};