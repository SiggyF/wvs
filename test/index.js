import assert from 'assert';
import wvs from '../lib';

describe('wvs', function () {
  it('should be able to use the tile-generator function', function () {
    var tiles = [];
    wvs.tileGenerator(10, [0, 30, 5, 35])
      .on('data', function (tile) {
        tiles.push(tile);
      })
      .on('end', function(){
        assert(tiles.length > 0, 'we should have tiles as a result.');
      });
  });
});
