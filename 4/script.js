$(document).ready(function(){
    
    $('#popup').on('click', function(){
        $('.wrap').css('display', 'block');
    });
    
    $('.btn').on('click', function(){
        $('.wrap').css('display', 'none');
        var opt = $(this).val();
        $('#out').text("Вы выбрали опцию " + opt);
    });
});