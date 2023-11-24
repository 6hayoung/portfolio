$(function(){
    console.log('스크립트 보기 >')
    let windowWidth = $(window).width();
    if(windowWidth > 767){
        $('#wrap').addClass('pc').removeClass('mo')
        $('.pc #left > ul > li').on('click',function(){
            let leftIdx = $(this).index();
            $('.pc #right > .slide-wrapper').animate({top:-800*leftIdx})
        
        })        
    }else{
        $('#wrap').addClass('mo').removeClass('pc')
        $('.mo#left > ul > li').on('click',function(){
            let leftIdxM = $(this).index();
                $('.mo #right > .slide-wrapper > div').eq(leftIdxM).fadeIn().siblings().fadeOut()
        })          
    }

    //윈도우 리사이즈 클래스 부여
    $(window).on('resize',function(){
        let resizeWidth = $(window).width();
        if(resizeWidth > 767){
            $('#wrap').addClass('pc').removeClass('mo')
            $('.pc #right > .slide-wrapper > div').show()
            $('.pc #left > ul > li').on('click',function(){
                let leftIdx = $(this).index();
                $('.pc #right > .slide-wrapper').animate({top:-800*leftIdx})
            })
            $('#left > ul > li').each(function(index,el){
                if($(el).hasClass('view')){
                    console.log(index)
                    $('.pc #right > .slide-wrapper').animate({top:-800*index})
                }
            })     
        }else{
            $('#wrap').addClass('mo').removeClass('pc')
            
            $('.mo #left > ul > li').on('click',function(){
                let leftIdxM = $(this).index();
                $('.mo #right > .slide-wrapper > div').eq(leftIdxM).fadeIn().siblings().fadeOut()
            })          
            $('#left > ul > li').each(function(index,el){
                if($(el).hasClass('view')){
                    $('#right > .slide-wrapper > div').eq(index).show().siblings().hide()
                }
            })
        }
    })

    //타이틀 변경
    $('#left > ul > li').on('click',function(){
        let leftIdx = $(this).index();
        const menuEng = ['HOME','PROFILE','ABILITY','PORTFOLIO','THANK YOU']
        $(this).addClass('view').siblings().removeClass('view')
        $('.header > .pagination').text(menuEng[leftIdx])
    })

    $('.pf-cont-tit > p').on('mouseover',function(){
        $(this).addClass('view')
    })
    $('.pf-cont-tit > p').on('mouseleave',function(){
        $(this).removeClass('view')
    })
})