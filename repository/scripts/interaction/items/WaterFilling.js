var fill = {
	
        VIAL : {
			empty : 229,
			full : 227

		},
		BOWL : {
			empty : 1923,
			full : 1921

		}
};


var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;		
		var invSlot = args.useslot;
		var item = args.useitem;
		var itemId = api.getId(item);
		
		
		
		api.runAnimation(player, 832);
		api.sendMessage(player, "Used "+ itemId +" with location "+ locTypeId);

		
	
	},
});





		
var listen = function(scriptManager) {		
	var locs = [24265,3460];
	var listener = new Listener();	
	for (var i in locs) {
	scriptManager.registerListener(EventType.OPLOCU, locs[i], listener);
	}
};