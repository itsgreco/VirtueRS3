var ChatboxListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, interfaceID, args) {
		var player = args.player;
		var option = args.button;
		var component = args.component;
		
		if (interfaceID == 1529) {
			switch (component) {
			case 58://Chat box
				return;
			case 81:
				Filters.toggleGame(player, 25);
				return;
			case 107:
				Filters.toggleGroup(player, 25);
				return;
			case 105:
				Filters.toggleProfanity(player, 25);
				return;
			case 222://Toggle online status - This is handled via a different packet
				return;
			case 225:
				ChatboxActions.toggleAlwaysOn(player);
				return;
			case 236:
				ChatboxActions.toggleVipBadge(player);
				return;
			case 240:
				ChatboxActions.createGroup(player);
				return;
			case 242:
				ChatboxActions.switchGroupTeam(player);
				return;
			default:
				api.sendMessage(player, "Unhandled chatbox 1529 action: comp="+args.component+", button="+args.button);
				return;
			}
		} else if (interfaceID == 464) {//Trade/Assist
			switch (component) {
			case 6:
				Filters.toggleGame(player, 23);
				return true;
			case 9:
				Filters.togglePublic(player, 23);
				return true;
			case 24:
				Filters.toggleTrade(player, 23)
				return true;
			case 27:
				Filters.toggleAssist(player, 23);
				return true;
			case 30:
				Filters.toggleProfanity(player, 23);
				return true;
			case 218://Chat box
				return true;
			case 223://Toggle online status - This is handled via a different packet
				return true;
			case 226:
				ChatboxActions.toggleAlwaysOn(player);
				return true;
			case 237:
				ChatboxActions.toggleVipBadge(player);
				return true;
			case 239:
				ChatboxActions.assistTime(player);
				return true;
			default:
				api.sendMessage(player, "Unhandled trade/assist chat box action: comp="+component+", button="+option);
				return false;
			}
		} else if (interfaceID == 1470) {//Guest clan chat
			switch (component) {
			case 58://Chat box
				return true;
			case 188:
				Filters.toggleGame(player, 22);
				return true;
			case 203:
				Filters.toggleGuestClan(player, 22);
				return true;
			case 212:
				Filters.toggleProfanity(player, 22);
				return true;
			case 223://Toggle online status - This is handled via a different packet
				return true;
			case 226:
				ChatboxActions.toggleAlwaysOn(player);
				return true;
			case 237:
				ChatboxActions.toggleVipBadge(player);
				return true;
			case 234:
				ChatboxActions.joinLeaveGuestClanChat(player);
				return true;
			default:
				api.sendMessage(player, "Unhandled guest clan chat box action: comp="+component+", button="+option);
			return false;
			}
		} else if (interfaceID == 1471) {//Clan chat
			switch (component) {
			case 60://Chat box
				return true;
			case 84://Game
				Filters.toggleGame(player, 21);
				return true;
			case 96:
				Filters.toggleClan(player, 21);
				return true;
			case 108:
				Filters.toggleProfanity(player, 21);
				return true;
			case 224://Toggle online status - This is handled via a different packet
				return true;
			case 227:
				ChatboxActions.toggleAlwaysOn(player);
				return true;
			case 237:
				ChatboxActions.toggleVipBadge(player);
				return true;
			case 232:
				ChatboxActions.joinLeaveClanChat(player);
				return true;
			default:
				api.sendMessage(player, "Unhandled clan chat box action: comp="+component+", button="+option);
				return false;
			}
		} else if (interfaceID == 1472) {
			switch (component) {
			case 58://Chat box
				return;
			case 82://Game
				Filters.toggleGame(player, 20);
				return;
			case 91:
				Filters.toggleFriendChat(player, 20);
				return;
			case 106:
				Filters.toggleProfanity(player, 20);
				return;
			case 223://Toggle online status - This is handled via a different packet
				return;
			case 226:
				ChatboxActions.toggleAlwaysOn(player);
				return;
			case 237:
				ChatboxActions.toggleVipBadge(player);
				return;
			case 227:
				ChatboxActions.joinLeaveFriendChat(player);
				return;
			case 230:
				ChatboxActions.friendChatSettings(player);
				return;
			default:
				api.sendMessage(player, "Unhandled friends chat box action: iface="+interfaceID+", comp="+component+", button="+option);
				return;
			}
		} else if (interfaceID == 1467) {//Private chat
			switch (component) {
			case 58://Chat box
				return;
			case 81://Game
				Filters.toggleGame(player, 19);
				return;
			case 87://Private
				Filters.togglePrivate(player, 19);
				return;
			case 99://Trade
				Filters.toggleTrade(player, 19);
				return;
			case 102://Assist
				Filters.toggleAssist(player, 19);
				return;
			case 105://Profanity
				Filters.toggleProfanity(player, 19);
				return;
			case 221://Toggle online status - This is handled via a different packet
				return;
			case 224:
				ChatboxActions.toggleAlwaysOn(player);
				return;
			case 235:
				ChatboxActions.toggleVipBadge(player);
				return;
			default:
				api.sendMessage(player, "Unhandled private chat box action: iface="+interfaceID+", comp="+component+", button="+option);
				return;
			}			
		} else if (interfaceID == 137) {//All chat
			switch (component) {
			case 65://Toggle game filter
				Filters.toggleGame(player, 18);
				return;
			case 68:
				Filters.togglePublic(player, 18);
				return;
			case 71:
				Filters.togglePrivate(player, 18);
				return;	
			case 74:
				Filters.toggleFriendChat(player, 18);
				return;
			case 77:
				Filters.toggleClan(player, 18);
				return;
			case 80:
				Filters.toggleGuestClan(player, 18);
				return;
			case 83:
				Filters.toggleTrade(player, 18);
				return;
			case 86:
				Filters.toggleAssist(player, 18);
				return;
			case 89:
				Filters.toggleProfanity(player, 18);
				return;
			case 90:
				Filters.toggleBroadcasts(player, 18);
				return;
			case 91:
				Filters.toggleGroup(player, 18);
				return;
			case 100://Toggle online status - This is handled via a different packet
				return;
			case 103://Toggle always-on chat mode
				ChatboxActions.toggleAlwaysOn(player);
				return;
			case 114:
				ChatboxActions.toggleVipBadge(player);
				return;
			case 117:
				ChatboxActions.report(player);
				return;
			case 122://Open examine settings
				ChatboxActions.openExamineSettings(player);
				return;
			case 127://Clicked quick chat bubble
				return;
			case 130://Clicked chat box
				return;
			case 255://Legacy switch to "All"
				return;
			case 259://Legacy "Game"
				if (option == 2) {
					LegacyFilters.setGame(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setGame(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setGame(player, 18, 2);
				}
				return;
			case 264://Legacy "Public"
				if (option == 2) {
					LegacyFilters.setPublic(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setPublic(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setPublic(player, 18, 2);
				}
				return;
			case 269://Legacy "Private"
				if (option == 2) {
					LegacyFilters.setPrivate(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setPrivate(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setPrivate(player, 18, 2);
				}
				return;
			case 274://Legacy "Friends"
				if (option == 2) {
					LegacyFilters.setFriendChat(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setFriendChat(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setFriendChat(player, 18, 2);
				}
				return;
			case 279://Legacy "Clan"
				if (option == 2) {
					LegacyFilters.setClan(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setClan(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setClan(player, 18, 2);
				}
				return;
			case 284://Legacy "Guest"
				if (option == 2) {
					LegacyFilters.setGuestClan(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setGuestClan(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setGuestClan(player, 18, 2);
				}
				return;
			case 289://Legacy "Trade"
				if (option == 2) {
					LegacyFilters.setTrade(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setTrade(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setTrade(player, 18, 2);
				}
				return;
			case 293://Legacy "Assist"
				if (option == 2) {
					LegacyFilters.setAssist(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setAssist(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setAssist(player, 18, 2);
				} else if (option == 5) {
					GlobalActions.assistTime(player);
				}
				return;
			case 295://Legacy "Group"
				if (option == 2) {
					LegacyFilters.setGroup(player, 18, 0);
				} else if (option == 3) {
					LegacyFilters.setGroup(player, 18, 1);
				} else if (option == 4) {
					LegacyFilters.setGroup(player, 18, 2);
				}
				return;
			case 298://Legacy "Report"
				ChatboxActions.report(player);
				return;
			default:
				api.sendMessage(player, "Unhandled chat box action: iface="+interfaceID+", comp="+component+", button="+option);
				return;
			}
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var ids = [ 137, 1467, 1472, 1471, 1470, 464, 1529 ];
	var chatboxListener = new ChatboxListener();
	for (var i in ids) {
		scriptManager.registerListener(EventType.IF_BUTTON, ids[i], chatboxListener);
	}
};

var Filters = {
		toggleGame : function (player, chatWindow) {
			var on, filtered;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 18797) == 1;
				filtered = api.getVarBit(player, 18805) == 1;
				break;
			case 19:
				on = api.getVarBit(player, 18812) == 1;
				filtered = api.getVarBit(player, 18820) == 1;
				break;
			case 20:
				on = api.getVarBit(player, 18827) == 1;
				filtered = api.getVarBit(player, 18835) == 1;
				break;
			case 21:
				on = api.getVarBit(player, 18842) == 1;
				filtered = api.getVarBit(player, 18850) == 1;
				break;
			case 22:
				on = api.getVarBit(player, 18857) == 1;
				filtered = api.getVarBit(player, 18865) == 1;
				break;
			case 23:
				on = api.getVarBit(player, 20813) == 1;
				filtered = api.getVarBit(player, 20821) == 1;
				break;
			case 25:
				on = api.getVarBit(player, 24563) == 1;
				filtered = api.getVarBit(player, 24571) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled game filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (filtered) {
				filtered = false;
				on = false;
			} else {
				filtered = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 18797, on ? 1 : 0);
				api.setVarBit(player, 18805, filtered ? 1 : 0);
				break;
			case 19:
				api.setVarBit(player, 18812, on ? 1 : 0);
				api.setVarBit(player, 18820, filtered ? 1 : 0);
				break;
			case 20:
				api.setVarBit(player, 18827, on ? 1 : 0);
				api.setVarBit(player, 18835, filtered ? 1 : 0);
				break;
			case 21:
				api.setVarBit(player, 18842, on ? 1 : 0);
				api.setVarBit(player, 18850, filtered ? 1 : 0);
				break;
			case 22:
				api.setVarBit(player, 18857, on ? 1 : 0);
				api.setVarBit(player, 18865, filtered ? 1 : 0);
				break;
			case 23:
				api.setVarBit(player, 20813, on ? 1 : 0);
				api.setVarBit(player, 20821, filtered ? 1 : 0);
				break;
			case 25:
				api.setVarBit(player, 24563, on ? 1 : 0);
				api.setVarBit(player, 24571, filtered ? 1 : 0);
				break;
			}
		},
		togglePublic : function (player, chatWindow) {
			var on, friends;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 18800) == 1;
				friends = api.getVarBit(player, 18808) == 1;
				break;
			case 23:
				on = api.getVarBit(player, 20816) == 1;
				friends = api.getVarBit(player, 20824) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled public filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (friends) {
				friends = false;
				on = false;
			} else {
				friends = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 18800, on ? 1 : 0);
				api.setVarBit(player, 18808, friends ? 1 : 0);
				break;
			case 23:
				api.setVarBit(player, 20816, on ? 1 : 0);
				api.setVarBit(player, 20824, friends ? 1 : 0);
				break;
			}
		},
		togglePrivate : function (player, chatWindow) {
			var on, friends;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 18801) == 1;
				friends = api.getVarBit(player, 18809) == 1;
				break;
			case 19:
				on = api.getVarBit(player, 18816) == 1;
				friends = api.getVarBit(player, 18824) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled private filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (friends) {
				friends = false;
				on = false;
			} else {
				friends = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 18801, on ? 1 : 0);
				api.setVarBit(player, 18809, friends ? 1 : 0);
				break;
			case 19:
				api.setVarBit(player, 18816, on ? 1 : 0);
				api.setVarBit(player, 18824, friends ? 1 : 0);
				break;
			}
		},
		toggleFriendChat : function (player, chatWindow) {
			var on, friends;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 18802) == 1;
				friends = api.getVarBit(player, 18810) == 1;
				break;
			case 20:
				on = api.getVarBit(player, 18832) == 1;
				friends = api.getVarBit(player, 18840) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled friend chat filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (friends) {
				friends = false;
				on = false;
			} else {
				friends = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 18802, on ? 1 : 0);
				api.setVarBit(player, 18810, friends ? 1 : 0);
				break;
			case 20:
				api.setVarBit(player, 18840, friends ? 1 : 0);
				break;
			}
		},
		toggleClan : function (player, chatWindow) {
			var on, friends;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 18803) == 1;
				friends = api.getVarBit(player, 18811) == 1;
				break;
			case 21:
				on = api.getVarBit(player, 18848) == 1;
				friends = api.getVarBit(player, 18856) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled clan filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (friends) {
				friends = false;
				on = false;
			} else {
				friends = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 18803, on ? 1 : 0);
				api.setVarBit(player, 18811, friends ? 1 : 0);
				break;
			case 21:
				api.setVarBit(player, 18856, friends ? 1 : 0);
				break;
			}
		},
		toggleGuestClan : function (player, chatWindow) {
			var on, friends;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 18804) == 1;
				friends = api.getVarBit(player, 18811) == 1;
				break;
			case 22:
				on = api.getVarBit(player, 18864) == 1;
				friends = api.getVarBit(player, 18871) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled guest clan filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (friends) {
				friends = false;
				on = false;
			} else {
				friends = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 18804, on ? 1 : 0);
				api.setVarBit(player, 18811, friends ? 1 : 0);
				break;
			case 22:
				api.setVarBit(player, 18871, friends ? 1 : 0);
				break;
			}
		},
		toggleTrade : function (player, chatWindow) {
			var on, friends;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 18798) == 1;
				friends = api.getVarBit(player, 18806) == 1;
				break;
			case 19:
				on = api.getVarBit(player, 18813) == 1;
				friends = api.getVarBit(player, 18821) == 1;
				break;
			case 23:
				on = api.getVarBit(player, 20814) == 1;
				friends = api.getVarBit(player, 20822) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled trade filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (friends) {
				friends = false;
				on = false;
			} else {
				friends = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 18798, on ? 1 : 0);
				api.setVarBit(player, 18806, friends ? 1 : 0);
				break;
			case 19:
				api.setVarBit(player, 18813, on ? 1 : 0);
				api.setVarBit(player, 18821, friends ? 1 : 0);
				break;
			case 23:
				api.setVarBit(player, 20814, on ? 1 : 0);
				api.setVarBit(player, 20822, friends ? 1 : 0);
				break;
			}
		},
		toggleAssist : function (player, chatWindow) {
			var on, friends;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 18799) == 1;
				friends = api.getVarBit(player, 18807) == 1;
				break;
			case 19:
				on = api.getVarBit(player, 18814) == 1;
				friends = api.getVarBit(player, 18822) == 1;
				break;
			case 23:
				on = api.getVarBit(player, 20815) == 1;
				friends = api.getVarBit(player, 20823) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled assist filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (friends) {
				friends = false;
				on = false;
			} else {
				friends = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 18799, on ? 1 : 0);
				api.setVarBit(player, 18807, friends ? 1 : 0);
				break;
			case 19:
				api.setVarBit(player, 18814, on ? 1 : 0);
				api.setVarBit(player, 18822, friends ? 1 : 0);
				break;
			case 23:
				api.setVarBit(player, 20815, on ? 1 : 0);
				api.setVarBit(player, 20823, friends ? 1 : 0);
				break;
			}
		},
		toggleGroup : function (player, chatWindow) {
			var on, team;
			switch (chatWindow) {
			case 18:
				on = api.getVarBit(player, 24578) == 1;
				team = api.getVarBit(player, 24586) == 1;
				break;
			case 25:
				on = api.getVarBit(player, 24585) == 1;
				team = api.getVarBit(player, 24592) == 1;
				break;
			default:
				api.sendMessage(player, "Unhandled group filter toggle for chatbox "+chatWindow);
				return;
			}
			if (!on) {
				on = true;
			} else if (team) {
				team = false;
				on = false;
			} else {
				team = true;
			}
			switch (chatWindow) {
			case 18:
				api.setVarBit(player, 24578, on ? 1 : 0);
				api.setVarBit(player, 24586, team ? 1 : 0);
				break;
			case 18:
				api.setVarBit(player, 24592, team ? 1 : 0);
				break;
			}
		},
		toggleProfanity : function (player, chatWindow) {
			api.sendMessage(player, "Unhandled profanity toggle.");
		},
		toggleBroadcasts : function (player, chatWindow) {
			var on = api.getVarBit(player, 20828) == 1;
			api.setVarBit(player, 20828, on ? 0 : 1);
		}
}

var ChatboxActions = {
		toggleAlwaysOn : function (player) {
			var on = api.getVarBit(player, 22310) == 1;
			api.setVarBit(player, 22310, on ? 0 : 1);
		},
		toggleVipBadge : function (player) {
			api.sendMessage(player, "Unhandled VIP badge toggle.");
		},
		report : function (player) {
			api.openCentralWidget(player, 1406, false);
		},
		assistTime : function (player) {
			api.sendMessage(player, "Unhandled assist time button.");
		},
		joinLeaveFriendChat : function (player) {
			if (player.getChat().getFriendChatOwner() != 0) {
				api.runClientScript(player, 194, [1]);
				return;
			}
			openModalBase(player);
			api.runClientScript(player, 8178, []);
			api.runClientScript(player, 8537, []);
			api.runClientScript(player, 194, [1]);
		},
		friendChatSettings : function (player) {
			api.openCentralWidget(player, 1108, false);
		},
		joinLeaveClanChat : function (player) {
			api.sendMessage(player, "Unhandled join/leave clan chat button.");
		},
		joinLeaveGuestClanChat : function (player) {
			api.sendMessage(player, "Unhandled join/leave guest clan chat button.");
		},
		createGroup : function (player) {
			api.sendMessage(player, "Unhandled group create button.");
		},
		switchGroupTeam : function (player) {
			api.sendMessage(player, "Unhandled switch group team button.");
		},
		openExamineSettings : function (player) {
			api.openCentralWidget(player, 1561, false);
		}
}

var LegacyFilters = {
	setGame : function (player, chatWindow, mode) {
		var on = false;
		var filtered = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Filtered
			filtered = true;
			on = true;
		}
		api.setVarBit(player, 18797, on ? 1 : 0);
		api.setVarBit(player, 18805, filtered ? 1 : 0);
	},
	setPublic : function (player, chatWindow, mode) {
		var on = false;
		var friends = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Friends
			friends = true;
			on = true;
		}
		api.setVarBit(player, 18800, on ? 1 : 0);
		api.setVarBit(player, 18808, friends ? 1 : 0);
	},	
	setPrivate : function (player, chatWindow, mode) {
		var on = false;
		var friends = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Friends
			friends = true;
			on = true;
		}
		api.setVarBit(player, 18801, on ? 1 : 0);
		api.setVarBit(player, 18809, friends ? 1 : 0);
	},
	setFriendChat : function (player, chatWindow, mode) {
		var on = false;
		var friends = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Friends
			friends = true;
			on = true;
		}
		api.setVarBit(player, 18802, on ? 1 : 0);
		api.setVarBit(player, 18810, friends ? 1 : 0);
	},
	setClan : function (player, chatWindow, mode) {
		var on = false;
		var friends = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Friends
			friends = true;
			on = true;
		}
		api.setVarBit(player, 18803, on ? 1 : 0);
		api.setVarBit(player, 18811, friends ? 1 : 0);
	},
	setGuestClan : function (player, chatWindow, mode) {
		var on = false;
		var friends = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Friends
			friends = true;
			on = true;
		}
		api.setVarBit(player, 18804, on ? 1 : 0);
		api.setVarBit(player, 18811, friends ? 1 : 0);
	},
	setTrade : function (player, chatWindow, mode) {
		var on = false;
		var friends = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Friends
			friends = true;
			on = true;
		}
		api.setVarBit(player, 18798, on ? 1 : 0);
		api.setVarBit(player, 18806, friends ? 1 : 0);
	},
	setAssist : function (player, chatWindow, mode) {
		var on = false;
		var friends = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Friends
			friends = true;
			on = true;
		}
		api.setVarBit(player, 18799, on ? 1 : 0);
		api.setVarBit(player, 18807, friends ? 1 : 0);
	},
	setGroup : function (player, chatWindow, mode) {
		var on = false;
		var team = false;
		if (mode == 0) {//On
			on = true;
		} else if (mode == 1) {//Team
			team = true;
			on = true;
		}
		api.setVarBit(player, 24578, on ? 1 : 0);
		api.setVarBit(player, 24586, team ? 1 : 0);
	}
}
