var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;

		var world = api.getWorld();
		var lobby = api.getLobby();
		
		sendCommandResponse(player, "There are " + api.getPlayerCount(world) + " player(s) online.", scriptArgs.console);
		if (api.isAdmin(player)) {
			var iterator = api.getPlayerIterator(world);
			while (iterator.hasNext()) {
				var p2 = iterator.next()
				sendCommandResponse(player, api.getName(p2)+": "+api.getCoords(p2), scriptArgs.console);
			}
		}		
		sendCommandResponse(player, "There are " + api.getPlayerCount(lobby) + " player(s) in the lobby.", scriptArgs.console);
		if (api.isAdmin(player)) {
			var iterator = api.getPlayerIterator(lobby);
			while (iterator.hasNext()) {
				var p2 = iterator.next()
				sendCommandResponse(player, api.getName(p2), scriptArgs.console);
			}
		}

	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND, "players", listener);
};