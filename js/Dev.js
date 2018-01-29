$(window).scroll(function(){
    if($(window).scrollTop() >= ($('.dev').offset().top-75)){
        $('.nav-fix').css({
            'background':'rgba(255, 255, 255, 1)',
            'color':'gray',
            'box-shadow':'0 2px 1px gray'
        });
        $('.nav-brand').css({
            'color':'black',
        });
        $('.under-hide').css({
            'width':'65px',
        });
        $('.nav a,.menu').css({
            'color':'gray',
        });
    }
    else{
        $('.nav-fix').css({
            'background':'rgba(255, 255, 255, 0)',
            'color':'white',
            'box-shadow':'none',
        });
        $('.nav-brand').css({
            'color':'white'
        });
        $('.under-hide').css({
            'width':'0',
        });
        $('.nav a,.menu').css({
            'color':'white',
        });
    }
});
/*<----------------->Menu<----------------->*/

$('.fa-bars').on("click",function(){
    $('.nav-wrap').css({
        'transform':'translateX(0)'
    });
});
$('.nav-wrap').on("click",function(){
    $('.nav-wrap').css({
        'transform':'translateX(100%)'
    });
});
/*<----------------->Nav<----------------->*/


/*<----------------->Parallax<----------------->*/
if($(window).width() >= 450){
    function parallax(){
        scrollPos=$(this).scrollTop();
        contpos=$('.back').scrollTop();
        
        if(scrollPos >= contpos){
            $('.back').css({
                'transform':'translateY('+((scrollPos-contpos)/2)+'px)'
            });
            $('.intro').css({
                'opacity':1-((scrollPos-contpos)/360)
            });
        }    
    }
    $(window).scroll(function(){parallax();});

}


$(document).ready(function(){
    $('a').on('click',function(event){
        if(this.hash!==""){
            event.preventDefault();
            var hash = this.hash;
            
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            },500,function(){
                window.location.hash=hash;
            });
        }
    });
});
