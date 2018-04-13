    
var gold=`<div class="swiper-slide "> <span class='gold'>學校飯</span></div>` // 1%
var red=`  <div class="swiper-slide"> <span class='red'>意樂</span></div>`    // 4%
var darkpurple=`<div class="swiper-slide "> <span class='dark-purple'>M記</span></div>` // 10%
var purple1=`<div class="swiper-slide "> <span class='purple'>表姐</span></div>`   // 18%
var purple2=`<div class="swiper-slide"> <span class='purple'>PHD</span></div>`      // 18%
var purple3 =` <div class="swiper-slide"> <span class='purple'>手撕雞</span></div>`   //18%
var blue =`<div class="swiper-slide "><span class='blue'>龍記</span></div>` //   31%




function render(){
    console.log('start')
    $('.slider-wrapper').empty()
    for(var i=0;i<60;i++){

        var num = random();
        if(num==1){
            $('.slider-wrapper').append(gold)
        }else if(num >=2 && num <=5){
            $('.slider-wrapper').append(red)
        }else if(num >=6 && num <=15){
            $('.slider-wrapper').append(darkpurple)
        }else if(num >=16 && num <=33){
            $('.slider-wrapper').append(purple1)
        }else if(num >=34 && num <=51){
            $('.slider-wrapper').append(purple2)
        }else if(num >=52 && num <=69){
            $('.slider-wrapper').append(purple3)
        }else if(num >=70 && num <=100){
            $('.slider-wrapper').append(blue)
        }

    }
    console.log('finish render')
}

function random(){
    return parseInt((Math.random()*100)+1)

}

