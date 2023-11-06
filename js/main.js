$(function(){
    $(".reiew_item").on("mouseenter", function(){
        $(this).find(".reiew_text").addClass("on")
    });
    $(".reiew_item").on("mouseleave", function(){
        $(this).find(".reiew_text").removeClass("on")
    });

    $('#gnb > li').on("mouseover", function(){
        $(".nav_bg").addClass("on");
        $(this).find("> a").css({
            background: "var(--secondary-color)",
            color: "var(--bg-color)"})
        $('.lnb').addClass("on");
    });
    $('#gnb > li').on("mouseout", function(){
        $(".nav_bg").removeClass("on");
        $(this).find("> a").css({
            background: "none",
            color: "color: var(--font-color)"})
        $('.lnb').removeClass("on");
    })
    
    $('.search').on("click", function(){
        $(".nav_bg").addClass("on");
    });

    $('.promotion > li > a').on("click", function() {
        console.log("클릭함");
        $(".sub_lnb").stop().slideToggle(300);
    });


    $('.newnbest_title > li').on('click', function(){
        $(this).addClass('on').siblings().removeClass();
    })

    $('.category_item').on("mouseenter", function (){
        $(this).find('.ci_text').css("top", "0%")
    });
    $('.category_item').on("mouseleave", function (){
        $(this).find('.ci_text').css("top", "70%")
    });
    
})