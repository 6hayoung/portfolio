$(function(){
    console.log('스크립트 보기 >')
    $('#left > ul > li').on('click',function(){
        let leftIdxM = $(this).index();
            $('#right > .slide-wrapper > div').eq(leftIdxM).fadeIn().siblings().fadeOut()
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