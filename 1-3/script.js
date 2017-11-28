var count = 0;

$(document).ready(function(){
    
    $('#add').on('click', function(){
        $('#output').append('<p class="parentP"><input class="minos" name="info" type="text"><button class="btn-minos" onclick="remove(this)">-</button><span class="alert"></span></p>');
        count++;
        $('p > span').text('enter data');
    });
    
    $('#getAll').on('click', function(){
        var str = ""; 
        var a = $('input[name="info"]');
        console.log(a);
        console.log(a.length);
        if ($('.rad:checked').val() == "countble"){
            for (var i = 1; i < a.length; i += 2){
                var arrInp = a.eq(i).val();
                str += arrInp + ' ';
            }
        }
        else if ($('.rad:checked').val() == "uncountble"){
            for (var i = 0; i < a.length; i += 2){
                var arrInp = a.eq(i).val();
                str += arrInp + ' ';
            }
        }
        else{
            for (var i = 0; i < a.length; i++){
                var arrInp = a.eq(i).val();
                str += arrInp + ' ';
            }
        }
        $('#out').text(str);
        
    })
    
    if (count == 1){
        $('.btn-minos').attr('disabled',"disabled");
    };
    
    $('input[name="info"]').blur(function(){
        if($(this).val() != ''){
            $(this).parent("p").find(".alert").text('');
            $('#getAll').removeAttr('disabled');
        }
    }); 
    
});

function remove(btn){
    count--;
    console.log(count)
    btn.parentElement.remove();
    if (count == 1){
        $('.btn-minos').eq(0).attr('disabled',"disabled");
    }
};





    