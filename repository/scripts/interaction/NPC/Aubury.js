var AuburyListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		chatplayer(player, "NEUTRAL", "Merry Christmas Aubury!", function () {
	    chatnpc(player, npc, "NEUTRAL", "Merry Christmas, "+ api.getName(player)+"!", function () {
		chatplayer(player, "NEUTRAL", "How is the shop doing?", function () {
		chatnpc(player, npc, "NEUTRAL", "It is a lot quieter these days, but I don't mind. Teleporting<br> people to the rune essence mine that many times in a day<br> gets tiring.", function () {
		chatplayer(player, "NEUTRAL", "I can only imagine.", function () {
		});	
		});	
		});	
		});	  
		});	
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new AuburyListener();
	scriptManager.registerListener(EventType.OPNPC1, 14746, listener);
};
