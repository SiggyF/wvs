import assert from 'assert';
import wvs from '../lib';
import fs from 'fs';

describe('wvs', function () {
  it('should be able to use the tile-generator function', function (done) {
    var tiles = [];
    wvs.tileGenerator(10, [0, 30, 5, 35])
      .on('data', function (tile) {
        tiles.push(tile);
      })
      .on('end', function(){
        assert(tiles.length > 0, 'we should have tiles as a result.');
        done();
      });
  });
  it('should be possible to get tile properties', function () {
    let testTile =  [3,4,6];
    let children = wvs.tilebelt.getChildren(testTile);
    assert(children, 'we should be lookup the children.');
  });
  it('should be able to create an ffmpeg command', function (done) {
    let testFile = 'examples/sync/app/movies/chicken.webm';
    wvs.ffmpeg.ffprobe(testFile, function(err, metadata) {
      assert(metadata.format.filename === testFile, 'we should have a filename');
      done();
    });

  });
});
