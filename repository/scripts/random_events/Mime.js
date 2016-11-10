var OpenListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		
	}
});

var ButtonListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, binding, args) {
		var player = args.player;
		switch(args.component) {
		case 2://Think
		return;	
		case 3://Cry
		return;
		case 4://Laugh
		return;
		case 5://Dance
		return;
		case 6://Climb rope
		return;
		case 7://Lean on air
		return;
		case 8://Glass box
		return;
		case 9://Glass wall
		return;
		default:
			api.sendMessage(player, "Unhandled Mime overlay button: comp="+args.component+", button="+args.button);
			return;
		}
		return;
	}
});

/* Listen to the interface ids specified */
var listen = function(scriptManager) {
	var listener = new OpenListener();
	scriptManager.registerListener(EventType.IF_OPEN, 188, listener);
	
	listener = new ButtonListener();
	scriptManager.registerListener(EventType.IF_BUTTON, 188, listener);
};