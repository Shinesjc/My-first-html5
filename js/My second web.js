$(function(){
    //导航栏底部白条开始//
    $('.ul li').mouseover(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    //导航栏底部白条结束//
    //侧栏菜单开始//
    $('.slider_btn').click(function(){
        showSlider();
        
    })
    $('.mask').click(function(){
        hideSlider();
    })
    function showSlider(){
        $('.mask').fadeIn();
        $('.slider').css('right',0);
    }
    function hideSlider(){
        $('.mask').fadeOut();
        $('.slider').css('right',-300);
    }
    //侧栏菜单结束//
    //悬浮回顶部开始//
    $(window).scroll(function(){
        if($(window).scrollTop()>3000){
            $('.btn').css('display','block');
        }else{
            $('.btn').css('display','none');
        }
    })
    $('.btn').click(function(){
        $('body,html').animate({
            scrollTop:0
            
        },1000)
    })
    //悬浮回顶部结束//
})
