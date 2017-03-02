var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;	
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {	
        case 47721:// Prized dairy cow (Quest Cook's Assistant)
			if(questApi.isStarted(player, 6) && !questApi.isFinished(player, 6)) {	
			if(api.itemTotal(player, Inv.BACKPACK, 15413)) {
			if(api.itemTotal(player, Inv.BACKPACK, 1925)) {
			api.sendMessage(player, "You've already got some top-quality milk; you should take it to the cook.");
			} else {
			api.sendMessage(player, "You'll need an empty bucket to collect the milk.");
			}
			} else {
			if(api.itemTotal(player, Inv.BACKPACK, 1925)) {
			api.runAnimation(player, 2305, function () {	
			api.delCarriedItem(player, 1925,1);
			api.addCarriedItem(player, 15413,1);
			api.sendMessage(player, "You milk the cow for top-quality milk.");
			});
			} else {
			api.sendMessage(player, "You'll need an empty bucket to collect the milk.");
			}
			}
			} else {	
			if(api.itemTotal(player, Inv.BACKPACK, 1925)) {
			mesbox(player, "If you're after ordinary milk, you should use an ordinary dairy cow.");
			} else {
			api.sendMessage(player, "You'll need an empty bucket to collect the milk.");
			}			
			}
			return;
			case 8689://dairy cow
			if(api.itemTotal(player, Inv.BACKPACK, 1925)) {
			api.runAnimation(player, 2305, function () {	
			api.delCarriedItem(player, 1925,1);
			api.addCarriedItem(player, 1927,1);
			api.sendMessage(player, "You milk the cow.");
			});
			} else {
			api.sendMessage(player, "You'll need an empty bucket to collect the milk.");
			}
            return;			
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [47721,8689];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};