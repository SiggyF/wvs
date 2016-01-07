/* jshint devel:true */
'use strict';
$('#play').on('click', function(){
    _.each($('video'), function(element){
        element.play();
    });
});

$('#pause').on('click', function(){
    _.each($('video'), function(element){
        element.pause();
    });
});


var videos = {
    a: document.getElementById('a'),
    b: document.getElementById('b')
};
function sync(maxDrift) {
    // if
    if (Math.abs(videos.b.currentTime - videos.a.currentTime) > maxDrift) {
        videos.b.currentTime = videos.a.currentTime;
    }
}


_.each($('video'), function(element){
    $(element).on('loadedmetadata', function(evt) {
        var video = evt.target;
        var pb = $('#' + evt.target.id + '-progress');
        pb.attr('max', evt.target.duration);
        pb.attr('value', evt.target.currentTime);
    });
    $(element).on('progress', function(evt){
    });
    $(element).on('timeupdate', function(evt){
        var pb = $('#' + evt.target.id + '-progress');
        pb.attr('value', evt.target.currentTime);
    });
});

// allow for a little room, so we are not moving back and forth
// setting it lower than 0.05 seems to result in issues in both FF and GC
var maxDrift = 0.05;
function keepInSync(){
    // request a new frame
    requestAnimationFrame(keepInSync);
    // synchronize the videos
    sync(maxDrift);
}
// keep doing this....
keepInSync();

//
$('#sync').on('click', function(){sync(0.0);});
