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

var LocationListener = Java.extend(Java.type('org.virtue.engine.script.listeners.EventListener'), {
	invoke : function (event, locTypeId, args) {
		var player = args.player;
		var location = args.location;
		
		if (api.isPaused(player)) {
			return false;
		}
		switch (locTypeId) {
		case 2646:
		case 67263:
		case 67264://flax
		case 67265:
        if (map_members == false){
		mesbox(player, "Only members can pick flax.", function () {	
		});
		} else {
		runAnimation(player, 827, function () {
        api.addCarriedItem(player, 1779, 1);
		api.transformLoc(location, -1, 60);
		});
		}
        return true;
		case 15506:
		case 15507://wheat
		case 15508:
		runAnimation(player, 827, function () {
		api.transformLoc(location, -1, 60);
        api.addCarriedItem(player, 1947, 1);
		});
		return true;
		case 1161://cabbage
		runAnimation(player, 827, function () {
		api.transformLoc(location, -1, 60);
        api.addCarriedItem(player, 1965, 1);
		});
		return true;
			default:
			return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [2646,67263,67264,67265,15506,15507,15508,1161];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC2, locs[i], listener);
	}
};