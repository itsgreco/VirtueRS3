var GameSettingsListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, interfaceID, args) {
		function openTab () {
			api.hideWidget(player, 1443, 10, true);
			api.hideWidget(player, 1443, 19, true);
			api.hideWidget(player, 1443, 28, true);
			api.hideWidget(player, 1443, 37, true);
			api.hideWidget(player, 1443, 46, true);
			api.hideWidget(player, 1443, 58, true);
			api.hideWidget(player, 1443, 66, true);
			api.hideWidget(player, 1443, 75, true);
			api.hideWidget(player, 1443, 83, true);
			switch (api.getVarBit(player, 29043)) {
			case 0://Gameplay
				api.openWidget(player, 1443, 69, 1663, true);
				api.hideWidget(player, 1443, 10, false);
				return;
			case 1://Loot
				api.openWidget(player, 1443, 69, 1623, true);
				api.hideWidget(player, 1443, 19, false);
				return;
			case 2://Death store
				api.openWidget(player, 1443, 69, 1662, true);
				api.hideWidget(player, 1443, 28, false);
				return;
			case 3://Player owned house
				api.openWidget(player, 1443, 69, 1664, true);
				api.hideWidget(player, 1443, 37, false);
				return;
			case 4://Action bar
				api.openWidget(player, 1443, 69, 970, true);
				api.hideWidget(player, 1443, 46, false);
				return;
			case 5://Doomsayer warnings
				api.openWidget(player, 1443, 69, 583, true);
				api.hideWidget(player, 1443, 58, false);
				return;
			case 6://Misc
				api.openWidget(player, 1443, 69, 1674, true);
				api.hideWidget(player, 1443, 66, false);
				return;
			case 7://Aid
				api.openWidget(player, 1443, 69, 1690, true);
				api.hideWidget(player, 1443, 75, false);
				return;
			case 8://Chat
				api.openWidget(player, 1443, 69, 1702, true);
				api.hideWidget(player, 1443, 83, false);
				return;
			}
		}
		
		var player = args.player;
		if (event == EventType.IF_OPEN) {
			openTab();
		} else {
			switch (args.component) {
			case 9://Gameplay settings
				api.setVarBit(player, 29043, 0);
				openTab();
				return;
			case 18://Loot settings
				api.setVarBit(player, 29043, 1);
				openTab();				
				return;
			case 27://Death store settings
				api.setVarBit(player, 29043, 2);
				openTab();
				return;
			case 36://Player owned house settings
				api.setVarBit(player, 29043, 3);
				openTab();
				return;
			case 45://Action bar settings
				api.setVarBit(player, 29043, 4);
				openTab();
				return;
			case 57://Doomsayer warning settings
				api.setVarBit(player, 29043, 5);
				openTab();
				return;
			case 65://Misc settings
				api.setVarBit(player, 29043, 6);
				openTab();				
				return;
			case 74://Aid settings
				api.setVarBit(player, 29043, 7);
				openTab();
				return;
			case 82://Chat settings
				api.setVarBit(player, 29043, 8);
				openTab();
				return;
			default:
				api.sendMessage(player, "Unhandled game settings tab: comp="+args.component+", slot="+args.slot+", button="+args.button);
				return;
			}
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new GameSettingsListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 1443, listener);
	scriptManager.registerListener(EventType.IF_OPEN, 1443, listener);
};