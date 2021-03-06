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
package org.virtue.game.world.region.movement.routefinder;

import java.util.HashMap;
import java.util.Map;

import org.virtue.game.world.region.Region;
import org.virtue.game.world.region.Tile;
import org.virtue.network.protocol.update.ref.Viewport;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 8/11/2014
 */
public class PlayerTraversalMap implements TraversalMap {
	
	private Viewport viewport;
	
	private Map<Integer, Region> regions = new HashMap<Integer, Region>();
	
	public PlayerTraversalMap (Viewport viewport) {
		this.viewport = viewport;
	}
	
	/**
	 * Repacks the regions in the map, based on the player's viewport. 
	 * This method should only be called in the viewport when the region list is altered
	 */
	public void reload () {
		regions.clear();
		for (Region region : viewport.getRegions()) {
			if (region != null) {
				regions.put(region.getID(), region);
			}
		}
	}

	/* (non-Javadoc)
	 * @see org.virtue.game.entity.region.movement.routefinder.TraversalMap#isTraversableSouth(int, int, int, int)
	 */
	@Override
	public boolean isTraversableSouth(int plane, int x, int y, int size) {
		Tile tile = new Tile(x, y, plane);
		Region region = regions.get(tile.getRegionID());
		if (region == null || !region.isLoaded()) {
			return false;
		}
		return region.getClipMap().isTraversableSouth(plane, tile.getXInRegion(), tile.getYInRegion(), size);
	}

	/* (non-Javadoc)
	 * @see org.virtue.game.entity.region.movement.routefinder.TraversalMap#isTraversableWest(int, int, int, int)
	 */
	@Override
	public boolean isTraversableWest(int plane, int x, int y, int size) {
		Tile tile = new Tile(x, y, plane);
		Region region = regions.get(tile.getRegionID());
		if (region == null || !region.isLoaded()) {
			return false;
		}
		return region.getClipMap().isTraversableWest(plane, tile.getXInRegion(), tile.getYInRegion(), size);
	}

	/* (non-Javadoc)
	 * @see org.virtue.game.entity.region.movement.routefinder.TraversalMap#isTraversableNorth(int, int, int, int)
	 */
	@Override
	public boolean isTraversableNorth(int plane, int x, int y, int size) {
		Tile tile = new Tile(x, y, plane);
		Region region = regions.get(tile.getRegionID());
		if (region == null || !region.isLoaded()) {
			return false;
		}
		return region.getClipMap().isTraversableNorth(plane, tile.getXInRegion(), tile.getYInRegion(), size);
	}

	/* (non-Javadoc)
	 * @see org.virtue.game.entity.region.movement.routefinder.TraversalMap#isTraversableEast(int, int, int, int)
	 */
	@Override
	public boolean isTraversableEast(int plane, int x, int y, int size) {
		Tile tile = new Tile(x, y, plane);
		Region region = regions.get(tile.getRegionID());
		if (region == null || !region.isLoaded()) {
			return false;
		}
		return region.getClipMap().isTraversableEast(plane, tile.getXInRegion(), tile.getYInRegion(), size);
	}

	/* (non-Javadoc)
	 * @see org.virtue.game.entity.region.movement.routefinder.TraversalMap#isTraversableSouthWest(int, int, int, int)
	 */
	@Override
	public boolean isTraversableSouthWest(int plane, int x, int y, int size) {
		Tile tile = new Tile(x, y, plane);
		Region region = regions.get(tile.getRegionID());
		if (region == null || !region.isLoaded()) {
			return false;
		}
		return region.getClipMap().isTraversableSouthWest(plane, tile.getXInRegion(), tile.getYInRegion(), size);
	}

	/* (non-Javadoc)
	 * @see org.virtue.game.entity.region.movement.routefinder.TraversalMap#isTraversableNorthWest(int, int, int, int)
	 */
	@Override
	public boolean isTraversableNorthWest(int plane, int x, int y, int size) {
		Tile tile = new Tile(x, y, plane);
		Region region = regions.get(tile.getRegionID());
		if (region == null || !region.isLoaded()) {
			return false;
		}
		return region.getClipMap().isTraversableNorthWest(plane, tile.getXInRegion(), tile.getYInRegion(), size);
	}

	/* (non-Javadoc)
	 * @see org.virtue.game.entity.region.movement.routefinder.TraversalMap#isTraversableSouthEast(int, int, int, int)
	 */
	@Override
	public boolean isTraversableSouthEast(int plane, int x, int y, int size) {
		Tile tile = new Tile(x, y, plane);
		Region region = regions.get(tile.getRegionID());
		if (region == null || !region.isLoaded()) {
			return false;
		}
		return region.getClipMap().isTraversableSouthEast(plane, tile.getXInRegion(), tile.getYInRegion(), size);
	}

	/* (non-Javadoc)
	 * @see org.virtue.game.entity.region.movement.routefinder.TraversalMap#isTraversableNorthEast(int, int, int, int)
	 */
	@Override
	public boolean isTraversableNorthEast(int plane, int x, int y, int size) {
		Tile tile = new Tile(x, y, plane);
		Region region = regions.get(tile.getRegionID());
		if (region == null || !region.isLoaded()) {
			return false;
		}
		return region.getClipMap().isTraversableNorthEast(plane, tile.getXInRegion(), tile.getYInRegion(), size);
	}

}
