var TreeType = {
    NORMAL : {
        level : 1,
        xp : 25,
        logId : 1511,
        baseTime : 20,
        randomTime : 4,
        stumpID : 1341,
        respawnDelay : 8,
        randomLife : 0
    },
    EVERGREEN : {
        level : 1,
        xp : 25,
        logId : 1511,
        baseTime : 20,
        randomTime : 4,
        stumpID : 57931,
        respawnDelay : 8,
        randomLife : 0
    },
    DEAD : {
        level : 1,
        xp : 25,
        logId : 1511,
        baseTime : 20,
        randomTime : 4,
        stumpID : 12733,
        respawnDelay : 8,
        randomLife : 0
    },
    SWAMP : {//TODO Find the correct ids for this tree
        level : 1,
        xp : 25,
        logId : 1511,
        baseTime : 20,
        randomTime : 4,
        stumpID : 12733,
        respawnDelay : 8,
        randomLife : 0
    },
    ACHEY : {
        level : 1,
        xp : 25,
        logId : 2862,
        baseTime : 20,
        randomTime : 4,
        stumpID : 69555,
        respawnDelay : 8,
        randomLife : 0
    },
	EUCALYPTUS : {
        level : 1,
        xp : 25,
        logId : 12581,
        baseTime : 20,
        randomTime : 4,
        stumpID : 70073,
        respawnDelay : 8,
        randomLife : 0
    },
    OAK : {
        level : 15,
        xp : 35.7,
        logId : 1521,
        baseTime : 30,
        randomTime : 4,
        stumpID : 78118,
        respawnDelay : 15,
        randomLife : 15
    },
    WILLOW : {
        level : 30,
        xp : 67.5,
        logId : 1519,
        baseTime : 60,
        randomTime : 4,
        stumpID : 1341,
        respawnDelay : 51,
        randomLife : 15
    },
	TEAK : {
        level : 35,
        xp : 85.5,//todo
        logId : 6333,
        baseTime : 60,//
        randomTime : 4,//
        stumpID : 9037,
        respawnDelay : 51,//
        randomLife : 15//
    },
    MAPLE : {
        level : 45,
        xp : 100,
        logId : 1517,
        baseTime : 83,
        randomTime : 16,
        stumpID : 51843,
        respawnDelay : 72,
        randomLife : 10
    },
	MAHOGANY : {
        level : 50,
        xp : 125,
        logId : 6332,
        baseTime : 83,//////todo
        randomTime : 16,/////
        stumpID : 70080,
        respawnDelay : 72,////
        randomLife : 10///////
    },
    YEW : {
        level : 60,
        xp : 175,
        logId : 1515,
        baseTime : 120,
        randomTime : 17,
        stumpID : 1341,
        respawnDelay : 94,
        randomLife : 10
    },
    IVY : {
        level : 68,
        xp : 332.5,
        logId : -1,
        baseTime : 120,
        randomTime : 17,
        stumpID : 46319,
        respawnDelay : 58,
        randomLife : 10
    },
    MAGIC : {
        level : 75,
        xp : 250,
        logId : 1513,
        baseTime : 150,
        randomTime : 21,
        stumpID : 37824,
        respawnDelay : 121,
        randomLife : 10
    },
    CURSED_MAGIC : {
        level : 82,
        xp : 250,
        logId : 1513,
        baseTime : 150,
        randomTime : 21,
        stumpID : 37822,
        respawnDelay : 121,
        randomLife : 10
    },
	ELDER_TREE : {
		level : 90,
		xp : 500,
		logId : 29556,
		baseTime : 175,
		randomTime : 21,
		stumpID : -1,
		respawnDelay : 130,
		randomLife : 15
	},
	CRYSTAL_TREE : {
		level : 94,
		xp : 25000,
		logId : -1,
		baseTime : 180,
		randomTime : 21,
		stumpID : -1,
		respawnDelay : 130,
		randomLife : 15
	}
};

var Hatchet = {
	BRONZE : {
		level : 1,
		time : 1,
		anim : 21668,
		itemID : 1351
	},
	IRON : {
		level : 1,
		time : 2,
		anim : 21667,
		itemID : 1349
	},
	STEEL : {
		level : 6,
		time : 3,
		anim : 21666,
		itemID : 1353
	},
	BLACK : {
		level : 11,
		time : 4,
		anim : 21665,
		itemID : 1361
	},
	MITHRIL : {
		level : 21,
		time : 5,
		anim : 21664,
		itemID : 1355
	},
	ADAMANT : {
		level : 31,
		time : 7,
		anim : 21663,
		itemID : 1357
	},
	RUNE : {
		level : 41,
		time : 10,
		anim : 21662,
		itemID : 1359
	},
	DRAGON : {
		level : 61,
		time : 13,
		anim : 21669,
		itemID : 6739
	},
	CRYSTAL : {
		level : 71,
		time : 16,
		anim : 25169, //25182 for canoe ?
		itemID : 32645
	}
};

var TreeListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var tree = Woodcutting.getByLocType(locTypeId);
		var location = args.location;
		
		if (tree === undefined) {
			var type = Woodcutting.typeForTreeName(api.getLocType(args.location).name);
			tree = {"type":type, "tree":locTypeId, "stump":type.stumpID};			
		}
		Woodcutting.chopTree(player, location, tree, function () {
			Woodcutting.fellTree(location, tree.stump, tree.type.respawnDelay);
		});	
	}
});

/* Listen to the events specified */
var listen = function(scriptManager) {
	Woodcutting.loadTrees();
	var listener = new TreeListener();
	var locs = [33878, 38786, 61192, 47600, 38627, 61191, 38783, 38731, 46322, 46320, 46324, 9387, 9355, 87516, 87533,92442,92440];
	for (var i in Woodcutting.treeRegistry) {
		locs.push(Woodcutting.treeRegistry[i].tree);
	}
	for (var i in locs) {
		//Bind option one on all trees to this listener
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};
var Woodcutting = {
		treeRegistry : {},
		loadTrees : function () {
			//Add new trees here. Try to find their stump ID if possible..
			this.registerTree(TreeType.NORMAL, 38760, 40350);
            this.registerTree(TreeType.NORMAL, 38785, 40354);
			this.registerTree(TreeType.NORMAL, 38787, 40356);
			this.registerTree(TreeType.NORMAL, 38786, 40355);
			this.registerTree(TreeType.NORMAL, 38782, 40351);
			this.registerTree(TreeType.NORMAL, 38784, 40352);
			this.registerTree(TreeType.NORMAL, 38783, 40352);
			this.registerTree(TreeType.NORMAL, 38788, 40357);
			this.registerTree(TreeType.NORMAL, 1276, 1342);
			this.registerTree(TreeType.NORMAL, 93384, 40352);
			this.registerTree(TreeType.NORMAL, 79813, 79814);
            this.registerTree(TreeType.NORMAL, 70060, 70062);
			this.registerTree(TreeType.NORMAL, 99822, 99830);
			this.registerTree(TreeType.NORMAL, 99823, 99831);
			this.registerTree(TreeType.NORMAL, 99824, 99832);
            this.registerTree(TreeType.NORMAL, 99825, 99833);

			
			
			this.registerTree(TreeType.EVERGREEN, 54787, 57931);
			this.registerTree(TreeType.EVERGREEN, 54778, 54783);

			
			this.registerTree(TreeType.SWAMP, 9387, 10951);
			this.registerTree(TreeType.SWAMP, 9388, 11855);
			//this.registerTree(TreeType.SWAMP, 2409, 0);//from members quest
			this.registerTree(TreeType.SWAMP, 9354, 11059);
			this.registerTree(TreeType.SWAMP, 9366, 11864);
			this.registerTree(TreeType.SWAMP, 9355, 11862);
			this.registerTree(TreeType.SWAMP, 3300, 11865);
			
			this.registerTree(TreeType.DEAD, 68903, 68906 );
			this.registerTree(TreeType.DEAD, 68901, 68904);
			this.registerTree(TreeType.DEAD, 68902, 68905 );
			this.registerTree(TreeType.DEAD, 11866, 9389);
			this.registerTree(TreeType.DEAD, 1286, 1351);
			this.registerTree(TreeType.DEAD, 1283, 1347);
			this.registerTree(TreeType.DEAD, 1282, 1347);
			this.registerTree(TreeType.DEAD, 1291, 23054);			
			this.registerTree(TreeType.DEAD, 1383, 1358);
			this.registerTree(TreeType.DEAD, 47600, 47601);
			this.registerTree(TreeType.DEAD, 47594, 47595);
			this.registerTree(TreeType.DEAD, 47598, 47599);
			this.registerTree(TreeType.DEAD, 47596, 47597);
			this.registerTree(TreeType.DEAD, 1289, 1353);
			this.registerTree(TreeType.DEAD, 69144, 69146);
			this.registerTree(TreeType.DEAD, 69139, 69140);
			this.registerTree(TreeType.DEAD, 24168, 24169);//dying tree
			
			this.registerTree(TreeType.DEAD, 4820, 4821);//Jungle tree
			this.registerTree(TreeType.DEAD, 4818, 4819);//Jungle tree
			this.registerTree(TreeType.DEAD, 2887, 17493);//Jungle tree
			
			
			this.registerTree(TreeType.ACHEY, 69554, 69555);
			this.registerTree(TreeType.ACHEY, 69556, 69557);
			
			this.registerTree(TreeType.EUCALYPTUS, 70071, 70073);//EUCALYPTUS tree needs fix
			this.registerTree(TreeType.EUCALYPTUS, 70068, 70070);//EUCALYPTUS tree needs fix
			this.registerTree(TreeType.EUCALYPTUS, 70066, 70067);
			
			this.registerTree(TreeType.OAK, 38732, 38754);
			this.registerTree(TreeType.OAK, 38731, 38741);
			
			this.registerTree(TreeType.WILLOW, 38616, 38725);
            this.registerTree(TreeType.WILLOW, 38627, 38725);
			this.registerTree(TreeType.WILLOW, 58006, 38725);
			
			
			this.registerTree(TreeType.TEAK, 9036, 9037);
			
			
			this.registerTree(TreeType.MAPLE, 51843, 54766);
			
			this.registerTree(TreeType.MAHOGANY, 70075, 70080);
			
			
			this.registerTree(TreeType.YEW, 38755, 38759);
			this.registerTree(TreeType.YEW, 92442, 92443);
			
			this.registerTree(TreeType.MAGIC, 63176, 63179);
			this.registerTree(TreeType.MAGIC, 92440, 92441);
		},
		registerTree : function (type, treeId, stumpId) {
			if (stumpId === undefined || stumpId === -1) {
				stumpId = type.stumpID;
			}
			this.treeRegistry[treeId] = {"type":type, "stump":stumpId, "tree":treeId};
		},
		getByLocType : function (locTypeId) {
			return this.treeRegistry[locTypeId];
		},
		getLevelToChop : function (itemId) {
			switch (itemId) {
			case 1511://Normal
				return 1;
			case 1513://Magic
				return 75;
			case 1515://Yew
				return 60;
			case 1517://Maple
				return 45;
			case 1519://Willow
				return 30;
			case 1521://Oak
				return 15;
			default:
				return 1;
			}
		},
		chopTree : function (player, location, tree, fellTree) {
			var hatchet = this.forHatchet(player);
			if (hatchet == null) {
				api.sendMessage(player, "You need a hatchet to chop this tree.");
				return;
			}
			if (api.getStatLevel(player, Stat.WOODCUTTING) < tree.type.level) {
				api.sendMessage(player, "You require a woodcutting level of "+tree.type.level+"  to cut this tree.");
				return;
			}
			if (api.freeSpaceTotal(player, Inv.BACKPACK) < 1) {
				api.sendMessage(player, "Your inventory is too full to hold any more logs.");
				return;
			}
			api.runAnimation(player, hatchet.anim);
			api.sendMessage(player, "You swing your hatchet at the tree.");
			var delay = this.getDelay(player, tree.type, hatchet);//Calculates the time taken to mine this rock
			var baseDelay = this.getDelay(player, tree.type, hatchet);//Calculates the time taken to mine this rock
			var Action = Java.extend(Java.type('org.virtue.game.entity.player.event.PlayerActionHandler'), {	
				process : function (player) {
					if (location.getId() != tree.tree) {
						return false;//This means the tree has already been felled
					}
					api.runAnimation(player, hatchet.anim);
					api.sendMessage(player, "Timer delay" + delay);
					if (delay <= 0) {
						api.addExperience(player, Stat.WOODCUTTING, tree.type.xp, true);
						api.addCarriedItem(player, tree.type.logId, 1);
						api.sendMessage(player, "You get some " + api.getItemName(tree.type.logId)+ ".", MesType.GAME_SPAM);
						if (tree.type == TreeType.NORMAL  || tree.type == TreeType.SWAMP || tree.type == TreeType.EVERGREEN || tree.type == TreeType.DEAD || Math.random() < 0.2) {//If the tree is not a normal tree, there is a 1 in 5 chance of felling it
							fellTree();	
							return true;
						} else if (api.freeSpaceTotal(player, Inv.BACKPACK) < 1) {
							api.sendMessage(player, "Not enough space in your inventory.");
							return true;
						} else {
							delay = baseDelay;
							return false;
						}	
					}
					delay--;
					return false;
				},
				stop : function (player) {
					api.stopAnimation(player);
					delay = baseDelay;
				}
			});
			player.setAction(new Action());
		},
		fellTree : function (location, stumpId, respawnDelay) {
			api.transformLoc(location, stumpId, respawnDelay);
			var x = api.getCoordX(location);
			var y = api.getCoordY(location);
			var level = api.getCoordLevel(location);
			var treeTop = api.getLocationByNodeType(x-1, y-1, level+1, location.getNodeType());
			if (treeTop != null) {
				api.transformLoc(treeTop, -1, respawnDelay);
			} else {
				treeTop = api.getLocationByNodeType(x, y, level+1, location.getNodeType());
				if (treeTop != null) {
					api.transformLoc(treeTop, -1, respawnDelay);
				}
			}
		},
		getDelay : function (player, tree, hatchet) {
			var timer = tree.baseTime - api.getStatLevel(player, Stat.WOODCUTTING) - Math.floor(Math.random() * hatchet.time);
			if (timer < 1 + tree.randomTime) {
				timer = 1 + Math.floor((Math.random() * tree.randomTime));
			}
			return timer;
		},
		typeForTreeName : function (name) {
			switch (name) {
			case "Tree":
				return TreeType.NORMAL;
			case "Evergreen":
				return TreeType.EVERGREEN;
			case "Dead tree":
				return TreeType.DEAD;
			case "Swamp tree":
				return TreeType.SWAMP;
			case "Oak":
				return TreeType.OAK;
			case "Willow":
				return TreeType.WILLOW;
			case "Maple":
				return TreeType.MAPLE;
			case "Yew":
				return TreeType.YEW;
			case "Ivy":
				return TreeType.IVY;
			case "Magic":
				return TreeType.MAGIC;
			case "Cursed Magic":
				return TreeType.CURSED_MAGIC;
			case "Elder Tree":
				return TreeType.ELDER_TREE;
			case "Crystal Tree":
				return TreeType.CRYSTAL_TREE;
			}
		},
		hatchetsById : null,
		forHatchet : function(player) {
			if (this.hatchetsById == null) {
				this.hatchetsById = {};
				for (var ordial in Hatchet) {
					this.hatchetsById[Hatchet[ordial].itemID] = Hatchet[ordial];
				}
			}
			var bestHatchet = null;
			var item = api.getItem(player, Inv.EQUIPMENT, WearPos.WEAPON);
			var hatchet;
			if (item != null ) {
				hatchet = this.hatchetsById[item.getId()];
				if (hatchet !== undefined) {
					return hatchet;
				}
			}
            if (Toolbelt.hasTool(player, 1351)) {
            	bestHatchet = this.hatchetsById[api.getEnumValue(7503, api.getVarBit(player, 18522))];
            }
			for (var slot=0;slot<28;slot++) {
				item = api.getItem(player, Inv.BACKPACK, slot);
				if (item == null) {
					continue;
				}
				hatchet = this.hatchetsById[item.getId()];
				if (hatchet !== undefined) {
					if (bestHatchet === null || hatchet.time > bestHatchet.time) {
						bestHatchet = hatchet;
					}
				}
			}
			return bestHatchet;
		} 
}