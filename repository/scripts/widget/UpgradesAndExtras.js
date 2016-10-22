var UpgradesExtrasListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		switch (args.component) {
		case 34://Treasure Hunter
			Overlay.closeOverlay(player);
			api.openWidget(player, 1477, 749, 1252, true);
			api.openWidget(player, 1477, 561, 1253, false);
			return;
		case 9://Membership
		case 59://Bonds
		case 85://Soloman's General Store
		default:
			api.sendMessage(player, "Unhandled upgrades & extras button: comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}		
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new UpgradesExtrasListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 1607, listener);
};