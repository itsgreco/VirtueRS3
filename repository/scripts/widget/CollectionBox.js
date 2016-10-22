var CollectionBoxListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		
		if (event == EventType.IF_OPEN) {
			api.sendInv(player, Inv.LOAN_RETURN);
		} else {
			switch (args.component) {
			case 20://Reclaim item
				if (option == 1) {
					if (api.getVarp(player, 431) > 0) {
						api.sendMessage(player, "Unhandled collection box button: comp="+args.component+", button="+args.button+", slot="+args.slot);
						return;
					} else if (api.getVarp(player, 429) != -1) {
						//Forcefully return
						//[Name] wants [his/her] item returned now. The item [he/she] lent to you has been returned to [his/her] Returned Items box.
						api.sendMessage(player, "Unhandled collection box button: comp="+args.component+", button="+args.button+", slot="+args.slot);
						return;
					} else {
						if (api.freeSpaceTotal(player, Inv.BACKPACK) < 1) {
							api.sendMessage(player, "Not enough space.");
							return;
						}
						var item = api.getItem(player, Inv.LOAN_RETURN, 0);
						if (item != null) {
							api.delItem(player, Inv.LOAN_RETURN, api.getId(item), 1);
							api.addItem(player, Inv.BACKPACK, api.getId(item), 1);
							return;
						}					
					}				
					api.sendMessage(player, "Unhandled collection box button: comp="+args.component+", button="+args.button+", slot="+args.slot);
					return false;
				} else if (option == 10) {				
					var desc = api.getItemDesc(args.item);
					api.sendMessage(player, desc);
					return true;
				} else {
					api.sendMessage(player, "Unhandled collection box button: comp="+args.component+", button="+args.button+", slot="+args.slot);
					return;
				}			
			default:
				api.sendMessage(player, "Unhandled collection box button: comp="+args.component+", button="+args.button+", slot="+args.slot);
				return;
			}
		}
		//Check script 654
		//Container 540 for loaned items?
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var collectionBoxListener = new CollectionBoxListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 109, collectionBoxListener);
	scriptManager.registerListener(EventType.IF_OPEN, 109, collectionBoxListener);
};