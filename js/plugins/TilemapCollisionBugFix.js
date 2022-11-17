/** /*:
 * @target MZ
 * 
 * @author dominuslex
 * @plugindesc When placing a passable tile on top of a non-passable tile, the RMMZ allows movement onto the tile, when instead it should prevent movement on to the tile.
 * 
 */

;
(() => {

    Game_Map.prototype.checkPassage = function(x, y, bit) {
        const flags = this.tilesetFlags();
        const tiles = this.allTiles(x, y);
        var tempCheckPassableFlags = 0;

        for (const tile of tiles) {
            const flag = flags[tile];

            if ((flag & bit) === bit) {
                // [x] Impassable
                tempCheckPassableFlags++;
                if (this.isLadder(x,y) && (bit == 1 || bit == 8)){
                   return true; 
                }
            }
        }
        
        if (tempCheckPassableFlags > 0) {
            return false;
        } else {
            return true;
        }
    };

})();