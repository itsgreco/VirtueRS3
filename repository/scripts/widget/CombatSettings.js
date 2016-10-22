var CombatSettingsListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		
		switch (args.component) {
		case 2://sheathe
			player.switchSheathing();
			return;
		case 4://special attack
			player.getCombatSchedule().updateAdrenaline(1000);
			player.getCombatSchedule().setSpecialEnabled(!player.getCombatSchedule().isSpecialEnabled());
			player.getCombatSchedule().setDefaultAttack();
			api.sendMessage(player, "Special is " + (player.getCombatSchedule().isSpecialEnabled() ? "enabled." : "disabled."));
			return true;
		case 49://retaliate
			var wasRetaliating = api.getVarp(player, 462) == 0;
			api.setVarp(player, 462, wasRetaliating ? 1 : 0);
			return;
		case 32://attack
		case 36://balance
		case 40://strength
		case 44://defence
		default:
			api.sendMessage(player, "Unhandled combat settings button: comp="+args.component+", button="+args.button+", slot="+args.slot);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new CombatSettingsListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 1503, listener);
};