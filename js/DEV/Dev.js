$(window).scroll(function(){
    if($(window).scrollTop() >= ($('.dev').offset().top-65)){
        $('.nav-fix').css({
            'background':'white',
            'color':'black',
            'box-shadow':'0 2px 2px lightgray'
        });
        $('.under').css({
            'width':'45%',
        });
        $('.nav-mid').css({
            'margin-right':'230px',
            'margin-left':'0',
            'color':'gray',
        });
        $('.nav-right').css({
            'transform':'translateX(0)',
        });
    }
    else{
        $('.nav-fix').css({
            'background':'none',
            'color':'white',
            'box-shadow':'none',
        });
        $('.under').css({
            'width':'0',
        });
        $('.nav-mid').css({
            'margin-right':'30px',
            'color':'white',
        });
        $('.nav-right').css({
            'transform':'translateX(100%)',
        });
    }
});

if($(window).width() >=400){
    function parallax(){
        scrollPos=$(this).scrollTop();
        contpos=$('.back').scrollTop();
        
        if(scrollPos >= contpos){
            $('.back').css({
                'transform':'translateY('+((scrollPos-contpos)/2)+'px)'
            });
        }    
    }
    $(window).scroll(function(){parallax();});
}


/*<----------------->Fader<----------------->*/
function fade(){
    $('.intro').css({
        'opacity':(1-fader)
    });
    fader+=0.01;
}

/*<----------------->logic<----------------->*/
var position = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
        $(window).scroll(function(){fade();});
        console.log("scrolling downwards");
    } else {
        $(window).scroll(function(){unfade();});
        console.log("scrolling upwards");
    }
  position = scroll;
    
});