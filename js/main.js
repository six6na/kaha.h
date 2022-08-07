// main.js

$(function(){

    $('.tab .news-btn').click(function(){
        // 텝 초기화
        $('.tab_contents').removeClass('on');
        // 표시
        $('#news').addClass('on');
        $('#noti').removeClass('on');
        // 버튼
        $('.tab .container-n .tab-btn li:first-child').addClass('on');
        $('.tab .container-n .tab-btn li:last-child').removeClass('on');
    });
  
    $('.tab .noti-btn').click(function(){
        // 텝 초기화
        $('.tab_contents').removeClass('on');
        // 표시
        $('#noti').addClass('on');
        // 버튼
        $('.tab .container-n .tab-btn li:last-child').addClass('on');
        $('.tab .container-n .tab-btn li:first-child').removeClass('on');
    });

})
