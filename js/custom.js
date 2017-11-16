$(function() {



    /* Smooth scroll to Plans Block
    ====================================*/

    $("#js-get-started").on("click", function(e) {

        e.preventDefault();
        var plansOffset = $("#js-plans").offset().top;

        $("html, body").animate({
            scrollTop: plansOffset
        }, 500);

    });




    /* Fixed header when scroll
    ====================================*/

    var headerH = $("#js-header").height(),
        navH = $("#js-nav-container").innerHeight();

    $(document).on("scroll", function() {

        var documentScroll = $(this).scrollTop();

        if(documentScroll > headerH) {
            $("#js-nav-container").addClass("fixed");

            $("#js-header").css({
                "paddingTop": navH
            });
        } else {
            $("#js-nav-container").removeClass("fixed");
            $("#js-header").removeAttr("style");
        }

    });




    /* Smooth scroll to the pages block
    ====================================*/

    $("#js-nav a").on("click", function(e) {

        e.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 20
        }, 500);

    });






$(".js-show-modal").on("click",function(element){  
element.preventDefault();

$(".js-modal").fadeIn();
});





});
