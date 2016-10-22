var FriendChatListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;	
		if (event == EventType.IF_OPEN) {
			api.setWidgetEvents(player, 1587, 26, 0, 200, 6);
			api.setWidgetEvents(player, 1587, 47, 0, 1, 2);
			api.hideWidget(player, 1587, 29, true);			
		} else {
			switch (args.component) {
			case 42://Close button
				return;
			case 26:
				api.hideWidget(player, 1587, 29, false);
				api.setWidgetText(player, 1587, 98, "Are you sure you want to switch to world " + args.slot + "?");
				return;
			case 47:
				api.setVarp(player, 4735, 104005679);
				api.setVarp(player, 4734, 7230);
				api.setVarp(player, 4736, 0);
				api.setWidgetEvents(player, 1477, 801, 0, 3, 2);
				return;
			case 84:
				api.setVarp(player, 20, -1761607680);
				api.closeWidget(player, 1477, 426);
				api.openWidget(player, 1477, 333, 1215, true);
				api.hideWidget(player, 1477, 333, false);
				api.hideWidget(player, 745, 2, true);
				return;
			case 93:
				api.openCentralWidget(player, 1587, false);
				return;
			default:
				api.sendMessage(player, "Unhandled world hop component: "+args.component);
				return;
			}
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new FriendChatListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 1587, listener);
	scriptManager.registerListener(EventType.IF_OPEN, 1587, listener);
};