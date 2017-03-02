var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;	
		if (api.isPaused(player)) {
			return false;
		}//2008, 4440
		switch (locTypeId) {	
		case 10673://Paintcans
		case 10674:
		case 10675:
		api.openCentralWidget(player, 383, false);
		return true;
		case 10679://Decorations box
		case 10680:
		case 10681:
		case 10682:
		case 10683:
		case 10684:
		case 10685:
		return true;
		case 10686://puppet heads blue
		return true;
		case 10687://puppet torsos blue
		//if varbit or varp 
		//chatplayer(player, "NEUTRAL", "I should speak to Rosie befor I touch these.", function () {
	   // });
		//else
		api.runAnimation(player, 832);	
		chatobj(player, 6875, "You take a blue marionette torso from the box.", function () {
		});	
		api.addCarriedItem(player, 6875, 1);
		return true;
		case 10688://puppet arms blue
		return true;
		case 10689://puppet legs blue
		return true;
		case 10690://puppet heads red
		return true;
        case 10691://puppet torsos red
		//if varbit or varp 
		//chatplayer(player, "NEUTRAL", "I should speak to Rosie befor I touch these.", function () {
	   // });
		//else
		api.runAnimation(player, 832);
		chatobj(player, 6871, "You take a red marionette torso from the box.", function () {
		});	
		api.addCarriedItem(player, 6871, 1);
		return true;
		case 10692://puppet arms red
		return true;
		case 10693://puppet legs red
		return true;
		case 10694://puppet heads green
		return true;
		case 10695://puppet torsos green
		//if varbit or varp 
		//chatplayer(player, "NEUTRAL", "I should speak to Rosie befor I touch these.", function () {
	   // });
		//else
		api.runAnimation(player, 832);
		chatobj(player, 6879, "You take a green marionette torso from the box.", function () {
		});	
		api.addCarriedItem(player, 6879, 1);
		return true;
		case 10696://puppet arms green
		return true;
		case 10697://puppet legs green
		return true;
        case 10699://Trapdoor steps
		mesbox(player,"If you leave Diango's workshop, any marionette parts, bits of bauble or<br> boxes will be removed from your inventory.", function () {
		multi2(player, "LEAVE DIANGO'S WORKSHOP?", "Yes", function () {
		api.runAnimation(player, 828, function () {	
		api.teleportEntity(player, api.getCoords(2007, 4427, 1));	
		});
		}, "No", function () {	
		});	
		});	
		
		return true;
		
			default:
				return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [10673,10674,10675,10679,10680,10681,10682,10683,10684,10685,10686,10687,10688,10689,10690,10691,10692,10693,10694,10695,10696,10697,10699];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};