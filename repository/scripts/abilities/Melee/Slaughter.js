/* The AnimationBlock for adding ability animations */
var FollowingType = Java.type('org.virtue.game.entity.combat.impl.FollowingType');
var CombatStyle = Java.type('org.virtue.game.entity.combat.CombatStyle');
/* The AbilityType for specifying ability types */
var AbilityType = Java.type('org.virtue.game.entity.combat.impl.ability.AbilityType');
var AbilityListener = Java.extend(Java.type('org.virtue.engine.script.listeners.AbilityListener'), {

	/* The ability id to bind to (hash of the ability's widget slot) */
	getAbilityID: function() {
		return (1460 << 16 | 7);
	},

	/* The client id of the ability */
	getClientID: function() {
		return 113;
	},

	/* The script id of the ability */
	getScriptID: function() {
		return 14683;
	},
	
	/* The type of this ability */
	getAbilityType: function() {
		return AbilityType.TRESHOLD;
	},
	
	/* permorms the ability */
	perform: function(player, lock) {
		api.runAnimation(player, 18160);
		api.setSpotAnim(player, 1, 3581);
		api.sendMessage(player, "coming soon");
	},
	
	getStyle : function() {
		return CombatStyle.MELEE;
	},
	
	getFollower : function() {
		return FollowingType.MELEE;
	},
	
	/* This function would check requirements. such as skill levels */
	canActivate: function(player, lock) {
		return true;
	},
	
	/* the cooldown for this ability in ticks (600ms) */
	getCooldown: function() {
		return 50;
	},
	
	/* the cooldown slot for this ability */
	getCooldownID: function() {
		return 16;
	}

});

/* Listen to the ability id specified */
var listen = function(scriptManager) {
	var listener = new AbilityListener();
	scriptManager.registerAbilityListener(listener, listener.getAbilityID());
};