var AbilitiesOpenListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		switch (args["interface"]) {
		case 1460://Melee
			api.setWidgetEvents(player, 1460, 1, 0, 171, 97286);
			api.setWidgetEvents(player, 1460, 4, 6, 14, 2);
			break;
		}
	}
});

var AbilitiesButtonListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		switch (args["interface"]) {
		case 1460://Melee
			var ability = ActionBar.getAbilities().get(args["interface"] << 6 | args.component);
			if (ability != null) {
				player.getCombatSchedule().run(ability);
			}
			return true;
		case 1458://Prayer
			if(!player.getCombat().getPrayer().usingPrayer) {
				player.getCombat().getPrayer().activate(args.slot);
				api.runAnimation(player, 18018);
			} else {
				player.getCombat().getPrayer().deactivate(args.slot);
			}
			return false;
		case 1452://Ranged
		case 1449://Defence
		default:
			api.sendMessage(player, "Unhandled ability button: interface="+args["interface"]+", comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new AbilitiesOpenListener();	
	scriptManager.registerListener(EventType.IF_OPEN, 1460, listener);
	
	listener = new AbilitiesButtonListener();	
	scriptManager.registerListener(EventType.IF_BUTTON, 1460, listener);
	scriptManager.registerListener(EventType.IF_BUTTON, 1458, listener);
	scriptManager.registerListener(EventType.IF_BUTTON, 1452, listener);
	scriptManager.registerListener(EventType.IF_BUTTON, 1449, listener);
	scriptManager.registerListener(EventType.IF_BUTTON, 1503, listener);
};