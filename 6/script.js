$(document).ready(function(){
    $('.wrap').on('mousemove', function(e){
        var x = e.offsetX;
        var y = e.offsetY;
        if (y >= 1 && y <= 306 && x >= 290 && x <= 303){
            $('#text').css("transform", "translateX(303px)");
        }
    })
    $('.wrap').on('mouseleave', function(){
        $('#text').css("transform", "none");
    })
})