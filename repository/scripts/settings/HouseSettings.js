var HouseSettingsListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, interfaceID, args) {
		var player = args.player;
		switch (args.component) {
		case 18://Teleport arrive at house
		case 22://Teleport arrive at portal
		case 27://Doors closed
		case 31://Doors open
		case 51://Gathering prawnballs enabled
		case 55://Gathering prawnballs disabled
		case 76://Building mode on
		case 80://Building mode off
			
		default:
			api.sendMessage(player, "Unhandled house settings button: comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new HouseSettingsListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 1664, listener);
};