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
package org.virtue.model.entity;

import java.util.Iterator;
import java.util.Set;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @since Aug 8, 2014
 */
public class EntityListIterator<E extends Entity> implements Iterator<E> {
	
	private Integer[] indicies;
	
	private Object[] entities;
	
	@SuppressWarnings("rawtypes")
	private EntityList entityList;
	
	private int curIndex = 0;

	public EntityListIterator(Object[] entities, Set<Integer> indicies, @SuppressWarnings("rawtypes") EntityList entityList) {
		this.entities = entities;
		this.indicies = indicies.toArray(new Integer[indicies.size()]);
		this.entityList = entityList;
	}

	public boolean hasNext() {
		return indicies.length != curIndex;
	}

	@SuppressWarnings("unchecked")
	public E next() {
		Object temp = entities[indicies[curIndex]];
		curIndex++;
		return (E) temp;
	}

	public void remove() {
		if (curIndex >= 1) {
			entityList.remove(indicies[curIndex - 1]);
		}
	}
}
