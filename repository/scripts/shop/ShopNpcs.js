var ShopNpcListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		switch (npcTypeId) {
		case 519://Bob
			api.setVarp(player, 304, Inv.BOBS_AXES);
			api.setVarp(player, 305, Inv.BOBS_AXES_FREE_STOCK);
			api.setVarc(player, 2360, "Bob's Brilliant Axes");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 549://Horviks Armour Shop
			api.setVarp(player, 304, Inv.HORVIKS_ARMOUR_SHOP);
			api.setVarc(player, 2360, "Horvik's Armour Shop");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 5913://Aubury's Rune Shop
			api.setVarp(player, 304, Inv.AUBURYS_RUNE_SHOP);
			api.setVarp(player, 305, Inv.AUBURYS_FREE_STOCK);
			api.setVarc(player, 2360, "Aubury's Rune Shop");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 551://Varrock Sword Shop
			api.setVarp(player, 304, Inv.VARROCK_SWORD_SHOP);//Shop inv ID
			api.setVarp(player, 305, Inv.VARROCK_SWORD_FREE_STOCK);//Free stock ID
			api.setVarc(player, 2360, "Varrock Sword Shop");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 522:
		case 523://Varrock general store assistant
			api.setVarp(player, 304, Inv.VARROCK_GEN_STORE);
			api.setVarc(player, 2360, "Varrock General Store");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 548:
			api.setVarp(player, 304, Inv.THESSALIAS_FINE_SHOP);
			api.setVarc(player, 2360, "Thessalia's Fine Clothes");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 546://Zaff Staff Shop
			api.setVarp(player, 304, Inv.ZAFF_STAFF_SHOP);
			api.setVarc(player, 2360, "Zaff's Superior Staves");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 550://Lowe's Archery Emporium
			api.setVarp(player, 304, Inv.LOWES_ARCHERY_SHOP);
			api.setVarp(player, 305, Inv.LOWES_ARCHERY_FREE_STOCK);
			api.setVarc(player, 2360, "Lowe's Archery Emporium");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 520:
		case 521://General store assistant
			api.setVarp(player, 304, Inv.LUMBRIDGE_GEN_STORE);
			api.setVarp(player, 305, Inv.LUMBRIDGE_GEN_STORE_FREE_STOCK);
			api.setVarc(player, 2360, "Lumbridge General Store");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 8864://Hank (Fishing shop)
			api.setVarp(player, 304, Inv.LUMBRIDGE_FISH_STORE);
			api.setVarp(player, 305, Inv.LUMBRIDGE_FISH_STORE_FREE);
			api.setVarc(player, 2360, "Lumbridge Fishing Supplies");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		case 526://General store assistant
		case 527://General store assistant
			api.setVarp(player, 304, Inv.FALADOR_GEN_STORE);
			api.setVarc(player, 2360, "Falador General Store");
			api.openCentralWidget(player, Shop_Interface, false);
			return;
		default:
			api.sendMessage(player, "Unhandled shop npc: "+npcTypeId);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var npcs = [ 546, 548, 551, 522, 523, 550, 549, 519, 520, 521, 8864, 526, 527 ];
	var shopListener = new ShopNpcListener();
	
	scriptManager.registerListener(EventType.OPNPC4, 5913, shopListener);//Aubury is option 4
	for (var i in npcs) {
		//Binds option three on all shop npcs to this listener
		scriptManager.registerListener(EventType.OPNPC3, npcs[i], shopListener);
	}
};