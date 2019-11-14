$(document).ready(function() {
// Getting screen resolutions and positioning the start button

    var width = window.innerWidth;
    var height = window.innerHeight;
    var code = 0;

    // Generating a random color
    function randomColor() {
        var color = '';
        var values = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        for (c = 0; c < 6; c++)
        {
        no = Math.floor(Math.random() * 15);
        color += values[no];
        }
        return color;
    }
    // Generating a random alphabet between A-Z
    function genLetter() {
        var color = randomColor();
        var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
        var ch = String.fromCharCode(k);
        var top = Math.floor(Math.random() * height );
        var left = Math.floor(Math.random() * width );
        $('body').append('<span class="bubb bubb'+ k +'" style="left: '+ left +'px'+'; top: '+ top +'px'+'; background-color:'+'#'+ color +'">'+ ch +'</span>');
        setTimeout(genLetter, 1000);
    }

    $('#start').click( function() {
        $(this).fadeOut('slow');
        $('#score').show();
        genLetter();
    });

    // Dealing KeyEvents and fading out matched bubble
    $(document).keydown( function(event) {
        var keycode = event.keyCode;
        $('.bubb'+keycode).animate(
        {
        "top" : height+"px", "opacity" : 0
        }, 'slow');

    $('.bubb'+keycode).fadeOut('slow').hide( 'slow', function() {
        code += 20;
        $('#score').html(code);
        $(this).remove();
        }
        );
    });

    $("body").keydown(function (event)  {
        if (event.which == 27) {
             //quits game after pressing esc. button
            $('#message').fadeIn('slow', function(){
               $('#message').delay(2*1000).fadeOut();
               $("body").fadeOut();
            })}})

});