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
		case 31459://Customs Sergeant
		chatnpc(player, 7830, "NEUTRAL", "Zzzzzzzzzzzzzzzzzzz.", function () { //just need the right chat head
		    });	
	    return true;
		case 71969://locker
		chatnpc(player, 7831, "NEUTRAL", "Hey! Nobody stores anything in there unless thay are<br> under arrest.", function () { //just need the right chat head
		    });	
	    return true;
		case 71970://notices outside Customs Sergeant
		mesbox(player,"There are no new notices here.", function () {
		    });	
	    return true;
		case 72434://Sleeping man
		chatnpc(player, 15476, "NEUTRAL", "...ears to pour their course...", function () { //just need the right chat head
		    });	
	    return true;
		case 72442://Waylan
		chatnpc(player, 15471, "NEUTRAL", "...wending through the willows...", function () { //just need the right chat head
		    });	
	    return true;
        default:
		return false;
		}		
	}
});

/* Listen to the location ids specified */
var listen = function(scriptManager) {
	var locs = [31459,71970,71969,72434,72442];
	var listener = new LocationListener();
	for (var i in locs) {
		scriptManager.registerListener(EventType.OPLOC1, locs[i], listener);
	}
};