var Animals = {
		BALLOON : {
	        balloonID : 2275
	    },
	    BALLOON2 : {
	        balloonID : 2276
	    },
	    BALLOON3 : {
	        balloonID : 2277
	    },
	    BALLOON4 : {
	        balloonID : 2278
	    }
};

var PartyNpcListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		startParty(args.player, args.npc);
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var npcs = [ 2275, 2276, 2277, 2278 ];
	var listener = new PartyNpcListener();
	for (var i in npcs) {
		scriptManager.registerListener(EventType.OPNPC1, npcs[i], listener);
	}
};

function startParty (player, npc) {
	if (api.isPaused(player)) {
		return false;
	}
	var party = forPartyNPC(npc.getID());
	api.faceEntity(player, npc);
	api.runAnimation(player, 794);
	npc.setCanRespawn(false);
	npc.setExists(false);
	giveRandomItem(player, npc);
	api.freezeEntity(player, 2);
}

function giveRandomItem (player, npc) {
	if (api.isPaused(player)) {
		return false;
	}
	if (api.freeSpaceTotal(player, Inv.BACKPACK) < 1) {
		api.sendMessage(player, "Not enough space in your inventory space.");
		return;
	}
	if (Math.random() <= 0.01) {
		World.getInstance().sendBroadcast(api.getName(player) + " has received the big prize from the balloon animal event! ");
		api.runAnimation(player, 862);
		api.setSpotAnim(player, 1, 199);
		api.addCarriedItem(player, 1050, 1);
		api.freezeEntity(player, 2);
	} else {
		api.sendMessage(player, "<col=0099CC>You didn't get the big prize, but you get 1k Coins!</col>");
		api.addCarriedItem(player, 995, 1000);
		api.freezeEntity(player, 2);
	}
}


function forPartyNPC(id) {
	for (ordinal in Animals) {
		if (Animals[ordinal].ballonID == id) {
			return Animals[ordinal];
		}
	}
	return null;
}