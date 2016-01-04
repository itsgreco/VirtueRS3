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
package org.virtue.engine.script.listeners;

import org.virtue.game.entity.npc.NPC;
import org.virtue.game.entity.player.Player;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 15/11/2014
 */
public interface NpcListener {

	/**
	 * Gets the npc ids which are bound to this listener
	 * @return an array of integers containing the ids to bind to
	 */
	public int[] getIDs();
 	
	/**
	 * Called whenever a player clicks an option on one of the bound npcs
	 * @param player The player who clicked the npc
	 * @param npc The {@link NPC} which was clicked
	 * @param optionID The id of the option which was clicked. Ranges from 1 to 5, with 6 being reserved for "Examine".
	 * @return True if the interaction was handled, false otherwise
	 */
 	public boolean handleInteraction(Player player, NPC npc, int optionID);
 	
 	/**
 	 * Gets the minimum number of tiles a player must be within to interact with the npc.
 	 * If the player is not within the minimum range, they will attempt to move towards the npc before the interaction is handled
 	 * @param npc The {@link NPC} to check
 	 * @param optionID The id of the option clicked
 	 * @return The number of tiles the player must be within to interact
 	 */
 	public int getInteractRange (NPC npc, int optionID);
}