var MageAbilitiesOpenListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		api.setWidgetEvents(player, 1461, 1, 0, 189, 97350);
		api.setWidgetEvents(player, 1461, 7, 7, 16, 2);
	}
});

var MageAbilitiesButtonListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		switch (args.component) {
		case 1:
			var spell = org.virtue.game.content.skills.magic.Spellbook.MODERN.get(args.slot);
			if (player.getCombatSchedule().getAutocastSpell() != null) {
				player.getCombatSchedule().setAutocastSpell(null);
			//	api.sendMessage(player, "Auto-cast spell cleared.");
			} else {
				player.getCombatSchedule().setAutocastSpell(spell);
			//	api.sendMessage(player, "Main-hand spell set to: spell");
			}
			
		switch (args.slot) {
		case 155://Home Teleport
			api.openCentralWidget(player, 1092, false);
		return;
			}
			return;
			
			
			
			
		default:
			api.sendMessage(player, "Unhandled mage abilities button: comp="+args.component+", slot="+args.slot+", button="+args.button);
			return;
		}
	}
});

var MageAbilitiesTargetListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		var spell = args.slot;
		if (args.targetInterface != 1473) {//Spell used on something other than backpack
			api.sendMessage(player, "Unhandled magic ability target: spell="+spell+", targetInterface="+args.targetInterface+", targetComp="+args.targetComponent);
			return;
		}
		var slot = args.targetSlot;
		var item = api.getItem(player, Inv.BACKPACK, slot);
		if (item == null) {
			return;//This means the spell wasn't used on an item. We'll just suppress the debug message.
		}
		switch (args.slot) {
			
		
		case 188://Analyse
			Disassembly.analyseItem(player, api.getId(item));
			return;
		case 189://Disassemble
			Disassembly.startDisassembly(player, item, slot);
			return;
		default:
			api.sendMessage(player, "Unhandled magic spell use: spell="+spell+", slot="+slot+", item="+item);
			return;
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new MageAbilitiesOpenListener();	
	scriptManager.registerListener(EventType.IF_OPEN, 1461, listener);
	
	listener = new MageAbilitiesButtonListener();	
	scriptManager.registerListener(EventType.IF_BUTTON, 1461, listener);
	
	listener = new MageAbilitiesTargetListener();	
	scriptManager.registerCompListener(EventType.IF_BUTTONT, 1461, 1, listener);
};

var MagicAbilities = {
		
}