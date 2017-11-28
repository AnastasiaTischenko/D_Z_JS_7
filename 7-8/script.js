$(document).ready(function(){
    var str = "<span style='color : red'>* is absent *</span>"
    $('img')
        .mouseenter(function() {
            $('.infoblock').css('display', 'block')
            var src = $(this).attr("src");
            var alt = $(this).attr("alt");
            if (src == undefined || src == "") {
                src = str;
            }
            if (alt == undefined || alt == "") {
                alt = str;
                $(this).css('box-shadow', "0 0 10px red");
            }
            $("#out").html("<b>URL :</b> " + src + "<br>"
                         + "<b>ALT :</b> " + alt);
        })
        .mouseleave(function() {
            $('.infoblock').css('display', 'none')
                $(this).css('box-shadow', "none");
        });
    $('a')  
        .mouseenter(function() {
            $('.infoblock').css('display', 'block')
            var href = $(this).attr("href")
            var title = $(this).attr("title")
            var target = $(this).attr("target") 
            if (href == undefined || href == "") {
                href = str;
            }
            if (title == undefined || title == "") {
                title = str;
            }
            if (target == undefined || target == "") {
                target = str;
            }
            $("#out").html("<b>URL :</b> " + href + "<br>"
                         + "<b>TITLE :</b> " + title + "<br>"
                         + "<b>TARGET :</b> " + target);
        })
        .mouseleave(function() {
            $('.infoblock').css('display', 'none')
        });
        
        
    })