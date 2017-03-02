var AcanthaListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		chatnpc(player, npc, "NEUTRAL", "Hello. What are you doing here?", function () {	
		multi5(player, "SELECT AN OPTION", "I'm looking for whoever is in charge of this place.", function () {
		}, "I have come to kill everyone in this castle!", function () {
		}, "I don't know. I'm lost. where am I?", function () {
		}, "I wondered what happend to the castle?.", function () {
		}, "Have you been here as long as me?", function () {
		chatnpc(player, npc, "NEUTRAL", "I've been patrolling this castle for years!", function () {
        chatplayer(player, "NEUTRAL", "You must be old then?", function () {	
        chatnpc(player, npc, "NEUTRAL", "Haha, you could say I'm quite the veteran of these lands.<br> Yes, I've been here a fair while...", function () {		
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
	var listener = new AcanthaListener();
	scriptManager.registerListener(EventType.OPNPC1, 0, listener);
};
