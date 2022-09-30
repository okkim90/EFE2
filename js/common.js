$(function(){
    $('.btn_menu').on('click',function(e){
        e.preventDefault();
        $('.allMenuWrap').addClass('on')
    });
    $('.close_allMenu').on('click',function(e){
        e.preventDefault();
        $('.allMenuWrap').removeClass('on')
    });

    //lnb
    $('.lnb > ul > li > a').on('click',function(){
        $(this).parents().toggleClass('on').siblings().removeClass('on');
        $('.lnb > ul > li').each(function(){
            if($(this).hasClass('on')){
                $(this).children('.lnb_list').stop().slideDown(300);
            }else{
                $(this).children('.lnb_list').stop().slideUp(300);
            }
        });
    });
    // lnb외 다른 영역 클릭시 lnb 닫기
    $('#wrap').click(function(e){
        if( !$('.lnb > ul').has(e.target).length ) $('.lnb_list').hide();
    });


    $('.am_toggle').on('click',function(){
        if($(this).parent().hasClass('on')){
            $(this).next('ul').slideUp(200).parent().removeClass('on').find('ul');
        }else{
            $(this).parent().addClass('on').siblings().removeClass('on');
            $(this).next('ul').slideDown(200).parent().siblings().find('ul').slideUp(200);
        }
    });

    contHeight();


});
$(window).resize(function(){
    contHeight();
});


function close_pop(_target){
    var $this = $(_target);
    $this.parents('.popup_wrap').css('display','none');

}

function close_top_banner(_target){
    var $this = $(_target);
    $this.parents('.top_banner').slideUp({
        duration:200,
        done:contHeight
    });
}

function contHeight(){
    let headerHeight = $('#header').outerHeight();
    let footerHeight = $('#footer').outerHeight();
    let maxHeight = $(window).height() - (headerHeight + footerHeight);
    $('.max_height').css({
       'margin-top' : headerHeight,
       'min-height' : maxHeight
    });
}