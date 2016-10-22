var FriendChatSettingsListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		if (event == EventType.IF_OPEN) {
			//player.getVars().setVarp(1258, 299248);
			var nameHash = api.getFriendChatData(player, FriendChatData.NAME);
			api.setWidgetText(player, 1108, 9, nameHash == 0 ? "Chat disabled" : api.fromBase37Hash(nameHash));
			api.setWidgetText(player, 1108, 11, FriendChatSettings.nameFromRank(api.getFriendChatData(player, FriendChatData.RANKJOIN), false));
			api.setWidgetText(player, 1108, 13, FriendChatSettings.nameFromRank(api.getFriendChatData(player, FriendChatData.RANKTALK), false));
			api.setWidgetText(player, 1108, 15, FriendChatSettings.nameFromRank(api.getFriendChatData(player, FriendChatData.RANKKICK), false));
			api.setVarc(player, 199, -1);
			api.setVarc(player, 3678, -1);
			api.runClientScript(player, 8178, []);
			api.setWidgetEvents(player, 1108, 2, 0, 199, 254);//Allow all rank options to be sent to the server
		} else {
			var rank;
			switch (args.component) {
			case 33://Close interface
				return;
			case 9://Set prefix/disable
				if (args.button == 1) {
					requestString(player, "Enter chat prefix:", function (value) {
						var prefix = api.getBase37Hash(value);
						if (prefix == 0) {
							return;
						}
						api.setFriendChatData(player, FriendChatData.NAME, prefix);
						api.setWidgetText(player, 1108, 9, api.fromBase37Hash(prefix));
					});
					return;
				} else if (args.button == 2) {
					api.setFriendChatData(player, FriendChatData.NAME, api.getBase37Hash(""));
					api.setWidgetText(player, 1108, 9, "Chat disabled");
					return;
				}
				api.sendMessage(player, "Unhandled friends chat settings component: "+args.component);
				return;
			case 11://Set join rank
				var rankId = FriendChatSettings.rankFromButton(args.button, -8);
				if (rankId != -8) {
					api.setFriendChatData(player, FriendChatData.RANKJOIN, rankId);
					api.setWidgetText(player, 1108, 11, FriendChatSettings.nameFromRank(rankId, false));
				}
				return;
			case 13://Set talk rank
				var rankId = FriendChatSettings.rankFromButton(args.button, -8);
				if (rankId != -1) {
					api.setFriendChatData(player, FriendChatData.RANKTALK, rankId);
					api.setWidgetText(player, 1108, 13, FriendChatSettings.nameFromRank(rankId, false));
				}
				return;
			case 15://Set kick rank
				var rankId = FriendChatSettings.rankFromButton(args.button, -8);
				if (rankId != -1) {
					api.setFriendChatData(player, FriendChatData.RANKKICK, rankId);
					api.setWidgetText(player, 1108, 15, FriendChatSettings.nameFromRank(rankId, false));
				}
				return;
			case 17://Set lootshare rank
			case 20://Toggle coinshare
			default:
				api.sendMessage(player, "Unhandled friends chat settings component: "+args.component);
				return;
			}
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new FriendChatSettingsListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 1108, listener);
	scriptManager.registerListener(EventType.IF_OPEN, 1108, listener);
};

var FriendChatSettings = {
		rankFromButton : function (button, defaultValue) {
			switch (button) {
			case 1:
				return -1;
			case 2:
				return 0;
			case 3:
				return 1;
			case 4:
				return 2;
			case 5:
				return 3;
			case 6:
				return 4;
			case 7:
				return 5;
			case 8:
				return 6;
			case 9:
				return 7;
			default:
				return defaultValue;
			}
		},
		nameFromRank : function (rankId, lootshare) {
			return api.getEnumValue(616, rankId+1);
		}
}