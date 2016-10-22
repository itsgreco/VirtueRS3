var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		multi3(args.player, "Which training dummy would you prefer?", "Range Dummy", function () {
			api.sendMessage(player, "Training Dummy content coming soon.");
		}, "Melee Dummy", function () {
			api.sendMessage(player, "Training Dummy content coming soon.");
		}, "Magic Dummy", function () {
			api.sendMessage(player, "Training Dummy content coming soon.");
		});
		api.openDialog(args.player, "Dispenser");	
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var listener = new LocationListener();
	scriptManager.registerListener(EventType.OPLOC1, 79034, listener);
};