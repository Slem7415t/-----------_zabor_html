/*main.js*/


jQuery('document').ready(function() {

    $('.open-popup').click(function(e) {
        e.preventDefault();
        $('.popup-bg').fadeIn(600);
        $('html').addClass('no-scroll');
    });
    
    $('.close-popup').click(function() {
        $('.popup-bg').fadeOut(600);
        $('html').removeClass('no-scroll');
    });

   

/*var
    degress = 90,
    timer = setInterval(function() {

        degress++;
        jQuery('.experience, .courses_skills_tools').css('background', 'linear-gradient(' + degress + 'deg, #ffffff, #eba8a8');

    }, 20000 / 360);  --градиент--*/

});
