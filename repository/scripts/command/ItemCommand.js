var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		/*****************************************WARNING****************************************
		 * DO NOT PUT THIS COMMAND IN PlayerCommands.js! 
		 * It will eventually be restricted to admin-only, and separating it will be more difficult if it's part of the player command script
		 */
		
		if (args.length < 1 || isNaN(args[0])) {
			requestItem(player, "Choose an item to spawn.", function (value) {
				var amount = 1;
				if (api.getItemType(value).isStackable()) {
					requestCount(player, "Enter the number of items to spawn: ", function (amount) {
						api.addItem(player, Inv.BACKPACK, value, amount);
					});	
				} else if (api.freeSpaceTotal(player, Inv.BACKPACK) >= amount) {
					api.addItem(player, Inv.BACKPACK, value, amount);
				} else {
					api.sendMessage(player, "You do not have enough space in your backpack to store this item.");
				}
			});
		} else {
			if (args.length < 1) {
				sendCommandResponse(player, "Usage: "+syntax+" [id] [amount]", scriptArgs.console);
				return;
			}
			var amount = 1;
			var itemID = parseInt(args[0]);
			if (args.length >= 2) {
				amount = parseInt(args[1]);
			}
			if (!api.itemExists(itemID)) {
				sendCommandResponse(player, "The item you specified does not exist.", scriptArgs.console);
				return;
			}

			var value = api.getExchangeCost(itemID) * amount;
			if (api.getItemType(itemID).isStackable() || api.freeSpaceTotal(player, Inv.BACKPACK) >= amount) {
				api.addItem(player, Inv.BACKPACK, itemID, amount);
				if (value == -1) {
					sendCommandResponse(player, "This item cannot be traded on the Grand Exchange.", scriptArgs.console);
				} else {
					sendCommandResponse(player, "This item is worth: "+value+"gp on the Grand Exchange.", scriptArgs.console);
				}				
			} else {
				sendCommandResponse(player, "You do not have enough space in your backpack to store this item.", scriptArgs.console);
			}
		}
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND, "item", listener);
	scriptManager.registerListener(EventType.COMMAND, "give", listener);
};