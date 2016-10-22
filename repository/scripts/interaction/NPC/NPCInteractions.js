var HansListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			 chatnpc(player, npc, "NEUTRAL", "Hello. What are you doing here?");
		} else if (event == EventType.OPNPC3) {
			 chatnpc(player, npc, "NEUTRAL", "Would you like to purchase a cape?");
		}
	}
});

var ThessaliaListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		 chatnpc(player, npc, "NEUTRAL", "Would you like to buy any fine clothes?");
	}
});

var NastrothListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (api.freeSpaceTotal(player, Inv.BACKPACK) < 28) {
			 chatnpc(player, npc, "NEUTRAL", "Sorry! I cannot give you any item's if you have something in your inventory already. You must have atleast 28 empty inventory slots. Come talk to me later.");
			return;
		}
		api.addCarriedItem(player, 995, 100000);
		api.addCarriedItem(player, 15273, 1000);
		api.addCarriedItem(player, 6585, 1);
		api.addCarriedItem(player, 4151, 1);
		api.addCarriedItem(player, 1163, 1);
		api.addCarriedItem(player, 1127, 1);
		api.addCarriedItem(player, 1201, 1);
		api.addCarriedItem(player, 1079, 1);
		api.addCarriedItem(player, 4131, 1);
		api.addCarriedItem(player, 6570, 1);
		api.addCarriedItem(player, 7462, 1);
		 chatnpc(player, npc, "NEUTRAL", "Here you go! Enjoy your starter kit.");
	}
});

var LadyDeathknellListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		 chatnpc(player, npc, "NEUTRAL", "You can start your journey by picking one of the starter set's beside the bank chest.");
		api.runAnimation(npc, 21985);
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new HansListener();
	scriptManager.registerListener(EventType.OPNPC1, 0, listener);
	scriptManager.registerListener(EventType.OPNPC3, 0, listener);
	
	listener = new ThessaliaListener();
	scriptManager.registerListener(EventType.OPNPC1, 548, listener);
	
	listener = new NastrothListener();
	scriptManager.registerListener(EventType.OPNPC1, 6539, listener);
	
	listener = new LadyDeathknellListener();
	scriptManager.registerListener(EventType.OPNPC1, 16014, listener);
};