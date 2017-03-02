var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {	
		//varp 6777 for points interface 1824
		//api.sendMessage(player, "<col=de3163>Loved up level, for today %"+level code here+"</col>");	
        case 106446://Broken unity machine
		multi3(player, "WHAT SKILL DO YOUU WANT TO USE TO HELP FIX THE UNITY MACHINE?", "Magic - stabilzing the machine.", function () {
		//Broken unity machine anims magic 30193	
		}, "Invention - disassembling dust and adding to the machine.", function () {
		api.sendMessage(player, "You are not yet able to use Invention to help fix the machine.");	
		}, "I've changed my mind.", function () {
		});
		return true;
        case 106448://Crate of devotion dust
		api.addCarriedItem(player, 39628 ,500);
		return true;	
		case 106453:
        case 106454://Crashed devotion rock
		multi3(player, "WHAT SKILL DO YOUU WANT TO USE TO BREAK DOWN THE ROCKS?", "Mining.", function () {	
		}, "Smithing.", function () {
		//smithing rock anim 30172
		}, "I've changed my mind.", function () {
		});
		return true;
			default:
				return false;
		}		
	}
});
/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [106446,106453,106454,106448];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};