$(document).ready(function(){
    var h = {};
    for (var i = 0; i < 6; i++) {
        h[`h${i + 1}`] = $(`h${i + 1}`).length;
    }
    var str = outPut(h);
    $('#out1').html(str);
    
    var m = {};
    for (var i = 0; i < 3; i++) {
        if ($('meta[name=description]')){
            m['meta description'] = $('meta[name=description]').attr("content").length;
        }
        if ($('meta[name=keywords]')){
            m['meta keywords'] = $('meta[name=keywords]').attr("content").length;
        }
        if ($('meta[name=title]')){
            m['meta title'] = $('meta[name=title]').attr("content").length;
        }
    }
    
    var strM = outPut(m);
    $('#out2').html(strM);
    
    function outPut(arr){
        var str = "";
        for (let key in arr) {
            if (arr[key] == 0){
                str += "[" + key + "]" + "=" + " no one" + "<br>";
            }
            else {
                str += "[" + key + "]" + "=" + arr[key] + "<br>";
            }  
        }
        return str;
    }
});
