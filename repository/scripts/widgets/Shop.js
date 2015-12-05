/**
 * Copyright (c) 2014 Virtue Studios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions\:
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
 * @since 8/02/2015
 */
var api;

var BACKPACK = 93;

var WidgetListener = Java.extend(Java.type('org.virtue.script.listeners.WidgetListener'), {

	/* The interface ids to bind to */
	getIDs: function() {
		return [1265];
	},
	
	open : function (player, parentID, parentComponent, interfaceID) {
		//api.setVarp(player, 304, 4);
		//api.setVarp(player, 305, -1);
		api.setVarp(player, 306, 995);//Currency
		var shopID = api.getVarp(player, 304);
		if (shopID != -1) {
			if (!api.containerReady(player, shopID)) {
				if (api.isAdmin(player)) {
					api.sendMessage(player, "The stock for this shop has not been added to ContainerState.java. ContainerID="+shopID);
				} else {
					api.sendMessage(player, "This shop is not fully implemented. Please contact an admin for assistance.");
				}				
				return;
			}
			api.sendContainer(player, shopID);
		}
		var freeStock = api.getVarp(player, 305);
		if (freeStock != -1) {
			if (!api.containerReady(player, freeStock)) {
				if (api.isAdmin(player)) {
					api.sendMessage(player, "The free stock for this shop has not been added to ContainerState.java. ContainerID="+freeStock);
				} else {
					api.sendMessage(player, "This shop is not fully implemented. Please contact an admin for assistance.");
				}				
				return;
			}
			api.sendContainer(player, freeStock);
		}
		var canSell = 0;
		for (var slot=0; slot<28; slot++) {
			var item = api.getItem(player, BACKPACK, slot);
			if (item != null && Shop.canSellTo(player, api.getVarp(player, 304), item.getID())) {
				canSell |= 1 << slot;
			}			
		}
		api.setVarc(player, 1879, canSell);//Bitpacked can sell
		api.setWidgetEvents(player, 1265, 20, 0, 40, 2097406);
		api.setWidgetEvents(player, 1265, 21, 0, 40, 2097406);
		api.setWidgetEvents(player, 1265, 26, 0, 40, 10223616);
		
	},

	/* A button clicked on the interface */
	handleInteraction: function(player, interfaceID, component, slot, itemID, option) {
		if (api.getVarp(player, 304) != -1 && !api.containerReady(player, api.getVarp(player, 304))) {
			if (api.isAdmin(player)) {
				api.sendMessage(player, "The stock for this shop has not been added to ContainerState.java. ContainerID="+api.getVarp(player, 304));
			} else {
				api.sendMessage(player, "This shop is not fully implemented. Please contact an admin for assistance.");
			}				
			return true;
		}
		switch (component) {
		case 20://Selected item
			if (api.getVarp(player, 303) == 0) {
				Shop.handleBuyButton(player, slot, option);
			} else {
				Shop.handleSellButton(player, slot, option);
			}
			return true;
		case 21://Free item stock
			Shop.handleTakeButton(player, slot, option);
			return true;
		case 28://Switch to "Buy Items"
			api.setVarp(player, 303, 0);
			return true;
		case 29://Switch to "Sell Items"
			api.setVarp(player, 303, 1);
			return true;
		case 49://Show full names
			api.setVarBit(player, 987, 1);
			return true;
		case 50://Show icons
			api.setVarBit(player, 987, 0);
			return true;
		case 205://Buy/Take/Sell
			if (api.getVarp(player, 299) == api.getVarp(player, 304)) {
				Shop.buyItem(player, api.getVarp(player, 300), api.getVarp(player, 302));
			} else if (api.getVarp(player, 299) == BACKPACK) {
				Shop.sellItem(player, api.getVarp(player, 300), api.getVarp(player, 302));
			} else if (api.getVarp(player, 299) == api.getVarp(player, 305)) {
				Shop.takeItem(player, api.getVarp(player, 300), api.getVarp(player, 302));
			}
			return true;
		case 15://Add one
			/*if (api.getVarp(player, 302) < api.itemTotal(player, api.getVarp(player, 299), api.getVarp(player, 300))) {
				api.incrementVarp(player, 302, 1);
			}*/
			api.setVarp(player, 302, Math.min(api.getVarp(player, 302)+1, Shop.getMaxBuySellAmount(player, api.getVarp(player, 300))));
			return true;
		case 212://Add 5
			api.setVarp(player, 302, Math.min(api.getVarp(player, 302)+5, Shop.getMaxBuySellAmount(player, api.getVarp(player, 300))));
			//api.setVarp(player, 302, Math.min(api.getVarp(player, 302)+5, api.itemTotal(player, api.getVarp(player, 299), api.getVarp(player, 300))));
			return true;
		case 215://Set max amount
			api.setVarp(player, 302, Shop.getMaxBuySellAmount(player, api.getVarp(player, 300)));
			//api.setVarp(player, 302, api.itemTotal(player, api.getVarp(player, 299), api.getVarp(player, 300)));
			return true;
		case 218://Subtract 1
			if (api.getVarp(player, 302) > 1) {
				api.incrementVarp(player, 302, -1);
			}
			return true;
		case 221://Subtract 5
			api.setVarp(player, 302, Math.max(api.getVarp(player, 302)-5, 1));
			return true;
		case 224://Set min amount
			api.setVarp(player, 302, 1);
			return true;
		case 256:
		case 266://Continue button
			api.hideWidget(player, 1265, 64, true);
			return true;
		case 251://Confirm buy
			Shop.buyItem(player, api.getVarp(player, 300), api.getVarp(player, 302), true);
		case 242://Cancel buy
		case 232://Clicked area around buy warning
			api.hideWidget(player, 1265, 62, true);
			return true;
		case 189://Confirm sell
			Shop.sellItem(player, api.getVarp(player, 300), api.getVarp(player, 302), true);
		case 197://Cancel sell
		case 1://Clicked area around sell warning
			api.hideWidget(player, 1265, 63, true);
			return true;
		default:
			return false;
		}
	},
	
	close : function (player, parentID, parentComponent, interfaceID) {
		api.setVarp(player, 304, -1);
		api.setVarp(player, 305, -1);
		api.setVarp(player, 306, -1);
		api.setVarc(player, 1876, -1);
		api.setVarc(player, 1878, -1);
	},
	
	drag : function (player, interface1, component1, slot1, item1, interface2, component2, slot2, item2) {
		return false;
	}

});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	api = scriptManager.getApi();
	var widgetListener = new WidgetListener();
	scriptManager.registerWidgetListener(widgetListener, widgetListener.getIDs());
};


var Shop = {
		handleBuyButton : function (player, slot, option) {
			Shop.setSelectedItem(player, api.getVarp(player, 304), slot);
			var amount = 0;
			var itemID = api.getItem(player, api.getVarp(player, 304), slot).getID();
			switch (option) {
			case 2:
				amount = 1;
				break;
			case 3:
				amount = 5;
				break;
			case 4:
				amount = 10;
				break;
			case 5:
				amount = 50;
				break;
			case 6:
				amount = 500;
				break;
			case 7:
				amount = api.itemTotal(player, api.getVarp(player, 304), itemID);
				break;
			}
			if (amount > 0) {
				Shop.buyItem(player, itemID, amount);
			}
			
		},
		handleSellButton : function (player, slot, option) {
			Shop.setSelectedItem(player, BACKPACK, slot);
			var amount = 0;
			var itemID = api.getItem(player, BACKPACK, slot).getID();
			switch (option) {
			case 2:
				amount = 1;
				break;
			case 3:
				amount = 5;
				break;
			case 4:
				amount = 10;
				break;
			case 5:
				amount = 50;
				break;
			case 6:
				amount = 500;
				break;
			}
			if (amount > 0) {
				Shop.sellItem(player, itemID, amount);
			}
		},
		handleTakeButton : function (player, slot, option) {
			if (!api.containerReady(player, api.getVarp(player, 305))) {
				if (api.isAdmin(player)) {
					api.sendMessage(player, "The free stock for this shop has not been added to ContainerState.java. ContainerID="+api.getVarp(player, 305));
				} else {
					api.sendMessage(player, "This shop is not fully implemented. Please contact an admin for assistance.");
				}				
				return;
			}
			Shop.setSelectedItem(player, api.getVarp(player, 305), slot);
			var amount = 0;
			var itemID = api.getItem(player, api.getVarp(player, 305), slot).getID();
			switch (option) {
			case 2:
				amount = 1;
				break;
			case 3:
				amount = 5;
				break;
			case 4:
				amount = 10;
				break;
			case 5:
				amount = 50;
				break;
			case 6:
				amount = 500;
				break;
			case 7:
				amount = api.itemTotal(player, api.getVarp(player, 305), itemID);
				break;
			}
			if (amount > 0) {
				Shop.takeItem(player, itemID, amount);
			}
			
		},
		setSelectedItem : function (player, inv, slot) {
			api.setVarp(player, 299, inv);
			api.setVarp(player, 301, slot);
			var itemID = api.getItem(player, inv, slot).getID();
			api.setVarp(player, 300, itemID);
			api.setVarp(player, 302, Math.min(Math.max(api.getVarp(player, 302), 1), api.itemTotal(player, inv, itemID)));
			api.setVarc(player, 2361, api.getItemType(itemID).getExamineText())
			//api.sendMessage(player, "Setting selected item to inv="+inv+", slot="+slot);
		},
		buyItem : function (player, itemID, amount, confirmed) {
			var invID = api.getVarp(player, 304);
			amount = Math.min(amount, api.itemTotal(player, invID, itemID));
			if (amount < 1) {
				return;//Shop has no stock
			}
			if (!api.getItemType(itemID).isStackable()) {
				amount = Math.min(amount, api.freeSpaceTotal(player, "backpack"));
			} else if (api.itemTotal(player, invID, itemID) < 1 && api.freeSpaceTotal(player, "backpack") < 1) {
				Shop.showMessage(player, "You have no inventory space at the moment and cannot buy anything.");
				return;//Full backpack
			} 
			if (amount < 1) {
				Shop.showMessage(player, "You have no inventory space at the moment and cannot buy anything.");
				return;//Full backpack
			}
			var cost = Shop.getBuyCost(player, itemID);
			var currentMoneyAmount = api.carriedItemTotal(player, api.getVarp(player, 306));
			if (amount > (currentMoneyAmount/cost)) {				
				Shop.showMessage(player, "You don't have enough coins to buy "+amount+".");
				amount = (currentMoneyAmount/cost);
			}
			if (amount < 1) {
				return;//Can't afford any
			}
			if (!confirmed && cost*amount > 100000) {
				api.setVarp(player, 302, amount);
				api.setVarp(player, 300, itemID);
				api.hideWidget(player, 1265, 62, false);
				return;
			}
			api.delCarriedItem(player, api.getVarp(player, 306), amount*cost);
			api.delItem(player, invID, itemID, amount);
			api.addCarriedItem(player, itemID, amount);
			Shop.sendBackpackCanSell(player, invID);
		},
		sellItem : function (player, itemID, amount, confirmed) {
			var shopInv = api.getVarp(player, 304);
			if (!Shop.canSellTo(player, shopInv, itemID)) {
				return;//Can't sell this item
			}
			amount = Math.min(amount, api.itemTotal(player, "backpack", itemID));
			if (api.itemTotal(player, shopInv, itemID) < 1 
					&& api.defaultItemTotal(player, shopInv, itemID) == -1
					&& api.freeSpaceTotal(player, shopInv) < 1) {
				return;//Shop does not have space for item
			}
			var value = Shop.getSellPrice(player, itemID);
			if (!confirmed && value*amount > 30000) {
				api.setVarp(player, 302, amount);
				api.setVarp(player, 300, itemID);
				api.hideWidget(player, 1265, 63, false);
				return;
			}
			api.delItem(player, "backpack", itemID, amount);
			if (api.getItemType(itemID).certtemplate != -1) {
				itemID = api.getItemType(itemID).certlink;
			}
			api.addItem(player, shopInv, itemID, amount);
			api.addCarriedItem(player, api.getVarp(player, 306), amount*value);
			Shop.sendBackpackCanSell(player, shopInv);
			//api.sendMessage(player, "Selling item "+itemID+", amount="+amount+", value="+value);
		},
		takeItem : function (player, itemID, amount) {
			var invID = api.getVarp(player, 305);
			amount = Math.min(amount, api.itemTotal(player, invID, itemID));
			if (amount < 1) {
				return;//Shop has no stock
			}
			if (!api.getItemType(itemID).isStackable()) {
				amount = Math.min(amount, api.freeSpaceTotal(player, "backpack"));
			} else if (api.itemTotal(player, "backpack", itemID) < 1 && api.freeSpaceTotal(player, "backpack") < 1) {
				Shop.showMessage(player, "You don't have enough inventory space to take that.");
				return;//Full backpack
			} 
			if (amount < 1) {
				Shop.showMessage(player, "You don't have enough inventory space to take that.");
				return;//Full backpack
			}
			api.delItem(player, invID, itemID, amount);
			api.addCarriedItem(player, itemID, amount);
			Shop.sendBackpackCanSell(player, api.getVarp(player, 304));
		},
		getBuyCost : function (player, itemID) {
			return Math.max(api.getItemType(itemID).cost, 1);
		},
		getSellPrice : function (player, itemID) {
			var price = Math.floor((api.getItemType(itemID).cost * 30) / 100);
			return Math.max(price, 1);
		},
		canSellTo : function (player, invID, itemID) {
			var enumType = api.getEnumType(921);
			if (api.getItemType(itemID).certtemplate != -1) {
				itemID = api.getItemType(itemID).certlink;
			}
			if (enumType.getValueInt(invID) != 1) {
				if (api.defaultItemTotal(player, invID, itemID) == -1) {
					return false;
				}
			} else if (!api.getItemType(itemID).canSellToGeneralStore()) {
				return false;
			} else if (itemID == 995 || itemID == api.getVarp(player, 306)) {
				return false;
			}
			return true;
		},
		sendBackpackCanSell : function (player, shopInv) {
			var canSell = 0;
			for (var slot=0; slot<28; slot++) {
				var item = api.getItem(player, "backpack", slot);
				if (item != null && Shop.canSellTo(player, shopInv, item.getID())) {
					canSell |= 1 << slot;
				}			
			}
			api.setVarc(player, 1879, canSell);//Bitpacked can sell
		},
		getMaxBuySellAmount : function (player, itemID) {
			if (api.getVarp(player, 299) == BACKPACK) {
				return Math.max(api.itemTotal(player, "backpack", itemID), 1);
			} else {
				var shopStock = api.itemTotal(player, api.getVarp(player, 299), itemID);
				if (!api.getItemType(itemID).isStackable()) {
					var freeSpace = api.freeSpaceTotal(player, "backpack");
					return Math.max(Math.min(shopStock, freeSpace), 1);
				} else {
					return Math.max(shopStock, 1);
				}				
			}
		},
		showMessage : function (player, message) {
			api.sendFilterMessage(player, message);
			api.hideWidget(player, 1265, 64, false);
			api.setWidgetText(player, 1265, 260, message);
		}
}