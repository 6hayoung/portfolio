$(function(){

    //console.log('스크립트 보기 >')

    //GNB 클릭 이벤트
    $('#left > ul > li').on('click',function(){
        let leftIdx = $(this).index();
        const menuEng = ['HOME','PROFILE','ABILITY','PORTFOLIO','THANK YOU']
        $('#right > .slide-wrapper > div').eq(leftIdx).fadeIn().siblings().fadeOut()
        $(this).addClass('view').siblings().removeClass('view')
        $('.header > .pagination').text(menuEng[leftIdx])
    })          

})