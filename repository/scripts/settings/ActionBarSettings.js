var ActionBarSettingsListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, interfaceID, args) {
		var player = args.player;

		switch (args.component) {
		case 11://Secondary action bar
		case 14://Tertiary action bar
		case 18://Quaternary action bar
		case 22://Quinary action bar
		default:
			api.sendMessage(player, "Unhandled action bar settings button: comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new ActionBarSettingsListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 970, listener);
};