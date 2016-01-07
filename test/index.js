import assert from 'assert';
import wvs from '../lib';
import fs from 'fs';

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
  it('should be able to create an ffmpeg command', function () {
    let testFile = 'examples/sync/app/movies/chicken.webm';
    wvs.ffmpeg.ffprobe(testFile, function(err, metadata) {
      assert(_.has(metadata, 'format.filename'), 'we should have a filename');
    });
  });
});
