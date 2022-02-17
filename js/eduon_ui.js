    $(document).ready(function(){
        /*메인 메뉴 열기*/
        $('.eduon_header .menu_toggle').click(function(){
            $('.edu_gnb').addClass('active');
            $('.dim').addClass('active');
            $('body').addClass('scroll_hidden');
        });
        /*메인 메뉴 닫기*/
        $('.edu_gnb .menu_close').click(function(){
            $('.edu_gnb').removeClass('active');
            $('.dim').removeClass('active');
            $('body').removeClass('scroll_hidden');
        });

         /*메인 메뉴 열기*/
         $('.eduon_header .info_toggle').click(function(){
            $('.member_info').addClass('active');
            $('.dim').addClass('active');
            $('body').addClass('scroll_hidden');
        });
        /*메인 메뉴 닫기*/
        $('.member_info .menu_close').click(function(){
            $('.member_info').removeClass('active');
            $('.dim').removeClass('active');
            $('body').removeClass('scroll_hidden');
        });

        /*GNB 메뉴 서브 메뉴 열닫*/
        $('.main_nav > li').click(function(){
            $(this).toggleClass('active').siblings().removeClass('active');
        });



        /*풋터 패밀리 사이트 열닫*/
        $('.footer_family > a').click(function(e){
            e.preventDefault();
            $('.footer_family ').toggleClass('active');
        });

    });