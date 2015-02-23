/**
 * Created by isrmn on 18.2.2015 г..
 */
(function($) {
    //initiate Skrollr
    var s = skrollr.init( {
        render: function(data) {
        }
    });

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#scrollerToTop').fadeIn();
            } else {
                $('#scrollerToTop').fadeOut();
            }
        });

        $('#scrollerToTop').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 2000);
            return false;
        });
    });

    $( document ).ready(function() {
        $('#cssmenu').prepend('<div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div><div id="bg-four"></div>');
    });
    $("li").click(function(){
        // If this isn't already active
        if (!$(this).hasClass("active")) {
            // Remove the class from anything that is active
            $("li.active").removeClass("active");
            // And make this active
            $(this).addClass("active");
        }
    });

})(jQuery);

$(function(){
    //$("#home-screen").hide().fadeOut();
    $("#gallery").hide().fadeOut();

    $('#gallery-bth').click(function(){
        $("#gallery").show().fadeIn();
        $("#home-screen").hide().fadeOut();

    });
    $('#home-bth').click(function(){
        $("#gallery").hide().fadeOut();
        $("#home-screen").show().fadeIn();
    });
});
