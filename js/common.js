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
    $('.close').on('click',function(){
        $('.ir_popup').removeClass('active')
    })

    var fadeNum = 0;
    $('.sr_bg').not(':first').hide(); 
    setInterval(function(){ 
        $('.sr_bg').eq(fadeNum).fadeOut(1000); 
        fadeNum++;
        if(fadeNum == 5){fadeNum=0}
        $('.sr_bg').eq(fadeNum).fadeIn(1000);
    },4000);//end of slide

    var fadeNumm =0;
    $('.sv_bg').not(':first').hide(); 
    setInterval(function(){ 
        $('.sv_bg').eq(fadeNumm).fadeOut(1000); 
        fadeNumm++;
        if(fadeNumm == 5){fadeNumm=0}
        $('.sv_bg').eq(fadeNumm).fadeIn(1000);
    },4000);//end of slide



    $('#au1room_thumb li a').on('click',function(){
        var th = $(this).children().attr('src');
        $('#au1room_img img').attr('src',th);
    })
    $('#au1room_thumb li').on('click',function(){
        var order = $(this).index();
        $('#au1roomNum').text('20'+(order+2)+' 호')
    })
    $('#au2room_thumb li a').on('click',function(){
        var th = $(this).children().attr('src');
        $('#au2room_img img').attr('src',th);
    })
    $('#au2room_thumb li').on('click',function(){
        var order = $(this).index();
        $('#au2roomNum').text('20'+(order+2)+' 호')
    })//end of attr img

    

    $(window).on('scroll',function(e){

        var i = $(window).scrollTop();
        
        if(i > 500){
            $('#au2room_img').addClass('active');
        }
        if(i>500){
            $('#au2room_box').addClass('active');
        }
        if(i>500){
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
        $('.c1_img').on('click',function(l){
            console.log(l)
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
    //end of main review popup



    $('.cta2').on('click',function(){
        $('.sv_popup').addClass('active');
    })
    $('.close').on('click',function(){
        $('.sv_popup').removeClass('active');
    })//end of



    var num = 0;
    $('button').on('click',function(){
        ($(this).index()==1) ? num++ : num--;
        
        if(num>2){
            num=2;
        }
        if(num<-2){
            num=-2;
        }
        $('.wrap div').css({
            transform:'translateX('+ -num + '00%)'    
        })

    })//end of main slide

    $('.aupcl_bot span').on('click',function(){
        var th = $(this).children().attr('src');
        $('.aupcl_top img').attr('src',th);
    })//end of au1 popup img select

    $('#au1room_img').on('click',function(e){
        var au1img = $(this).find('img').attr('src');
        console.log(au1img)
        if(au1img == './imgs/aboutus1_room_1.jpg'){
            $('.au_popup_1').addClass('active')
        }
        if(au1img == './imgs/aboutus1_room_2.jpg'){
            $('.au_popup_2').addClass('active')
        }
        if(au1img == './imgs/aboutus1_room_3.jpg'){
            $('.au_popup_3').addClass('active')
        }
        if(au1img == './imgs/aboutus1_room_4.jpg'){
            $('.au_popup_4').addClass('active')
        }
        if(au1img == './imgs/aboutus1_room_5.jpg'){
            $('.au_popup_5').addClass('active')
        }

        $('.close').on('click',function(){
            $('.au_popup_1').removeClass('active');
        })   
        $('.close').on('click',function(){
            $('.au_popup_2').removeClass('active');
        })  
        $('.close').on('click',function(){
            $('.au_popup_3').removeClass('active');
        })
        $('.close').on('click',function(){
            $('.au_popup_4').removeClass('active');
        })
        $('.close').on('click',function(){
            $('.au_popup_5').removeClass('active');
        })
    })

    $('#au2room_img').on('click',function(e){
        var au1img = $(this).find('img').attr('src');
        console.log(au1img)
        if(au1img == './imgs/aboutus1_room_1.jpg'){
            $('.au_popup_1').addClass('active')
        }
        if(au1img == './imgs/aboutus1_room_2.jpg'){
            $('.au_popup_2').addClass('active')
        }
        if(au1img == './imgs/aboutus1_room_3.jpg'){
            $('.au_popup_3').addClass('active')
        }
        if(au1img == './imgs/aboutus1_room_4.jpg'){
            $('.au_popup_4').addClass('active')
        }
        if(au1img == './imgs/aboutus1_room_5.jpg'){
            $('.au_popup_5').addClass('active')
        }

        $('.close').on('click',function(){
            $('.au_popup_1').removeClass('active');
        })   
        $('.close').on('click',function(){
            $('.au_popup_2').removeClass('active');
        })  
        $('.close').on('click',function(){
            $('.au_popup_3').removeClass('active');
        })
        $('.close').on('click',function(){
            $('.au_popup_4').removeClass('active');
        })
        $('.close').on('click',function(){
            $('.au_popup_5').removeClass('active');
        })

    })//end of 객실안내 popup


    
    
    $('button.b_btn').each(function(){

        var adult = $('select.adult');
        var child = $('select.children');
        var infant = $('select.infant');
        var tDays = $('select.days');
        var res = $('span.b_result');
        
        $('button.b_btn').on('click',function(e){
        
            var aTotal = parseInt(adult.val());
            var cTotal = parseInt(child.val());
            var iTotal = parseInt(infant.val());
            var dTotal = parseInt(tDays.val());
            var totalR = (aTotal + cTotal + iTotal)*dTotal ;
            
            res.text(totalR+' 원')
            console.log(totalR)
            $('.enter').on('click',function(){
            if(totalR > 0){
            alert('예약되었습니다')
            }
            })
    })
        
    })





});