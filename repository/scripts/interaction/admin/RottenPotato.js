var ItemListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;
		var target = args.target;
		var item = args.item;
		var slot = args.slot;
		
		if (!api.isAdmin(player)) {
			chatplayer(player, "NEUTRAL", "Eww! This was yuck! I don't think I want another bite.");
			api.runAnimation(player, 18001);
			api.delCarriedItem(player, objTypeId, 1);
			return;
		}
		
		if(event == EventType.OPPLAYERU) {//Item On Player
			RottenPotato.handleItemOnPlayer(player,target);
		} else if (event == EventType.OPHELD1) {//Eat Option
			RottenPotato.handleEatOption(player);
		} else if (event == EventType.OPHELD2) {//Heal Option
			api.sendMessage(player, "You set your health to max.");
			api.restoreLifePoints(player);	
		} else if (event == EventType.OPHELD3) {//Jmod-Tools
			RottenPotato.handleJmodOption(player);	
		} else if (event == EventType.OPHELD4) {//Commands list
			RottenPotato.handleCommandListOption(player);
		}
	}
});

/* Listen to the item ids specified */
var listen = function(scriptManager) {
	var itemListener = new ItemListener();
	//Use On Player
	scriptManager.registerListener(EventType.OPPLAYERU, 5733, itemListener);
	//Item Options
	scriptManager.registerListener(EventType.OPHELD1, 5733, itemListener);
	scriptManager.registerListener(EventType.OPHELD2, 5733, itemListener);
	scriptManager.registerListener(EventType.OPHELD3, 5733, itemListener);
	scriptManager.registerListener(EventType.OPHELD4, 5733, itemListener);
}

var RottenPotato = {
		handleItemOnPlayer : function(player,target) {
			multi4(player, "Options", "Player Info", function() {
				
			}, "Bank Stats", function() {
				api.openCentralWidget(player, 1691, false);
			var total = 0;
			for (var slot=0; slot<28; slot++) {
			var item = api.getItem(target, Inv.BANK, slot) || api.getItem(target, Inv.BACKPACK, slot)|| api.getItem(target, Inv.EQUIPMENT, slot);
			var price = -1;
		    if (item != null) {
			price = api.getExchangeCost(item);
			total += price * item.getAmount();
			}
			}
			api.setWidgetText(player, 1691, 7, api.getFormattedNumber(total)); //Total Bank Value
			}, "Send "+api.getName(target)+" to Botany Bay", function() {
			multi2(player, "DEFINITELY SEND "+ api.getName(target) + " TO BOTANY BAY?",  "Yes", function () {
			RottenPotato.requestLookup(player,target);
			}, "No", function() {	
		    });
			}, "Cancel", function() {	
			});
		},
		handleEatOption : function (player) {
			multi5(player, "Eat", "Transform me", function () {
				player.getModel().setRender(Render.NPC);
				player.getModel().setNPCId(49);
				player.getModel().refresh();
			}, "Change me back.", function () {
				player.getModel().setRender(Render.PLAYER);
				player.getModel().refresh();
			}, "Wipe inventory", function () {
				api.emptyInv(player, Inv.BACKPACK);
				api.addCarriedItem(player, 5733, 1);
			}, "Invisible mode", function () {
				player.getModel().setRender(Render.INVISIBLE);
				player.getModel().refresh();
			}, "Spawn aggressive NPC", function () {
				var npc = api.createNpc(90, api.getCoords(player));
				api.spawnNpc(npc);
			});
		},
		handleJmodOption : function (player) {
			multi4(player, "CM-Tool", "Open Bank", function () {
				api.closeCentralWidgets(player);
				api.openOverlaySub(player, 1017, 762, false);
			}, "Max Stats", function () {
				for (var skill=0; skill < 27; skill++) {
					api.addExperience(player, skill, 140344310, false);
				}
			}, "Clear Title", function () {
				player.getAppearance().setPrefixTitle("");
				player.getAppearance().refresh();
			}, "Log Out", function () {

			});
		},
		handleCommandListOption : function (player) {
			multi5(player, "How would you like to be logged?", "Keep me logged in.", function () {

			}, "Kick me out.", function () {
				api.kickPlayer(player, true);
			}, "Never mind logging, just wipe my bank.", function () {
				api.emptyInv(player, Inv.BANK);
				api.sendMessage(player, "Bank is now clear!");
			}, "QP Cape please!", function () {
				if (api.freeSpaceTotal(player, Inv.BACKPACK) < 1) {
					api.sendMessage(player, "Not enough space in your inventory space.");
					return;
				}
				api.addCarriedItem(player, 9813, 1);
			}, "QP Hood Please!", function () {
				if (api.freeSpaceTotal(player, Inv.BACKPACK) < 1) {
					api.sendMessage(player, "Not enough space in your inventory space.");
					return;
				}
				api.addCarriedItem(player, 9814, 1);
			});
		},
		//This function will be used to check if player logged out, when trying to send them to botany bay.
		requestLookup : function (player,target) {
				var hash = api.getUserHash(target);
				if (hash != null) {
					var targetPlayer = api.getWorldPlayerByHash(hash);
					if (targetPlayer != null) {
					var frame = 0;
			   var Action = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {
				   process : function (player) {
					if (frame === 0) {
						api.setSpotAnim(target, 1, 3402);
			        	api.runAnimation(target, 17542);
					} else if (frame == 2) {
				target.getModel().setRender(Render.PLAYER);
				target.getModel().setRender(Render.NPC);
				target.getModel().setNPCId(15782);
				target.getModel().refresh();
					} else if (frame == 3) {
						target.getModel().setRender(Render.PLAYER);
						target.getModel().refresh();
					}
					frame++;
					return false;
				},
				stop : function (player) {
					api.stopAnimation(player);
					api.clearSpotAnim(player, 1);
				}
			});
			player.setAction(new Action());
					} else {
						api.sendMessage(player, "The specified player is not currently in the game world.")
					}
				}

		}
		
}
