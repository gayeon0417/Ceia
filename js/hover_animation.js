

$(function () {
    $(".flower").hover(function () {
        $(".hover_ani1").css({ "opacity": "1" })
    },
        function () {
            $(".hover_ani1").css({ "opacity": "0.5" })
        });
    $(".b_name").hover(function () {
        $(".hover_ani2").css({ "opacity": "1" })
    },
        function () {
            $(".hover_ani2").css({ "opacity": "0.5" })
        });
    $(".slogan_circled").hover(function () {
        $(".hover_ani3").css({ "opacity": "1" })
    },
        function () {
            $(".hover_ani3").css({ "opacity": "0.5" })
        });
});