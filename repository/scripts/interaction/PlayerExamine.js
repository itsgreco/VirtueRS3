var ExamineSettingsListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, interfaceID, args) {
		var player = args.player;
		if (event == EventType.IF_OPEN) {
			var messsage = api.getVarp(player, 4982);
			api.setVarc(player, 4670, messsage);
			//varcstr id=4670, value=
			api.setWidgetEvents(player, 1561, 35, 0, 22, 2);
		} else {
			switch (args.component) {
			case 21://Enter new message
				inframeInput(player, 1561, 18, function (value) {
					if (value.length > 80) {
						value = value.substring(0, 80);
					}
					api.setVarp(player, 4982, value);
					api.setVarc(player, 4670, value);
				}, 9, 80);
				return;
			case 30://Close
				return;
			case 40://Clear message
				api.setVarp(player, 4982, "");
				api.setVarc(player, 4670, "");
				return;
			case 35://Set status
				api.setWidgetEvents(player, 1477, 867, 0, 10, 2);
				//IF events: if=1477, comp=867, from=0, to=11, events=2
			case 45://Toggle privacy mode
			default:
				api.sendMessage(player, "Unhandled examine settings button: comp="+args.component+", slot="+args.slot+", button="+args.button);
				return;
			}		
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new ExamineSettingsListener();
	scriptManager.registerListener(EventType.IF_OPEN, 1561, listener);
	scriptManager.registerListener(EventType.IF_BUTTON, 1561, listener);
};