/* jshint devel:true */

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
function sync() {
    videos.b.currentTime = videos.a.currentTime;
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

$('#sync').on('click', sync);
