$(document).ready(function() {
// Code below sets game playing area full screen - heigt and with pixels to keep the generates letters from te edges
    var width = document.documentElement.clientWidth - 400;
    var height = document.documentElement.clientHeight - 600;
    var score = 0;

    // Generating a random color for the letterbubbels -- original code snippet adapted from Riva Tamada
    function randomColor() {
        var kleur = '';
        var waarden = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        for (i = 0; i < 6; i++)
        {
        nummer = Math.floor(Math.random() * 15);
        kleur += waarden[nummer];
        }
        return kleur;
        }
    // Generating a random alphabet letter between A-Z --- original code snippet adapted from Riva Tamada
    function genLetter() {
        var kleur = randomColor();
        var hoofdletters = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
        var schermletter = String.fromCharCode(hoofdletters);
        var top = Math.floor(Math.random() * height );
        var left = Math.floor(Math.random() * width );
        $('#speelveld').append('<span class="bolletje bolletje'+ hoofdletters +'" style="left: '+ left +'px'+'; top: '+ top +'px'+'; background-color:'+'#'+ kleur +'">'+ schermletter +'</span>');
        setTimeout(genLetter, 1000);
        }

    // Dealing with KeyEvents while playing and fading out matched bubble
    $('body').keydown( function(event) {
        var keycode = event.keyCode;
        $('.bolletje'+keycode).animate(
        {
        "top" : height+"px", "opacity" : 0
        }, 'slow');

    $('.bolletje'+keycode).fadeOut('slow').hide( 'slow', function() {
        score += 20;
        $('#score').html(score);
        $(this).remove();
        }
        );

});

    // Dealing with KeyEvents while pressing start menu buttons

    document.querySelector('#aboutFrame').addEventListener('click', toggleModal);
    document.querySelector('#aboutLnk').addEventListener('click', toggleAbout);
    document.querySelector('#startLnk').addEventListener('click', startSpel);

    function toggleModal() {
    $(`#aboutFrame`).toggleClass('u--blur-fadeout');
    $(`#knoppensectie`).toggleClass('u--blur-fadeout');
    };

    // Dealing with KeyEvents while pressing the About menu buttons
    function toggleAbout() {
    $(`#aboutFrame`).toggleClass('u--blur-fadeout');
    $(`#knoppensectie`).toggleClass('u--blur-fadeout');
    $('.about').each(function(i) {
        // 'i' stands for index of each element
        $(this).hide().delay(i * 1500).fadeIn(1500);
    });
    };

    // Function made for making menu visible again
    function terugBijaf() {
        $(`#knoppensectie`).toggleClass('u--blur-fadeout');
    };
    // Function made for starting of the game after pushing start button
    function startSpel() {
        $(`#knoppensectie`).toggleClass('u--blur-fadeout');
        $('#score').show();
        genLetter();
    };

    //quits game after pressing esc. button and reloads the page again.
        $("body").keydown(function (event)  {
            if (event.which == 27) {
                $("#speelveld").fadeOut();
                $('#score').remove();
                $('#message').fadeIn(4000, function(){
                $('#message').delay(20).fadeOut();
                
                terugBijaf();
                location.reload();
                })}})

 });
    