/**
 * Copyright (c) 2014 Virtue Studios
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
 * @author Kayla
 * @author Sundays211
 * @since 3/5/2016
 */
 
var Dismantle = {//This just here to test the animations at the moment.
	testInvent : {
		itemID : 2428,
		xp : 200
	}
};
 
var InventionListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, objTypeId, args) {
		api.runAnimation(args.player, 27997);
		api.setSpotAnim(args.player, 1, 6003);
	}
});
 
 /* Listen to the item ids specified */
var listen = function(scriptManager) {
	var ids = [];
	for (var i in Dismantle) {
		ids.push(Dismantle[i].itemID);
	}
	var listener = new InventionListener();
	for (var i in ids) {
		scriptManager.registerListener(EventType.OPHELD1, ids[i], listener);
	}	
}
 
var Invention = {
	startInventProcess : function (player, objTypeId, slot) { 
		if (api.isPaused(player)) {
			return false;
		}
		api.runAnimation(player, 27997);
		api.setSpotAnim(player, 1, 6003);
	}
}