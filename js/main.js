$(function(){
    $(".reiew_item").on("mouseenter", function(){
        $(this).find(".reiew_text").addClass("on")
    });
    $(".reiew_item").on("mouseleave", function(){
        $(this).find(".reiew_text").removeClass("on")
    })
})