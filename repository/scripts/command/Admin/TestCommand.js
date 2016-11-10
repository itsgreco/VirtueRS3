var EventListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var customobjects;
		var args = scriptArgs.cmdArgs;
		var stage = 0;
		if (args.length >= 1) {
			stage = parseInt(args[0]);
		}
		switch (stage) {
		case 0:
			api.sendMessage(player, "<sprite=6228,0>Test Message<sprite=2270,0>.");
			return;
		case 1:
			if (args.length >= 4) {
				player.getHeadIcons().setIcon(parseInt(args[3]), parseInt(args[1]), parseInt(args[2]));
				player.getHeadIcons().refresh();
			} else {
				api.sendConsoleMessage(player, "You must provide two args to this method.");
			}
			
			//api.sendMessage(player, "Test", 115);
			return;
		case 2:
			player.getTreasureHunter().open();
			return;
		case 3://Set display name
			requestName(player, "Please enter your desired display name: ", function (name) {
				var userHash = api.getUserHash(player);
				var oldName = api.getName(userHash);
				var success = api.setDisplayName(player, userHash, name);
				if (success) {
					api.sendMessage(player, "Your display name has been changed from "+oldName+" to "+name+".");
					api.sendMessage(player, "You might need to log out for the change to take effect.");
					api.sendMessage(player, "NOTE: This change has no effect on the name you use to log in.");
				} else {
					api.sendMessage(player, "Sorry, "+name+" is not available.");
				}
			});
			return;
		case 4:
			if (args.length < 2 || isNaN(args[1])) {
				sendCommandResponse(player, "You must provide a channel type argument", scriptArgs.console);
				return;
			}
			var mesType = args[1];
			api.sendMessage(player, "Test", mesType);
			return;
		case 5:
			api.spawnLocation(api.createLocation(84873, 3108, 6098, 0, 10, 4));
			api.spawnLocation(api.createLocation(84871, 3108, 6107, 0, 10, 3));
			api.spawnLocation(api.createLocation(84873, 3108, 6116, 0, 10, 3));
			api.spawnLocation(api.createLocation(84871, 3099, 6098, 0, 10, 4));
			api.spawnLocation(api.createLocation(84869, 3099, 6107, 0, 10, 4));
			api.spawnLocation(api.createLocation(84871, 3099, 6116, 0, 10, 2));
			api.spawnLocation(api.createLocation(84873, 3090, 6098, 0, 10, 1));
			api.spawnLocation(api.createLocation(84871, 3090, 6107, 0, 10, 1));
			api.spawnLocation(api.createLocation(84873, 3090, 6116, 0, 10, 2));
			return;
		case 6:
			api.spawnLocation(api.createLocation(84874, 3108, 6098, 0, 10, 4));
			api.spawnLocation(api.createLocation(84872, 3108, 6107, 0, 10, 3));
			api.spawnLocation(api.createLocation(84874, 3108, 6116, 0, 10, 3));
			api.spawnLocation(api.createLocation(84872, 3099, 6098, 0, 10, 4));
			api.spawnLocation(api.createLocation(84870, 3099, 6107, 0, 10, 4));
			api.spawnLocation(api.createLocation(84872, 3099, 6116, 0, 10, 2));
			api.spawnLocation(api.createLocation(84874, 3090, 6098, 0, 10, 1));
			api.spawnLocation(api.createLocation(84872, 3090, 6107, 0, 10, 1));
			api.spawnLocation(api.createLocation(84874, 3090, 6116, 0, 10, 2));
			return;
			
			
		case 7:
			var loc = api.createLocation(38787, api.getCoords(player), 10, 0);
			api.spawnLocation(loc, 100);
			Java.type("org.virtue.Virtue").getInstance().getWidgetRepository().open(1477, 386, 673, false, player, loc);
			api.sendMessage(player, "Opened interface on location...");
			return;
		case 8:
			api.openCentralWidget(player, 1709, false);
			return;
		case 9://halloween 2010 remake
            api.spawnLocation(api.createLocation(31845, 3011, 3269, 0, 10, 0));//portal
			api.spawnLocation(api.createLocation(62430, 3010, 3269, 0, 10, 0));//pumpkin
			api.spawnLocation(api.createLocation(32034, 3014, 3269, 0, 10, 2));//pumpkin
			api.spawnLocation(api.createLocation(32034, 3013, 3271, 0, 10, 2));//pumpkin
			api.spawnLocation(api.createLocation(32044, 3010, 3272, 0, 10, 2));//pumpkin
			api.spawnLocation(api.createLocation(14620, 3014, 3270, 0, 10, 0));//mushrooms
			api.spawnLocation(api.createLocation(14620, 3009, 3270, 0, 10, 0));//mushrooms
			api.spawnLocation(api.createLocation(14592, 3013, 3270, 0, 10, 0));//mushrooms
			//trees removed
			api.spawnLocation(api.createLocation(32947, 3010, 3274, 0, 10, 1));
			api.spawnLocation(api.createLocation(32947, 3009, 3273, 1, 10, 1));
			api.spawnLocation(api.createLocation(32947, 3014, 3273, 0, 10, 1));
			api.spawnLocation(api.createLocation(32947, 3013, 3272, 1, 10, 1));
            return;	
		}
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new EventListener();
	scriptManager.registerListener(EventType.COMMAND_ADMIN, "test", listener);
};