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
package org.virtue.network.event.handler.impl;

import org.virtue.Virtue;
import org.virtue.model.World;
import org.virtue.model.content.minigame.Controller;
import org.virtue.model.entity.movement.NpcTarget;
import org.virtue.model.entity.npc.NPC;
import org.virtue.model.entity.player.Player;
import org.virtue.network.event.context.impl.in.NpcClickEventContext;
import org.virtue.network.event.handler.GameEventHandler;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 15/11/2014
 */
public class NpcClickEventHandler implements GameEventHandler<NpcClickEventContext> {
	
	/* (non-Javadoc)
	 * @see org.virtue.network.event.handler.GameEventHandler#handle(org.virtue.model.entity.player.Player, org.virtue.network.event.context.GameEventContext)
	 */
	@Override
	public void handle(final Player player, final NpcClickEventContext context) {
		final NPC npc = World.getInstance().getNPCs().get(context.getEntityIndex());
		if (npc != null) {
			if (npc.isDistanceOption(context.getButton())) {
				if (player.getMinigame() != null) {
					Controller controller = Virtue.getInstance().getController().getController(player.getMinigame());
					if (controller != null)
						controller.npcClick(player.getMinigame(), player, npc, context.getButton().getID());
				} else {
					if (!npc.interact(player, context.getButton())) {
						player.getDispatcher().sendConsoleMessage("<col=ffff00>Unhandled NPC option: npc=" + npc.getID()
								+ ", button=" + context.getButton());
						player.getMovement().stop();
					}
				}
			} else {
				if (!player.getMovement().setTarget(new NpcTarget(player, context.getButton(), npc))) {
					player.getDispatcher().sendGameMessage("You can't reach that.");
				}
			}
				
		}
	}

}
