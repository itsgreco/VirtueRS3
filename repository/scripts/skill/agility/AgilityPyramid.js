var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		switch (locTypeId) {
		case 10857:
			if (api.getCoordX(location) == 3354 && api.getCoordY(location) == 2831) {
				api.teleportEntity(player, 3355, 2833, 1);
			} else if (api.getCoordX(location) == 3200 && api.getCoordY(location) == 3243) {
				api.teleportEntity(player, 3200, 3242, 1);
			} else {
				api.sendMessage("Unhandled agility pyramid: "+location);
			}
			return;
		case 10865:
			if (api.getCoordX(location) == 3354 && api.getCoordY(location) == 2849) {
				api.teleportEntity(player, 3354, 2850, 1);
				api.runAnimation(player, 769);
				api.addExperience(player, Stat.AGILITY, 15, true);
			} else if (api.getCoordX(location) == 3200 && api.getCoordY(location) == 3243) {
				api.teleportEntity(player, 3200, 3245, 0);
			} else {
				api.sendMessage("Unhandled agility pyramid: "+location);
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
				api.sendMessage("Unhandled agility pyramid: "+location);
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
				api.sendMessage("Unhandled agility pyramid: "+location);
			}
			return;
		default:
			api.sendMessage("Unhandled agility pyramid: "+location);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var locs = [ 10857, 10865, 10860, 10868 ];
	var locationListener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], locationListener);
	}
};