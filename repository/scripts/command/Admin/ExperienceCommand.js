var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		var args = scriptArgs.cmdArgs;
		
		switch (syntax) {
		case "bxp":
		case "bonusxp":
			var stat = api.getStatByName(args[0]);
			if (stat == -1) {
				sendCommandResponse(player, "Invalid skill: "+args[0], scriptArgs.console);
				return;
			}
			var xp = parseInt(args[1]);
			if (isNaN(xp)) {
				sendCommandResponse(player, "Invalid xp: "+args[1], scriptArgs.console);
				return;
			}
			addBonusExperience(player, stat, xp);
			sendCommandResponse(player, "Added "+xp+" bonus experience to "+args[0], scriptArgs.console);
			return;
		case "xp":
			if (args.length < 2) {
				sendCommandResponse(player, "Usage: "+syntax+" [skill] [amount]", scriptArgs.console);
				return;
			}
			var stat = api.getStatByName(args[0]);
			if (stat == -1) {
				sendCommandResponse(player, "Invalid skill: "+args[0]);
				return;
			}
			var xp = parseInt(args[1]);
			if (isNaN(xp)) {
				sendCommandResponse(player, "Invalid xp: "+args[1], scriptArgs.console);
				return;
			}
			api.addExperience(player, stat, xp, false);
			sendCommandResponse(player, "Added "+xp+" experience to "+args[0]);
			return;
		case "boost":
			if (args.length < 2) {
				sendCommandResponse(player, "Usage: "+syntax+" [skill] [boostAmount]", scriptArgs.console);
				return;
			}
			var stat = api.getStatByName(args[0]);
			if (stat == -1) {
				api.sendConsoleMessage(player, "Invalid skill: "+args[0]);
				return false;
			}
			var boost = parseInt(args[1]);
			if (isNaN(boost)) {
				sendCommandResponse(player, "Invalid boost amount: "+args[1], scriptArgs.console);
				return;
			}
			api.boostStat(player, stat, boost);
			sendCommandResponse(player, "Boosted "+args[0]+" by "+boost+" levels.", scriptArgs.console);
			return;
		}
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var commands = [ "bxp", "bonusxp", "xp", "boost" ];
	
	var listener = new CommandListener();
	for (var i in commands) {
		scriptManager.registerListener(EventType.COMMAND_ADMIN, commands[i], listener);
	}
};