var FriendChatListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		if (event == EventType.IF_OPEN) {
			var name = api.getName(player.getSavedChannelOwner());
			api.setVarc(player, 2508, name != null ? name : api.getName(player));//Last friend chat joined
			api.setVarc(player, 1027, 1);
			api.setVarc(player, 1034, 2);
			api.setWidgetEvents(player, 1427, 29, 0, 600, 1024);
		} else {
			switch (args.component) {
			case 10://Join/leave
				if (player.getChat().getFriendChatOwner() != 0) {
					api.runClientScript(player, 194, [1]);
					return;
				} else {
					openModalBase(player);
					api.runClientScript(player, 8178, []);
					api.runClientScript(player, 8537, []);
					api.runClientScript(player, 194, [1]);
				}				
				return;
			case 36://Manual kick/ban
				openModalBase(player);
				api.runClientScript(player, 8178, []);
				api.runClientScript(player, 2688, []);
				return;
			case 4://Settings
				api.openCentralWidget(player, 1108, false);
				return;
			case 34://Loot share
			default:
				api.sendMessage(player, "Unhandled friends chat component: "+args.component);
				return;
			}
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new FriendChatListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 1427, listener);
	scriptManager.registerListener(EventType.IF_OPEN, 1427, listener);
};