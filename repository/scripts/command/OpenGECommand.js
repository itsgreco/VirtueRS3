var CommandListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, syntax, scriptArgs) {
		var player = scriptArgs.player;
		/*****************************************WARNING****************************************
		 * DO NOT PUT THIS COMMAND IN PlayerCommands.js! 
		 * It will eventually be restricted to admin-only, and separating it will be more difficult if it's part of the player command script
		 */	
		
		Exchange.open(player);
		return;
	}
});

/* Listen to the commands specified */
var listen = function(scriptManager) {
	var listener = new CommandListener();
	scriptManager.registerListener(EventType.COMMAND, "openge", listener);
	scriptManager.registerListener(EventType.COMMAND, "ge", listener);
};