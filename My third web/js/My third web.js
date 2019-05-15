var i =0;
var time;
$(document).ready(function(){
    //Slideshow start
    $('.ig').eq(0).show().siblings().hide();
    timer();
    $('.left_button').click(function(){
        clearInterval(time);
        if(i==0){
            i=5
        }
        i--;
        show();
        timer();
    })
    $('.right_button').click(function(){
        clearInterval(time);
        if(i==4){
            i=-1;
        }
        i++
        show();
        timer();
    })
    //Slideshow over
})
//Slideshow start
function timer(){
        time = setInterval(function(){
        show();
        i++;
        if(i==5){
            i=0;
        }
    },3000)
}
function show(){
    $('.ig').eq(i).fadeIn(300).siblings().fadeOut(300);  
}
//Slideshow over
