$(document).ready(function () {
    var isDone = true;
    $("#gnb > li").on("mouseenter", function () {
        if (isDone) {
            isDone = false;
            $(this).children("ul").stop().slideDown("on");
            $(this).children("a").addClass("on");
        }
    });
    $("#gnb > li").on("mouseleave", function () {
        $(this).children("ul").slideUp("on");
        $(this).children("a").removeClass("on");
    });

    /* tab */
    $(".tab > li").click(function () {
        $(".tab").find("li").removeClass("on");
        $(".content").find("div").removeClass("on");

        $(this).addClass("on");

        var conId = $(this).children("a").attr("href");
        $(conId).addClass("on");
    })

    /* slide */
    setInterval(function () {
		$(".frame").animate({ "bottom": "-300px" },
            function () {
                $('.frame').css({ "bottom": "0px" });
				$(".frame>li").eq(0).appendTo(".frame");
            })
    }, 3000);

    /* popup */
    $("#notice ul li").eq(0).on("click", function () {
        $(".popup").show();
    })
    $(".close").on("click", function () {
        $(".popup").hide();
    })

    /* gallery */
    $("#gallery > a").on("mouseenter", function () {
        $(this).css({ "opacity": "1" });
    });
    $("#gallery > a").on("mouseleave", function () {
        $(this).css({ "opacity": "0.5" });
    });
});