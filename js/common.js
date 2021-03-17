$(function(){
    $('header').load('inc.html header .head');
    $('.foot').load('inc.html .foot div');

    $.ajax({
        url:'data.json',
        success:function(dataC1){

            var type,imgSrc = '';

            function dropImg(e){
                tagList = '';
                dataC1.photoGallery.forEach(function(v,k){
                    if(v.type == e){

                        type = dataC1.photoGallery[k].type;
                        imgSrc = dataC1.photoGallery[k].imgSrc;

                        tagList += "<li data type = "+ type + ">";
                        tagList += "<a>";
                        tagList += "<img class='c1_img' src="+imgSrc+">";
                        tagList += "</a></li>";
                    }
                })
                $('.cmgallery .s1container div figure ul').html(tagList);
            }
            dropImg('pGallery');

            //end of photoGallery

            var title,author,date,viewCount = '';

            function dropImg2(e){
                tagList = '';
                dataC1.daonAfter.forEach(function(v,k){
                    if(v.type == e){

                        type = dataC1.daonAfter[k].type;
                        imgSrc = dataC1.daonAfter[k].imgSrc;
                        title = dataC1.daonAfter[k].title;
                        author = dataC1.daonAfter[k].author;
                        date = dataC1.daonAfter[k].date;
                        viewCount = dataC1.daonAfter[k].viewCount;

                        tagList += "<li id='scv_pop' data type="+type+"><a><figure>",
                        tagList += "<img src="+imgSrc+">",
                        tagList += "<span></span><figcaption>",
                        tagList += "<b>"+title+"</b>",
                        tagList += "<p>작성자 <em>"+author+" </em>",
                        tagList += "작성일 <em>"+date+"</em>",
                        tagList += "조회 <em>"+viewCount+"</em>",
                        tagList += "</p></figcaption></figure></a></li>"
                    }
                })
                $('.cmgallery .spotcardview').html(tagList);
            }
            dropImg2('dAfter');
        }//end of success

    })//end of ajax

    $('header')

    $(window).on('scroll',function(e){

        var i = $(window).scrollTop();
        
        if(i>600){
            $('.txtbox').addClass('active');
        }
        if(i>1400){
            $('.txtbanner').addClass('active');
        }
        if(i>2300){
            $('.spotafter div h2').addClass('active');
            $('.spotafter div p').addClass('active');
        }
        if(i>2400){
            $('.spotcardview').addClass('active');
        }
    })//end of scroll

    $('.intro a').on('click',function(){
        $('.ir_popup').addClass('active')
    })
    $('.ir_popup').on('click',function(){
        $('.ir_popup').removeClass('active')
    })

    var fadeNum = 0;
    $('.sr_bg').not(':first').hide(); 
    setInterval(function(){ 
        $('.sr_bg').eq(fadeNum).fadeOut(1000); 
        fadeNum++;
        if(fadeNum == 2){fadeNum=0}
        $('.sr_bg').eq(fadeNum).fadeIn(1000);
    },4000);//end of slide

    var fadeNumm =0;
    $('.sv_bg').not(':first').hide(); 
    setInterval(function(){ 
        $('.sv_bg').eq(fadeNumm).fadeOut(1000); 
        fadeNumm++;
        if(fadeNumm == 2){fadeNumm=0}
        $('.sv_bg').eq(fadeNumm).fadeIn(1000);
    },4000);//end of slide

    $('#au1room_thumb li a').on('click',function(){
        var th = $(this).children().attr('src');
        
        
        $('#au1room_img img').attr('src',th);
    })
    $('#au1room_thumb li').on('click',function(){
        
        var order = $(this).index();
        console.log(order)
        $('#au1roomNum').text('20'+(order+2)+' 호')
        
    })
    $('#au2room_thumb li a').on('click',function(){
        var th = $(this).children().attr('src');
        
        
        $('#au2room_img img').attr('src',th);
    })
    $('#au2room_thumb li').on('click',function(){
        
        var order = $(this).index();
        console.log(order)
        $('#au2roomNum').text('20'+(order+2)+' 호')
        
    })//end of attr img

    $(window).on('scroll',function(e){

        var i = $(window).scrollTop();
        
        if(i>550){
            $('#au2room_img').addClass('active');
        }
        if(i>550){
            $('#au2room_box').addClass('active');
        }
        if(i>550){
            $('#au2room_thumb').addClass('active');
        }
    })//end of scroll

    $('span#nami').on('click',function(){

        $('.nami').addClass('active');
    })
    $('.close').on('click',function(){
        $('.nami').removeClass('active');
    })

    $('li#kal').on('click',function(){

        $('.kal').addClass('active');
    })
    $('.close').on('click',function(){
        $('.kal').removeClass('active');
    })
    //end of about3 popup

    
    function c1(){
        $('.c1_img').on('click',function(){
            var c1 = $(this).attr('src');
            $('.pg_popup').addClass('active');
            $('.pg_cont img').attr('src',c1);
        })
    }
    setTimeout(c1,100)

    $('.close').on('click',function(){
        $('.pg_popup').removeClass('active');
    })
    //end of photogallery popup

    $('#mr_cta').on('click',function(){
        $('.df_popup').addClass('active')
    })
    function c2(){
        $('li#scv_pop').on('click',function(){
            $('.df_popup').addClass('active')
        })
    }
    setTimeout(c2,100)

    function c3(){
        $('li#ir_popup').on('click',function(){
            $('.df_popup').addClass('active')
        })
    }
    setTimeout(c3,100)

    $('.close').on('click',function(){
        $('.df_popup').removeClass('active');
    })

});