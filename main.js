$(function(){

    

    $('#btn').on('click',function(){
        render()
        var right = 0;
    
    var count=0;
    var speed=50;
        $('.overlay').css('display','none');
        $('#btn').css('display','none');
     var timer = setInterval(function(){
         
            right+=speed
            count++

            $('.slider-wrapper').css('right',right+'px')
            if(count>=150 ){
                speed=30
            }
            if(count>=200){
                speed=20
            }
            if(count>=250){
                speed=10
            }
            if(count>=300){
                speed=5
            }
            if(count>=320){
                speed=4
            }
            if(count>=340){
                speed=3
            }
            if(count>=360){
                speed=2
            }
            if(count>=380){
                speed=1
            }
            if(count>=450){
                clearInterval(timer)
            
                $('#btn').css('display','block');
            }
        },20)
    })

})