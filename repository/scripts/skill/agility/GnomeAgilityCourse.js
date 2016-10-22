var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		switch (locTypeId) {
		case 69526:
			if (api.getCoordX(location) == 2474 && api.getCoordY(location) == 3435) {
				api.sendMessage(player, "You walk carefully across the slippery log...");
				api.runAnimation(player, 828);
				api.teleportEntity(player, 2474, 3429, 0);
				api.addExperience(player, Stat.AGILITY, 2000, true);
			} else if (api.getCoordX(location) == 2474 && api.getCoordY(location) == 3429) {
				api.sendMessage(player, "You walk carefully across the slippery log...");
				api.runAnimation(player, 9908);
				api.teleportEntity(player, 2474, 3436, 0);
			} else {
				api.sendMessage("Unhandled gnome agility course: "+location);
			}
			return;
		case 69383:
			if (api.getCoordX(location) == 3354 && api.getCoordY(location) == 2849) {
				api.teleportEntity(player, 3354, 2850, 1);
				api.runAnimation(player, 769);
				api.addExperience(player, Stat.AGILITY, 15, true);
			} else if (api.getCoordX(location) == 3200 && api.getCoordY(location) == 3243) {
				api.teleportEntity(player, 3200, 3245, 0);
			} else {
				api.sendMessage("Unhandled gnome agility course: "+location);
			}
			return;
		case 10860:
			if (api.getCoordX(location) == 3364 && api.getCoordY(location) == 2851) {
				api.teleportEntity(player, 3368, 2851, 1);
				api.runAnimation(player, 756);
				api.addExperience(player, Stat.AGILITY, 15, true);
			} else if (api.getCoordX(location) == 3200 && api.getCoordY(location) == 3243) {
				api.teleportEntity(player, 3200, 3242, 1);
			} else {
				api.sendMessage("Unhandled gnome agility course: "+location);
			}
			return;
		case 10868:
			if (api.getCoordX(location) == 3375 && api.getCoordY(location) == 2845) {
				api.teleportEntity(player, 3375, 2840, 1);
				api.runAnimation(player, 762);
				api.addExperience(player, Stat.AGILITY, 15, true);
			} else if (api.getCoordX(location) == 3200 && api.getCoordY(location) == 3243) {
				api.teleportEntity(player, 3200, 3242, 1);
			} else {
				api.sendMessage("Unhandled gnome agility course: "+location);
			}
			return;
		default:
			api.sendMessage("Unhandled gnome agility course: "+location);
			return;
		}
	}
});

/* Listen to the locations specified */
var listen = function(scriptManager) {
	var locs = [ 69526, 69383, 69508, 2312, 69507, 69384, 69377, 69378 ];
	var locationListener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], locationListener);
	}
};