var LumbridgeSageListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, npcTypeId, args) {
		var player = args.player;
		var npc = args.npc;
		if (event == EventType.OPNPC1) {
			 chatnpc(player, npc, "NEUTRAL", "Greetings, adventurer. How may i help you?", function () {
				LumbridgeSage.maintalk(player, npc);
	       });	  
		}
	}
});

/* Listen to the npc ids specified */
var listen = function(scriptManager) {
	var listener = new LumbridgeSageListener();
	scriptManager.registerListener(EventType.OPNPC1, 2244, listener);
};

var LumbridgeSage = {
		
	maintalk : function (player, npc) {
		if (api.isAdmin(player)) {
			multi4(player, "CHOOSE AN OPTION", "Who are you?", function () {		
				LumbridgeSage.iam(player, npc);
			}, "Tell me about the town of Lumbridge.", function () {
				LumbridgeSage.townofLumbridge(player, npc);
			}, "I'm fine for now, thanks.", function () {
			}, "I would like to access the P-Mod room.", function () {
			    api.teleportEntity(player, 2845, 5158, 0);
			});
			return;
		} 

		multi3(player, "CHOOSE AN OPTION", "Who are you?", function () {		
			LumbridgeSage.iam(player, npc);
		}, "Tell me about the town of Lumbridge.", function () {
			LumbridgeSage.townofLumbridge(player, npc);
		}, "I'm fine for now, thanks.", function () {
	
		});
	},
	
	iam : function (player, npc) {
		 chatnpc(player, npc, "NEUTRAL", "I am Phileas, the Lumbridge Sage. In times past, people<br>came from all around to ask me for advice. My renown<br>seems to have diminished somewhat in recent years,<br>though. Can i help you with anything?", function () {	
			multi2(player, "CHOOSE AN OPTION", "Tell me about the town of lumbridge.", function () {
				LumbridgeSage.townofLumbridge(player, npc);	 
			}, "I'm fine for now, thanks.", function () {
			});      
		}); 
	},
	
	
	townofLumbridge : function (player, npc) {
	     chatnpc(player, npc, "NEUTRAL", "Lumbridge is one of the older towns in the human-<br>controlled kingdoms. It was founded over two hundred<br> years ago towards the end of the Fourth Age. It's called<br> Lumbridge because of this bridge built over the River Lum.", function () {
	     chatnpc(player, npc, "NEUTRAL", "The town is governed by Duke Horacio, who is a good<br> friend of our monarch, King Roald of Misthalin.", function () { 
		 chatnpc(player, npc, "NEUTRAL", "Recently, however,there have been great changes due to<br> the Battle of Lumbridge", function () {
		multi3(player, "CHOOSE AN OPTION", "Who are you?", function () {
				LumbridgeSage.iam(player, npc);
			}, "What about the battle?", function () {
				 chatnpc(player, npc, "NEUTRAL", "Indeed, not long ago there was a great fight between<br> Saradomin and Zamorak on the battlefield to the west of<br> the castle.", function () {
				 chatnpc(player, npc, "NEUTRAL", "Titanic forces were unleasheded as neither side could gain<br> the upper hand. Each side sought advantages, but it was<br> close until the end.", function () {
				 chatnpc(player, npc, "NEUTRAL", "The battle lasted for months, but in the end the forces of<be> the holy Saradomin where triumphant. Zamorak was<br> defeated... but...", function () {
				 chatnpc(player, npc, "NEUTRAL", "befor Saradomin could complete his victory, Moia the<br> general of Zamorak's transported him away.", function () {
				 chatnpc(player, npc, "NEUTRAL", "Now, the battlefield lies empty save for a single<br> Saradominist devotee.", function () {
					multi2(player, "SELECT AN OPTION", "Who are you?", function () {
				       LumbridgeSage.iam(player, npc);				 
					}, "Goodbye", function () {
						 chatnpc(player, npc, "NEUTRAL", "Good adventuring, traveller.", function () {
			        }); 
				}); 
				}); 	
				}); 	
				}); 	
				}); 	
				}); 
		    }, "Goodbye.", function () {					
		    });
		});  
	    });  
	    });
	},
		
}