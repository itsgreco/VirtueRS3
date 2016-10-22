var WardsmanListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		chatplayer(player, "NEUTRAL", "Hello.", function () {	
		chatnpc(player, npc, "NEUTRAL", "Shush! I'm concentrating.", function () {
		chatplayer(player, "NEUTRAL", "Oh, sorry.", function () {	
		});
		});	  
		});
		}
	}
});



/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	
	var listener = new WardsmanListener();
	scriptManager.registerListener(EventType.OPNPC1, 6127, listener);
};
