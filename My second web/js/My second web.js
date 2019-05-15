$(function(){
    //Footer Start//
    $('.ul li').mouseover(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    //Footer Over//
    //Side bar Start//
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
    //Side bar Over//
    //Return Start//
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
    //Return Over//
})
