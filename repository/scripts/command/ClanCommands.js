var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		if (syntax == "makeclan") {
			if (api.getClanHash(player) != null) {
				sendCommandResponse(player, "You need to leave your current clan before you can use this command (clan="+api.getClanHash(player)+")", scriptArgs.console);
				return;
			}
			var Handler = Java.extend(Java.type('org.virtue.game.content.dialogues.InputEnteredHandler'), {
				handle : function (value) {
					api.closeWidget(player, 1477, 437);
					if (value.length <= 0) {
						return;
					}
					clanApi.createClan(value, player, []);
				}
			});
			api.openWidget(player, 1477, 437, 1094, false);
			api.setInputHandler(player, new Handler());
			return;
		}
	}

});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND, "makeclan", listener);
};
