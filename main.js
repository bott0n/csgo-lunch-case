$(function(){
    var right = 0;
    
    var count=0;

    $('#btn').on('click',function(){
     var timer = setInterval(function(){
            right+=50
            count++
            $('.slider-wrapper').css('right',right+'px')
            if(count==300){
                clearInterval(timer)
            }
        },20)
    })

})