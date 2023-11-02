$(function(){
    $(".reiew_item").on("mouseenter", function(){
        $(this).find(".reiew_text").addClass("on")
    });
    $(".reiew_item").on("mouseleave", function(){
        $(this).find(".reiew_text").removeClass("on")
    });

    $('.nav_bg').on("mouseover", function(){
        $(this).addClass("on");
        $('#gnb').find('> li').css("background", "var(--secondary-color)")
        $('.lnb').addClass("on");
        
    });
})