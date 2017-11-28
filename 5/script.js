$(document).ready(function(){
    $('li').on('click', function(){
            $(this).toggleClass('red');
        })
    
    $('#add').on('click', function(){
        var tag = $('#inp').val();
        $('ul').append(`<li><${tag}>${tag}</${tag}></li>`);
        
        $('li').on('click', function(){
            $(this).toggleClass('red');
        })
    })
})