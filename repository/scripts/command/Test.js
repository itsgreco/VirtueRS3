var Listener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		api.sendMessage(player, "Used item with location!");
	},
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new Listener();	
	scriptManager.registerListener(EventType.OPLOCU, 38787, listener);
};