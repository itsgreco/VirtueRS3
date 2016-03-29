/**
 * Copyright (c) 2016 Virtue Studios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 27/03/2016
 */

var CraftProgressButtonListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		switch (args.component) {
		case 2://Close
		case 47://Cancel
		case 53://Done
		default:
			api.sendMessage(player, "Unhandled craft progress button: comp="+args.component+", button="+args.button);
			return;
		}
	}
});

var CraftProgressCloseListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, trigger, args) {
		var player = args.player;
		
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {	
	var listener = new CraftProgressButtonListener();	
	scriptManager.registerListener(EventType.IF_BUTTON, 1251, listener);
	
	listener = new CraftProgressCloseListener();	
	scriptManager.registerListener(EventType.IF_CLOSE, 1251, listener);
};

var CraftProcess = {
		startCrafting : function (player, amount, animation, successText) {
			var productId = api.getVarp(player, 1175);
			//api.setVarp(player, 1169, category);
			api.openOverlaySub(player, 1018, 1251, false);
			var length = animation === undefined ? 1 : Math.ceil(configApi.seqLength(animation) / 30);//Round up
			api.sendMessage(player, "Total time: "+length);
			api.setVarc(player, 2227, length);//Time per item
			api.setVarc(player, 2228, amount);//Total products
			api.setVarc(player, 2229, amount);//Remaining products
			
			api.setVarp(player, 1176, 0);//Xp received
			api.setVarp(player, 1177, 0);//Bonus xp received?
			var that = this;
			delay = length-1;
			if (animation !== undefined) {
				runAnimation(player, animation);
			}			
			var CraftAction = Java.extend(Java.type("org.virtue.game.entity.player.event.PlayerActionHandler"), {
				process : function (player) {
					if (delay <= 0) {
						if (amount <= 0) {
							return true;
						}
						amount--;
						api.setVarc(player, 2229, amount);
						that.makeItem(player, productId);
						if (successText !== undefined) {
							api.sendMessage(player, successText, MesType.GAME_SPAM)
						}
						
						if (amount >= 1 && animation !== undefined) {
							runAnimation(player, animation);
						}
						delay = length;
					}
					delay--;
					return false;
				},
				
				stop : function (player) {
					api.stopAnimation(player);//Clear animation
					api.setVarp(player, 1175, -1);//Clear product
					api.closeOverlaySub(player, 1018, true);//Close interface
					api.setVarp(player, 1176, 0);//Clear experience gained counter
					api.runClientScript(player, 3373, 1018);
					api.setVarc(player, 2227, 0);//Clear time
					api.setVarc(player, 2228, 0);//Clear total
					api.setVarc(player, 2229, 0);//Clear remaining
				}
			});
			player.setAction(new CraftAction());
			
			/*var procItem = function () {
				amount--;
				api.setVarc(player, 2229, amount);
				that.makeItem(player, productId);
				if (successText !== undefined) {
					api.sendMessage(player, successText, MesType.GAME_SPAM)
				}
				if (amount > 0) {
					runAnimation(player, animation, procItem);
				} else {
					api.stopAnimation(player);
				}
			}
			runAnimation(player, animation, procItem);*/
		},
		makeItem : function (player, productId) {
			var amountPerBatch = configApi.objParam(productId, 2653);	
			var stat = configApi.objParam(productId, 2696);
			var xp;
			if (stat != 0) {
				xp = configApi.objParam(productId, 2697) * amountPerBatch;
				api.addExperience(player, stat, xp/10, true);
				api.incrementVarp(player, 1176, xp);//Increment xp received value in the crafting process interface
			}
			stat = configApi.objParam(productId, 2698);
			if (stat != 0) {
				xp = configApi.objParam(productId, 2699) * amountPerBatch;
				api.addExperience(player, stat, xp/10, true);
				api.incrementVarp(player, 1177, xp);
			}
			this.removeMaterials(player, productId);
			Backpack.addHeld(player, productId, amountPerBatch);
		},
		removeMaterials : function (player, productId) {
			//See clientscript 7108
			var materialId = configApi.objParam(productId, 2655);
			var matCountReq = configApi.objParam(productId, 2665);
			//var v11 = configApi.objParam(productId, 4134);
			var separateAmount = configApi.objParam(productId, 2686) == 1;
			var structId = configApi.objParam(productId, 2675);
			//var v1 = configApi.objParam(productId, 5456);
			var loop = 1;
			var amountPerBatch = configApi.objParam(productId, 2653);			
			while (materialId != -1 || structId != -1) {
				if (structId != -1) {
					this.removeStructMaterials(player, structId, amountPerBatch);
				} else {
					if (matCountReq != 0) {
						var amount = separateAmount ? matCountReq : matCountReq * amountPerBatch;
						Backpack.removeHeld(player, materialId, amount);
					}				
				}
				loop++;
				switch (loop) {
				case 2:
					materialId = configApi.objParam(productId, 2656);
					matCountReq = configApi.objParam(productId, 2666);
					//v11 = configApi.objParam(productId, 4135);
					separateAmount = configApi.objParam(productId, 2687) == 1;
					structId = configApi.objParam(productId, 2676);
					//v1 = configApi.objParam(productId, 5457);
					break;
				case 3:
					materialId = configApi.objParam(productId, 2657);
					matCountReq = configApi.objParam(productId, 2667);
					//v11 = configApi.objParam(productId, 4136);
					separateAmount = configApi.objParam(productId, 2688) == 1;
					structId = configApi.objParam(productId, 2677);
					//v1 = configApi.objParam(productId, 5458);
					break;
				case 4:
					materialId = configApi.objParam(productId, 2658);
					matCountReq = configApi.objParam(productId, 2668);
					//v11 = configApi.objParam(productId, 4137);
					separateAmount = configApi.objParam(productId, 2689);
					structId = configApi.objParam(productId, 2678);
					//v1 = configApi.objParam(productId, 5459);
					break;
				case 5:
					materialId = configApi.objParam(productId, 2659);
					matCountReq = configApi.objParam(productId, 2669);
					//v11 = configApi.objParam(productId, 4138);
					separateAmount = configApi.objParam(productId, 2690);
					structId = configApi.objParam(productId, 2679);
					//v1 = configApi.objParam(productId, 5460);
					break;
				case 6:
					materialId = configApi.objParam(productId, 2660);
					matCountReq = configApi.objParam(productId, 2670);
					//v11 = configApi.objParam(productId, 4139);
					separateAmount = configApi.objParam(productId, 2691);
					structId = configApi.objParam(productId, 2680);
					//v1 = configApi.objParam(productId, 5461);
					break;
				case 7:
					materialId = configApi.objParam(productId, 2661);
					matCountReq = configApi.objParam(productId, 2671);
					//v11 = configApi.objParam(productId, 4140);
					separateAmount = configApi.objParam(productId, 2692);
					structId = configApi.objParam(productId, 2681);
					//v1 = configApi.objParam(productId, 5462);
					break;
				case 8:
					materialId = configApi.objParam(productId, 2662);
					matCountReq = configApi.objParam(productId, 2672);
					//v11 = configApi.objParam(productId, 4141);
					separateAmount = configApi.objParam(productId, 2693);
					structId = configApi.objParam(productId, 2682);
					//v1 = configApi.objParam(productId, 5463);
					break;
				case 9:
					materialId = configApi.objParam(productId, 2663);
					matCountReq = configApi.objParam(productId, 2673);
					//v11 = configApi.objParam(productId, 4142);
					separateAmount = configApi.objParam(productId, 2694);
					structId = configApi.objParam(productId, 2683);
					//v1 = configApi.objParam(productId, 5464);
					break;
				case 10:
					materialId = configApi.objParam(productId, 2664);
					matCountReq = configApi.objParam(productId, 2674);
					//v11 = configApi.objParam(productId, 4143);
					separateAmount = configApi.objParam(productId, 2695);
					structId = configApi.objParam(productId, 2684);
					//v1 = configApi.objParam(productId, 5465);
					break;
				default:
					materialId = -1;
					structId = -1;
				}
			}
		},
		removeStructMaterials : function (player, structId, amountPerBatch) {
			var id = configApi.structParam(structId, 2655);
			var matCountReq = configApi.structParam(structId, 2665);
			var separateAmount = configApi.structParam(structId, 2686) == 1;
			var loop = 1;
			while (id != -1) {
				if (separateAmount) {
					Backpack.removeHeld(player, id, matCountReq);
				} else {
					Backpack.removeHeld(player, id, matCountReq * amountPerBatch);
				}
				loop++;
				switch (loop) {
				case 2:
					id = configApi.structParam(structId, 2656);
					matCountReq = configApi.structParam(structId, 2666);
					separateAmount = configApi.structParam(structId, 2687) == 1;
					break;
				case 3:
					id = configApi.structParam(structId, 2657);
					matCountReq = configApi.structParam(structId, 2667);
					separateAmount = configApi.structParam(structId, 2688) == 1;
					break;
				case 4:
					id = configApi.structParam(structId, 2658);
					matCountReq = configApi.structParam(structId, 2668);
					separateAmount = configApi.structParam(structId, 2689) == 1;
					break;
				case 5:
					id = configApi.structParam(structId, 2659);
					matCountReq = configApi.structParam(structId, 2669);
					separateAmount = configApi.structParam(structId, 2690) == 1;
					break;
				case 6:
					id = configApi.structParam(structId, 2660);
					matCountReq = configApi.structParam(structId, 2670);
					separateAmount = configApi.structParam(structId, 2691) == 1;
					break;
				case 7:
					id = configApi.structParam(structId, 2661);
					matCountReq = configApi.structParam(structId, 2671);
					separateAmount = configApi.structParam(structId, 2692) == 1;
					break;
				case 8:
					id = configApi.structParam(structId, 2662);
					matCountReq = configApi.structParam(structId, 2672);
					separateAmount = configApi.structParam(structId, 2693) == 1;
					break;
				case 9:
					id = configApi.structParam(structId, 2663);
					matCountReq = configApi.structParam(structId, 2673);
					separateAmount = configApi.structParam(structId, 2694) == 1;
					break;
				case 10:
					id = configApi.structParam(structId, 2664);
					matCountReq = configApi.structParam(structId, 2674);
					separateAmount = configApi.structParam(structId, 2695) == 1;
					break;
				default:
					id = -1;
				}
			}
		}
}