import assert from 'assert';
import wvs from '../lib';

describe('wvs', () => {
  it('should be able to use the tile-generator function', done => {
    const tiles = [];
    wvs.tileGenerator(10, [0, 30, 5, 35])
      .on('data', tile => {
        tiles.push(tile);
      })
      .on('end', () => {
        assert(tiles.length > 0, 'we should have tiles as a result.');
        done();
      });
  });
  it('should be possible to get tile properties', () => {
    const testTile = [3, 4, 6];
    const children = wvs.tilebelt.getChildren(testTile);
    assert(children, 'we should be lookup the children.');
  });
  it('should be able to create an ffmpeg command', done => {
    const testFile = 'examples/sync/app/movies/chicken.webm';
    wvs.ffmpeg.ffprobe(testFile, (err, metadata) => {
      if (err) {
        console.log('error in ffprobe', err);
      }
      assert(metadata.format.filename === testFile, 'we should have a filename');
      done();
    });
  });
});
