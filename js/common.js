$(function(){
    $('header').load('inc.html header .head',init);
    $('.foot').load('inc.html .foot div');

    

        function init(){
            //헤시정보를 이용한 페이지 처리
            var url = location.hash;
            var pageNum = 0;

/*             switch(url){
                case '#0' : pageNum=0; break;
                case '#1' : pageNum=0; break;
                case '#2' : pageNum=0; break;
            }
 */        
/*             $('.pcnav div a').on('click',function(){
                localStorage.pageNum = $(this).index();
            });

            $('.pcnav div a').eq(localStorage.pageNum).css({color:'#f00'}); */
    }
});