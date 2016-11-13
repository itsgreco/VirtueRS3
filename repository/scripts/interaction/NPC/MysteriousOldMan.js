var WardsmanListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
         chatnpc(player, 16873, "NEUTRAL", "You'll do, "+ api.getName(player) +"!", function () {	  
		 chatplayer(player, "NEUTRAL", "Me? I didn't do anything... Erm, I mean, I'll do for what?", function () {	
		 chatnpc(player, 16873, "NEUTRAL", "Don't worry! I'm not going to abduct you or<br> anything...honest!", function () {	
		 chatnpc(player, 16873, "NEUTRAL", "Nor will any of my other random friends!", function () {	
	   
	   // api.setVarp(player, 3524, 65540);//show cat
		 //api.setSpotAnim(16849, 1, 74);for cat
		// runAnimation(npc, 8939);
		// api.setVarp(player, 3524, 32772); //hide
		 });
		 });
		 });
		 });
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new WardsmanListener();
	scriptManager.registerListener(EventType.OPNPC1, 16872, listener);
};
