var VexListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, id, args) {
		var player = args.player;
		if (event == EventType.OPNPC1) {
			//Option 1 (Read) as an NPC vexillum
			readClanVex(player, args.npc);
		} else if (event == EventType.OPNPC3) {
			//Option 3 (Remove) as an NPC vexillum
			checkVexOwnership(player, args.npc);
		} else if (event == EventType.OPHELD1 || event == EventType.OPWORN1) {
			//Option 1 (Place) as an inventory item
			//Option 1 (Place) as a worn item
			ClanVex.place(player, args.item, args.slot);
		}
	}
});

/* Listen to the item ids specified */
var listen = function(scriptManager) {
	var listener = new VexListener();
	scriptManager.registerListener(EventType.OPHELD1, 20709, listener);
	
	scriptManager.registerListener(EventType.OPWORN1, 20709, listener);
	
	scriptManager.registerListener(EventType.OPNPC1, 13634, listener);
	scriptManager.registerListener(EventType.OPNPC3, 13634, listener);
}

var ClanVex = {
		place : function (player, item, slot) {
			var npc = api.createNpc(13634, api.getCoords(player));
			if(npc.getOwner() != null) {
				api.sendMessage(player, "You already have a clan vex out.");
			} else {
			   npc.setOwner(player);
			   api.spawnNpc(npc);
			   api.runAnimation(player, 827);
			   api.moveAdjacent(player);
			}
		}
}

function checkVexOwnership(player, npc) {
	if(!npc.isOwner(player)) {
		api.sendMessage(player, "You are not the owner of this Clan Vex.");
		return true;
	}
	npc.destroy();
	player.setPet(null);
	
}

function readClanVex(player, npc) {
	api.sendMessage(player, "There's no information about this clan.");
}