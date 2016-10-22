var WardsmanListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			chatnpc(player, 17507, "NEUTRAL", "Greetings, adventurer. I've been called by Duke Horacio to<br> strengthen the magical defences of the town and the<br> castle. I would love to chat, but bear in mind that this is a<br> very delicate magical operation. Please let me", function () {
			chatnpc(player, 17507, "NEUTRAL", "concentrate.", function () {	
	       });	
		   });	  
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new WardsmanListener();
	scriptManager.registerListener(EventType.OPNPC1, 17486, listener);
};
