$(document).ready(function(){

   
    $('.eduon_header').hover(function(){
        $('.eduon_header').addClass('header_over');
        $('.eduon_wrap').addClass('gnbmask');// 마우스 오버시 마스크 켜기
    },function(){
        $('.eduon_header').removeClass('header_over');
        $('.eduon_wrap').removeClass('gnbmask');
    });
   

    $('.myname').click(function(){
        $(this).toggleClass('on');
    });


    $('.cont_nav_depth').click(function(){
        $(this).toggleClass('on');
    });

});