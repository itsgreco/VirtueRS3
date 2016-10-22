var Craftings = {
		LEATHER : {
			itemID : 1741,
			category : 6987,
			animation : 25594,
			defaultProduct : 50
		}
}

var CraftType = {
		LEATHER_USING : {
			category : 6987,//6987
			categoryNames : 6988,//6988
			subCategory : -1,//6991
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},
		HARDLEATHER_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},
		IMPHIDE_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},		
		SPIDER_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},	
		CARAPACE_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},
		BATWING_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},	
		GREEN_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},
		BLUE_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},
		RED_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},
		BLACK_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},
		ROYAL_USING : {
			category : 6987,
			categoryNames : 6988,
			subCategory : -1,//
			tool : -1,
			animation : 25594,
			delay : 3,
			successText : "You make the item."
		},
		UNCUT_GEMS : {
			category : 6981,
			categoryNames : 6982,
			subCategory : -1,//6983
			tool : -1,
			animation : 22774,
			delay : 2,
			successText : "You cut the gem!"
		},
		BOLT_TIPS : {
			category : 6981,
			categoryNames : 6982,
			subCategory : -1,//6961
			tool : -1,
			animation : 22774,
			delay : 3,
			successText : "You cut the gem into bolt tips!"
		}
}

var CraftMaterial = {
		24374 : {//Royal Dragonhide
			itemId : 24374,
			useWith : [1733],
			type : CraftType.ROYAL_USING,
			category : 6997,
			defaultProduct : 24376,
			animation : 25594
		},	
		2509 : {//Black Dragonhide
			itemId : 2509,
			useWith : [1733],
			type : CraftType.BLACK_USING,
			category : 6996,
			defaultProduct : 2491,
			animation : 25594
			
		},	
		2507 : {//Red Dragonhide
			itemId : 2507,
			useWith : [1733],
			type : CraftType.RED_USING,
			category : 6995,
			defaultProduct : 2489,
			animation : 25594
		},	
		2505 : {//Blue Dragonhide
			itemId : 2505,
			useWith : [1733],
			type : CraftType.BLUE_USING,
			category : 6994,
			defaultProduct : 2487,
			animation : 25594
		},			
		1745 : {//Green Dragonhide
			itemId : 1741,
			useWith : [1733],
			type : CraftType.GREEN_USING,
			category : 6993,
			defaultProduct : 1065,
			animation : 25594
		},	
		1741 : {//Normal Leather
			itemId : 1741,
			useWith : [1733],
			type : CraftType.LEATHER_USING,
			category : 6991,
			defaultProduct : 1059,
			animation : 25594
		},
		1743 : {//Hard Leather
			itemId : 1743,
			useWith : [1733],
			type : CraftType.HARDLEATHER_USING,
			category : 6991,
			defaultProduct : 25875,
			animation : 25594
		},
		25551 : {//Carapace
			itemId : 25551,
			useWith : [1733],
			type : CraftType.CARAPACE_USING,
			category : 7003,
			defaultProduct : 25865,
			animation : 25594
		},				
		25545 : {//Imphide
			itemId : 25545,
			useWith : [1733],
			category : 7002,
			type : CraftType.IMPHIDE_USING,
			defaultProduct : 25851,
			animation : 25594
		},		
		25549 : {//Batwing
			itemId : 25549,
			useWith : [1733],
			type : CraftType.BATWING_USING,
			category : 7000,
			defaultProduct : 25829,
			animation : 25594
		},
		25547 : {//Spider silk
			itemId : 25547,
			useWith : [1733],
			category : 7001,
			type : CraftType.SPIDER_USING,
			defaultProduct : 25843,
			animation : 25594
		},
		6289 : {//Snakeskin
			itemId : 6289,
			useWith : [1733],
			category : 6992,
			type : CraftType.SPIDER_USING,
			defaultProduct : 6328,
			animation : 25594
		},
		
		1625 : {//Uncut Opal
			itemId : 1625,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 1609,
			animation : 22774
		},	
		1627 : {//Uncut Jade
			itemId : 1627,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 1611,
			animation : 22774
		},		
		1629 : {//Uncut Red Topaz
			itemId : 1629,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 1613,
			animation : 22774
		},				
		1623 : {//Uncut Sapphire
			itemId : 1623,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 1607,
			animation : 22774
		},	
		1621 : {//Uncut Emerald
			itemId : 1621,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 1605,
			animation : 22775
		},	
		1619 : {//Uncut Ruby
			itemId : 1619,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 1603,
			animation : 22776
		},		
		1617 : {//Uncut Diamond
			itemId : 1617,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 1601,
			animation : 22777
		},	
		1631 : {//Uncut Dragonstone
			itemId : 1631,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 1615,
			animation : 22781
		},		
		6571 : {//Uncut Onyx
			itemId : 6571,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 6573,
			animation : 22782
		},	
		31853 : {//Uncut Hydrix
			itemId : 31853,
			useWith : [1755],
			type : CraftType.UNCUT_GEMS,
			category : 6983,
			defaultProduct : 31855,
			animation : 22782
		},
		1607 : {//Bolt Tips Sapphire
			itemId : 1607,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 9189,
			animation : 22774
		},	
		2861 : {//Bolt Tips Opal
			itemId : 2861,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 45,
			animation : 22774
		},		
		1611 : {//Bolt Tips Jade
			itemId : 1611,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 9187,
			animation : 22774
		},	
		1613 : {//Bolt Tips Topaz
			itemId : 1613,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 9188,
			animation : 22774
		},	
		1605 : {//Bolt Tips Emerald
			itemId : 1605,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 9190,
			animation : 22775
		},	
		1603 : {//Bolt Tips Ruby
			itemId : 1603,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 9191,
			animation : 22776
		},	
		1601 : {//Bolt Tips Diamond
			itemId : 1601,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 9192,
			animation : 22777
		},		
		1615 : {//Bolt Tips Dragonstone
			itemId : 1615,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 9193,
			animation : 22781
		},	
		6573 : {//Bolt Tips Onyx
			itemId : 6573,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 9194,
			animation : 22782
		},		
		31855 : {//Bolt Tips Hydrix
			itemId : 31855,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 31867,
			animation : 22782
		},				
		2859 : {//Bolt Tips Wolf Bones
			itemID : 2859,
			useWith : [1755],
			type : CraftType.BOLT_TIPS,
			category : 6961,
			defaultProduct : 2861,
			animation : 22781
		}		
		
		
}

var OpHeldUseListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		var player = args.player;		
		var itemId = api.getId(args.item);
		var useitemId = api.getId(args.useitem);
		var slot = args.slot;
		
		var validUse = false;
		var product = null;
		switch (itemId) {

		}
		
		if (validUse) {
			Crafting.handleCraft(player, itemId, slot, product);
		} else {
			defaultOpHeldUseHandler(player, args);
		}
	}
});

var OpHeldListner = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		
		Crafting.handleCraft(player, api.getId(args.item), args.slot);
	}
});

/* Listen to the item ids specified */
var listen = function(scriptManager) {
	Crafting.initMaterialLookup();
	Crafting.initProductLookup();
	
	var opHeldListener = new OpHeldListner();
	var opHeldUseListener = new OpHeldUseListener();
	
	scriptManager.registerListener(EventType.OPHELD1, 24374, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 2509, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 2507, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 2505, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1745, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1741, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1743, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 25551, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 25549, opHeldListener);//batwing
	scriptManager.registerListener(EventType.OPHELD1, 25547, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 25545, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 6289, opHeldListener);//
	
	scriptManager.registerListener(EventType.OPHELD1, 1625, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1627, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1629, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1623, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1621, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1619, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1617, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1631, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 6571, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 31853, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1607, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 2861, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1611, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1613, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1605, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1603, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1601, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 1615, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 6573, opHeldListener);//
	scriptManager.registerListener(EventType.OPHELD1, 31855, opHeldListener);//
	
};

var Crafting = {
		MaterialType : {
			LEATHER : {
				category : 6987,
				categoryNames : 6988,
				text : "You carefully craft the hide into: ",
				animation : 25594
			},
			GEMS : {
				category : 6981,
				categoryNames : 6982,
				text : "You carefully cut the gem into: ",
				animation : 22774
			}

		},
		materialLookup : {},
		initMaterialLookup : function () {
			this.materialLookup = {};
			var that = this;
			function addMaterial (id, category, type) {
				that.materialLookup[id] = {
						"id" : id, 
						"category" : category,
						"type" : type
						};
			}
			addMaterial(24374, 6997, this.MaterialType.LEATHER);//
			addMaterial(2509, 6996, this.MaterialType.LEATHER);//
			addMaterial(2507, 6995, this.MaterialType.LEATHER);//
			addMaterial(2505, 6994, this.MaterialType.LEATHER);//
			addMaterial(1745, 6993, this.MaterialType.LEATHER);//
			addMaterial(1741, 6991, this.MaterialType.LEATHER);//
			addMaterial(1743, 6991, this.MaterialType.LEATHER);//
			addMaterial(25551, 7003, this.MaterialType.LEATHER);//
			addMaterial(25545, 7002, this.MaterialType.LEATHER);//
			addMaterial(25547, 7001, this.MaterialType.LEATHER);//
			addMaterial(25549, 7000, this.MaterialType.LEATHER);//
			addMaterial(6289, 6992, this.MaterialType.LEATHER);//
			
			addMaterial(1625, 6983, this.MaterialType.GEMS);//
			addMaterial(1627, 6983, this.MaterialType.GEMS);//
			addMaterial(1629, 6983, this.MaterialType.GEMS);//
			addMaterial(1623, 6983, this.MaterialType.GEMS);//
			addMaterial(1621, 6983, this.MaterialType.GEMS);//
			addMaterial(1619, 6983, this.MaterialType.GEMS);//
			addMaterial(1617, 6983, this.MaterialType.GEMS);//
			addMaterial(1631, 6983, this.MaterialType.GEMS);//
			addMaterial(6571, 6983, this.MaterialType.GEMS);//
			addMaterial(31853, 6983, this.MaterialType.GEMS);//
			addMaterial(1607, 6961, this.MaterialType.GEMS);//
			
			addMaterial(2861, 6961, this.MaterialType.GEMS);//
			addMaterial(1611, 6961, this.MaterialType.GEMS);//
			addMaterial(1613, 6961, this.MaterialType.GEMS);//
			addMaterial(1605, 6961, this.MaterialType.GEMS);//
			addMaterial(1603, 6961, this.MaterialType.GEMS);//
			addMaterial(1601, 6961, this.MaterialType.GEMS);//
			addMaterial(1615, 6961, this.MaterialType.GEMS);//
			addMaterial(6573, 6961, this.MaterialType.GEMS);//
			addMaterial(31855, 6961, this.MaterialType.GEMS);//
			addMaterial(2859, 6961, this.MaterialType.GEMS);//
			
			
			
			
		},
		productLookup : {},
		initProductLookup : function () {
			this.productLookup = {};
			var that = this;
			function addProduct (id, animation, text) {
				that.productLookup[id] = {"id":id, "animation":animation, "text":text};
			}

		},
		handleCraft : function (player, itemId, slot, productId) {
			var material = this.materialLookup[itemId];
			if (material === undefined) {
				throw "Unsupported material: "+itemId;
			}
			api.setVarp(player, 1168, material.type.category);
			api.setVarc(player, 2222, material.type.categoryNames);
			api.setVarp(player, 1169, material.category);
			if (typeof(productId) === "number") {
				api.setVarp(player, 1170, productId);
			}
			api.openCentralWidget(player, 1370, false);
			var that = this;
			var Handler = Java.extend(Java.type('org.virtue.game.content.dialogues.InputEnteredHandler'), {				
				handle: function(value) {
					api.closeCentralWidgets(player);
					productId = api.getVarp(player, 1170);
					var amount = api.getVarBit(player, 1003);
					var productData = that.productLookup[productId];
					if (amount > 0) {
						api.setVarp(player, 1175, productId);
						var animation = productData !== undefined ? productData.animation : material.type.animation;
						var text = productData !== undefined && productData.text !== undefined ? productData.text : material.type.text+configApi.objName(productId);
						CraftProcess.startCrafting(player, amount, animation, text);
					}			
				}			
			});
			api.setInputHandler(player, new Handler());
		}
}

