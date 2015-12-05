/**
 * @Author Kayla
 */
var SpecialAttackHandler = Java.type('org.virtue.model.entity.combat.impl.SpecialAttackHandler');
var CombatStyle = Java.type('org.virtue.model.entity.combat.CombatStyle');
var AttackInfo = Java.type('org.virtue.model.entity.combat.impl.ImpactInfo');
var AnimationBlock = Java.type('org.virtue.model.entity.update.block.AnimationBlock');
var GraphicsBlock = Java.type('org.virtue.model.entity.update.block.GraphicsBlock');

var SpecialAttack = Java.extend(SpecialAttackHandler);
var saradominSword = new SpecialAttack(CombatStyle.MELEE, [11730]) {
	getImpacts : function(entity, lock) {
		return [Java.super(saradominSword).impact(entity, lock, CombatStyle.MAGIC, new GraphicsBlock(1, 1194), null),
		Java.super(saradominSword).impact(entity, lock, CombatStyle.MAGIC, null, null)];
	},
};

var listen = function(scriptManager) {
	saradominSword.animation = new AnimationBlock(11993);
	saradominSword.damageModifier = 1.21;
	SpecialAttackHandler.register(saradominSword);
};