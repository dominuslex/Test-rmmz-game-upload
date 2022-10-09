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
            if (this.isLadder(x, y)){
                return true;
            }
            if ((flag & 0x10) !== 0) {
                // [*] No effect on passage
                continue;
            }
            if ((flag & bit) === 0) {
                // [o] Passable
                continue;
            }
            if ((flag & bit) === bit) {
                // [x] Impassable
                tempCheckPassableFlags++;
            }
        }
        if (tempCheckPassableFlags > 0) {
            return false;
        } else {
            return true;
        }
    };





})();