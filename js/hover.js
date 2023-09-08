$(function () {
    $(".flower").hover(function () {
        $(".hover_ani1").stop().fadeIn();
    },
        function () {
            $(".hover_ani1").stop().fadeOut();
        });
});

$(function () {
    $(".b_name").hover(function () {
        $(".hover_ani2").stop().fadeIn();
    },
        function () {
            $(".hover_ani2").stop().fadeOut();
        });
});

$(function () {
    $(".slogan_circled").hover(function () {
        $(".hover_ani3").stop().fadeIn();
    },
        function () {
            $(".hover_ani3").stop().fadeOut();
        });
});