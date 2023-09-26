$(function () {
    /*.more_btn a를 클릭하면, .popup이 나타난다.
    .close를 클릭하면 .popup이 사라진다.
    */
    $(".ongoing .pop1").click(function () {
        $(".popup").fadeIn();
    });
    $(".close_btn").click(function () {
        $(".popup").fadeOut();
    });
    $(".ongoing .pop2").click(function () {
        $(".popup2").fadeIn();
    });
    $(".close_btn").click(function () {
        $(".popup2").fadeOut();
    });
    $(".ongoing .pop3").click(function () {
        $(".popup3").fadeIn();
    });
    $(".close_btn").click(function () {
        $(".popup3").fadeOut();
    });
});
