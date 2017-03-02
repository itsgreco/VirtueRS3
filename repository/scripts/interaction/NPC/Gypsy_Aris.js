var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
		chatnpc(player, npc, "NEUTRAL", "Our paths are destined to cross one day, "+ api.getName(player)+",<br> but today is not that day.", function () {	
		chatplayer(player, "NEUTRAL", "How do you know my name?", function () {
		chatnpc(player, npc, "NEUTRAL", "I have the power to know, just as I have the power to see<br> the future.", function () {	
        chatplayer(player, "NEUTRAL", "Well, that's in no way terrifying.<br> I'll be going now!", function () {
        chatnpc(player, npc, "NEUTRAL", "Untill we meet again, "+ api.getName(player)+".", function () {
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
	var listener = new Listener();
	scriptManager.registerListener(EventType.OPNPC1, 9362, listener);
};
