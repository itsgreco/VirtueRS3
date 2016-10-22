var DyeListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;		
		var item = args.item;
		var slot = args.slot;
		
		switch (objTypeId) {
		case 28617://seismic wand
			if (api.getId(args.useitem) != 33296) {//The "use" item must be dye
				defaultOpHeldUseHandler(player, args);
				return;
			}
			api.setInvSlot(player, Inv.BACKPACK, slot, 33390, 1);
			api.delItem(player, Inv.BACKPACK, 33296, 1, args.useslot);
			api.sendMessage(player, "You successfully place dye over the seismic wand.");
			return;
		default:
			api.sendMessage(player, "Nothing interesting happens.");
			return;
		}
		return;
	}
});

/* Listen to the items specified */
var listen = function(scriptManager) {
	var listener = new DyeListener();
	//Bind to seismic wand (this means the event is called when any item is used on the wand, but not when the wand is used on another item)
	scriptManager.registerListener(EventType.OPHELDU, 28617, listener);
};