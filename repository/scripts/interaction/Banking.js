var BankBoothListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		switch (event) {
		case EventType.OPLOC1:
		api.openOverlaySub(player, 1017, 762, false);
		return;
		case EventType.OPLOC2://Handing code for the second option //Open Bank
		switch (locTypeId) {
		case 12308:
        api.setVarp(player, 304, Inv.CULINAROMANCER_CHEST_FOOD);
		api.setVarc(player, 2360, "Culinaromancer's Chest");
		api.openCentralWidget(player, Shop_Interface, false);
		return true;
		}
		api.openOverlaySub(player, 1017, 762, false);
		return;
		case EventType.OPLOC3://Collect
		switch (locTypeId) {
		case 12308:
        api.setVarp(player, 304, Inv.CULINAROMANCER_CHEST);
		api.setVarc(player, 2360, "Culinaromancer's Chest");
		api.openCentralWidget(player, Shop_Interface, false);
		return true;
		}
		api.openCentralWidget(player, 109, false);
		return;
		case EventType.OPLOC4://Collect
		api.openCentralWidget(player, 109, false);
		return;
		}		
	}
});

/* Listen to the game nodes specified */
var listen = function(scriptManager) {
	var locs = [12308, 2213, 782, 11758, 34752, 83634, 10517, 29085, 42192, 14369, 20607, 42217, 79036 ];
	var listener = new BankBoothListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
		scriptManager.registerListener(EventType.OPLOC2, locs[i], listener);
		scriptManager.registerListener(EventType.OPLOC3, locs[i], listener);
		scriptManager.registerListener(EventType.OPLOC4, locs[i], listener);
	}

};

var Bank = {
		/**
		 * Checks whether the player has enough space to fit the specified item in their bank
		 */
		canDeposit : function (itemId, count) {
			var storedCount = api.itemTotal(player, Inv.BANK, itemId);
			if (storeCount == 0) {//This means we don't have any of the item in the bank now, so we'll need one more slot
				var emptySlots = api.freeSpaceTotal(player, Inv.BANK);
				return emptySlots > 0;//TODO: Also count the bank boosters.
			} else {//Check whether we would excede the max count (2^31-1)
				return (INTEGER_MAX-storedCount)<count;
			}
		},
		depositItem : function (itemId, count) {
			var selectedTab = api.getVarBit(player, 288);
			
		}
}