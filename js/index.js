$(document).ready(function() {

    // window.resizeBy(-200, -200);

    var width = document.documentElement.clientWidth - 400;
    var height = document.documentElement.clientHeight - 600;
    var code = 0;
    // var maakletter = genLetter();
console.log (height);
    // Generating a random color -- code snippet from Riva Tamada
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
    // Generating a random alphabet between A-Z --- code snippet adapted from Riva Tamada
    function genLetter() {
        var kleur = randomColor();
        var hoofdletters = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
        var schermletter = String.fromCharCode(hoofdletters);
        var top = Math.floor(Math.random() * height );
        var left = Math.floor(Math.random() * width );
        $('body').append('<span class="bubb bubb'+ hoofdletters +'" style="left: '+ left +'px'+'; top: '+ top +'px'+'; background-color:'+'#'+ kleur +'">'+ schermletter +'</span>');
        setTimeout(genLetter, 1000);
    }

    // $('#startLnk').click( function() {
    //     $(this).fadeOut('slow');
    //     $('#score').show();

    //     genLetter();
    // });

    // Dealing KeyEvents and fading out matched bubble -- -- code snippet from Riva Tamada
    $('#startLnk').keydown( function(event) {
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
   

    // $("body").keydown(function (event)  {
    //     if (event.which == 27) {
    //          //quits game after pressing esc. button
    //         $('#message').fadeIn('slow', function(){
    //            $('#message').delay(2*1000).fadeOut();
    //            $("body").fadeOut();
    //         })}})

});
// *********tryout addons
document.querySelector('#aboutFrame').addEventListener('click', toggleModal);
document.querySelector('#aboutLnk').addEventListener('click', toggleModal);
document.querySelector('#startLnk').addEventListener('click', startSpel);

function toggleModal() {
  $(`#aboutFrame`).toggleClass('u--blur-fadeout');
    $(`#knoppensectie`).toggleClass('u--blur-fadeout');
};

function startSpel() {
    $(`#knoppensectie`).toggleClass('u--blur-fadeout');
    $('#score').show();
genLetter();
};

 });
    