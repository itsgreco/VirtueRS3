var HeroOpenListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		switch (args["interface"]) {
		case 1218:
		api.openWidget(player, 1218, 1, 1217, true);
		api.setVarp(player, 1228, 18440);
			return;	
		case 1446:
			api.setWidgetText(player, 1446, 94, api.getName(player));
			api.setWidgetText(player, 1446, 93, player.getAppearance().getPrefixTitle());
			return;
		case 1560:
			api.openWidget(player, 1560, 16, 1558, true);//
			api.openWidget(player, 1560, 18, 1557, true);//Skills
			api.openWidget(player, 1560, 17, 1559, true);//Combat stats
			return;
		}
	}
});

var HeroButtonListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		switch (args["interface"]) {
		case 1218:
		api.openWidget(player, 1218, 1, 1217, true);
		switch (args["component"]) {
		//////////////////may not need this ///////////////////////
		   case 18://Agility
		   api.setVarp(player, 1228, 18496);
		   return;
		   case 19://Attack
		   api.setVarp(player, 1228, 18440);
		   return; 
		   case 20://Constitution
		   api.setVarp(player, 1228, 18480);
		   return;
		   case 21://Construction
		   api.setVarp(player, 1228, 18608);
		   return;
		   case 22://Cooking
		   api.setVarp(player, 1228, 18560);
		   return;
		   case 23://Crafting
		   api.setVarp(player, 1228, 18520);
		   return;
		   case 24://Defence
		   api.setVarp(player, 1228, 18472);
		   return;
		   case 33://Invention
		   api.setVarp(player, 1228, 18648);
		   return;
		   ///////////////////////////////////////////////////////////
		default:
		api.sendMessage(player, "Unhandled hero overlay button: interface="+args["interface"]+", comp="+args.component+", button="+args.button);
		return;
		}
		return;	
		case 1446:
			if (args.component == 108) {
				api.openCentralWidget(player, 1561, false);
			} else {
				api.sendMessage(player, "Unhandled hero overlay button: interface="+args["interface"]+", comp="+args.component+", button="+args.button);
			}
			return;
		case 1560:
			if (args.component == 22) {
				api.closeOverlaySub(player, 1024, true);
			} else {
				api.sendMessage(player, "Unhandled hero overlay button: interface="+args["interface"]+", comp="+args.component+", button="+args.button);
			}
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new HeroOpenListener();
	var inter = [1446,1560,1218];
	for (var i in inter) {
		scriptManager.registerListener(EventType.IF_OPEN, inter[i], listener);
	}

	
	listener = new HeroButtonListener();
	var inter2 = [1446,1560,1218];
	for (var i in inter2) {
		scriptManager.registerListener(EventType.IF_BUTTON, inter2[i], listener);
	}

};
