var MusicBoxListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		switch (event) {
			case EventType.OPNPC1:
				switch (npcTypeId) {
				case 17101:
				case 17102:
					startMusicBox(player, npc);
					return;
				case 18528:
					startMorytanianMusicBox(player, npc);
					return;
				case 18529:
					startKharidianMusicBox(player, npc);
					return;
				default:
					return;
				}
			case EventType.OPNPC2:
				api.sendMessage(player, "This option is unavailable.");
				return;
			case EventType.OPNPC3:
				api.sendMessage(player, "This option is unavailable.");
				return;
			case EventType.OPNPC4:
				checkOwnership(player, npc);
				return;
			default:
				api.sendMessage(player, "Unhandled NPC Interaction action: npc="+npc);
				break;
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var npcs = [ 17101, 17102, 18528, 18529 ];
	var listener = new MusicBoxListener();
	for (var i in npcs) {
		//Binds all options on all music boxes to this listener
		scriptManager.registerListener(EventType.OPNPC1, npcs[i], listener);
		scriptManager.registerListener(EventType.OPNPC2, npcs[i], listener);
		scriptManager.registerListener(EventType.OPNPC3, npcs[i], listener);
		scriptManager.registerListener(EventType.OPNPC4, npcs[i], listener);
	}
};

function checkOwnership(player, npc) {
	if(!npc.isOwner(player)) {
		api.sendMessage(player, "You are not the owner of this Music Box.");
		return true;
	}
	npc.destroy();
	player.setPet(null);
	
}

function placeMusicBox (player, item, slot) {
	var npc = NPC.create(17102, new Tile(player.getCurrentTile()));
	if(npc.getOwner() != null) {
		api.sendMessage(player, "You already have a music box out.");
	} else {
	   npc.setOwner(player);
	   npc.setCanRespawn(false);
	   Java.type('org.virtue.game.World').getInstance().addNPC(npc);
	   api.runAnimation(player, 827);
	   player.getMovement().moveAdjacent();
	}
}

function startMusicBox (player, npc) {
	api.runAnimation(player, 20156);
	api.sendFilterMessage(player, "You start to dance to the music.");
} 

function startMorytanianMusicBox (player, npc) {
	api.runAnimation(player, 21846);
	api.sendMessage(player, "You start to dance to the music", 109);
} 

function startKharidianMusicBox (player, npc) {
	api.runAnimation(player, 21847);
	api.sendMessage(player, "You start to dance to the music", 109);
} 