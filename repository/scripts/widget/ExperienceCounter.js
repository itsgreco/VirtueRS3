var SWAP_SKILLS = [0, 1, 4, 2, 3, 5, 6, 7, 8, 9, 10, 18, 12, 13, 14, 15, 16, 17, 11, 19, 20, 21, 22, 23, 24, 25, 29, 30];

var ExperienceCounterListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		
		var counter = api.getVarp(player, 96);
		switch (args.component) {
		case 2://Show/hide tracker
			var wasEnabled = api.getVarBit(player, 19964) == 1;
			api.setVarBit(player, 19964, wasEnabled ? 0 : 1);
			return;
		case 13://Settings for counter 1
			api.setVarp(player, 96, 1);
			return;
		case 22://Settings for counter 2
			api.setVarp(player, 96, 2);
			return;
		case 31://Settings for counter 3
			api.setVarp(player, 96, 3);
			return;
		case 36://Enable/disable counter
			var enabled = api.getVarBit(player, 228+counter) == 1;
			api.setVarBit(player, 228+counter, enabled ? 0 : 1);
			return;
		case 41://Select attack
		case 42://Select strength
		case 43://Select defense
		case 44://Select range
		case 45://Select mage
		case 46://Select hitpoints
		case 47://Select prayer
		case 48://Select agility
		case 49://Select herblore
		case 50://Select theiving
		case 51://Select crafting
		case 52://Select fletching
		case 53://Select mining
		case 54://Select smithing
		case 55://Select fishing
		case 56://Select cooking
		case 57://Select firemaking
		case 58://Select woodcutting
		case 59://Select runecrafting
		case 60://Select slayer
		case 61://Select farming
		case 62://Select construction
		case 63://Select hunter
		case 64://Select summoning
		case 65://Select dungeoneering
		case 66://Select divination
		case 67://Select combat
		case 68://Select all
			setCounterSkill(player, component-41);
			return;
		case 70://Reset counter to zero
			api.setVarp(player, 90+counter, 0);
			return;
		default:
			api.sendMessage(player, "Unhandled experience counter settings button: comp="+args.component+", slot="+args.slot+", button="+args.button);
			return false;			
		}
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new ExperienceCounterListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 1214, listener);
	//1215 = Experience counter
};

function setCounterSkill (player, skill) {
	if (skill < SWAP_SKILLS.length) {
		skill = SWAP_SKILLS[skill];
	}
	var counter = api.getVarp(player, 96);
	api.setVarBit(player, 224+counter, skill+1);
	api.setVarp(player, 90+counter, 0);
}