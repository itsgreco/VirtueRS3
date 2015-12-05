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
package org.virtue.network.protocol.message.event;

import org.virtue.network.event.buffer.InboundBuffer;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @since Sep 5, 2014
 */
public class GameEventMessage {

	/**
	 * The id of the game event
	 */
	private int opcode;
	
	/**
	 * The payload of the game event
	 */
	private InboundBuffer payload;
	
	/**
	 * Creates a new GameEventMessage
	 * @param opcode - the event opcode
	 * @param payload - the event payload
	 */
	public GameEventMessage(int opcode, InboundBuffer payload) {
		this.opcode = opcode;
		this.payload = payload;
	}
	
	/**
	 * Returns the opcode of the event
	 */
	public int getOpcode() {
		return opcode;
	}
	
	/**
	 * Return the payload of the event
	 */
	public InboundBuffer getPayload() {
		return payload;
	}
}
