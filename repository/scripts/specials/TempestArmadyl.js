/**
 * @author Kayla
 * @date 11/29/2015
 */

var CombatStyle = Java.type('org.virtue.model.entity.combat.CombatStyle');
var AttackInfo = Java.type('org.virtue.model.entity.combat.impl.ImpactInfo');
var AnimationBlock = Java.type('org.virtue.model.entity.update.block.AnimationBlock');
var GraphicsBlock = Java.type('org.virtue.model.entity.update.block.GraphicsBlock');
var Projectile = Java.type('org.virtue.model.entity.region.packets.Projectile');

var SpecialAttack = Java.extend(SpecialAttackHandler);
var armadylStaff = new SpecialAttack(CombatStyle.MAGIC, [21777]) {
	getImpacts : function(entity, lock) {
		return [
		Java.super(armadylStaff).impact(entity, lock, CombatStyle.MAGIC, null, new Projectile(1019, 48, 72, 16, 34, 16)),
		Java.super(armadylStaff).impact(entity, lock, CombatStyle.MAGIC, null, null),
		Java.super(armadylStaff).impact(entity, lock, CombatStyle.MAGIC, null, null),
		Java.super(armadylStaff).impact(entity, lock, CombatStyle.MAGIC, null, null),
		Java.super(armadylStaff).impact(entity, lock, CombatStyle.MAGIC, null, null)];
	},
};

var listen = function(scriptManager) {
	armadylStaff.animation = new AnimationBlock(18327);
	armadylStaff.damageModifier = 2.00;
	SpecialAttackHandler.register(armadylStaff);
};