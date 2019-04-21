var i =0;
var time;
$(document).ready(function(){
    //轮播图开始
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
    //轮播图结束
})
//轮播图开始
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
//轮播图结束
//下拉菜单开始

//下拉菜单结束