$(document).ready(function() {
    var $homerSimpson = $('#homer');
    var $peterGriffin = $('#peter');
    
    var audioChicken = new Audio('media/Angry-chicken.mp3');
    audioChicken.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    audioChicken.play();
    
    //toggle button turns chicken sound on/off
    $('#audio').click(function() {
        if (audioChicken.paused == false) {
            audioChicken.pause();
        } else {
            audioChicken.play();
            }
        });

    //click the 'catch it' button to start the game
    $('#go').click(function() {
        var chickenWidth = $('#chicken').width();
        var trackWidth = $(document).width() - chickenWidth;
        
        $('#go').removeClass('infinite');
        $('img').removeClass('rollIn');
        $('#chicken').addClass('infinite bounce');
        $('#chicken').animate({left: trackWidth}, 4000);
        
        $(document).keydown(function(key) {
            
            //check for winner
            var positionOne = $($homerSimpson).position();
            var positionTwo = $($peterGriffin).position();
            if (positionOne.left + $($homerSimpson).width() >= trackWidth) {
                $(document).off('keydown');
                $('#container').append('<img id="dinner" src="imgs/winnerwinnerchickendinner.png"></img>');
                $('h1').text('Homer Simpson Wins!!!!');
                var audio = new Audio('media/burp.wav');
                audio.play();
                $('#reset').addClass('animated infinite pulse');
                return;
            }
            if (positionTwo.left + $($peterGriffin).width() >= trackWidth) {
                $(document).off('keydown');
                $('#container').append('<img id="dinner" src="imgs/winnerwinnerchickendinner.png"></img>');
                $('h1').text('Peter Griffin Wins!!!!');
                var audio = new Audio('media/laugh.mp3');
                audio.play();
                $('#reset').addClass('animated infinite pulse');
                return;
            }
            
            switch(key.which) {
                case 90: // press z to make homer go
                    $homerSimpson.css('left', positionOne.left + 40 + 'px');
                    break;
                case 39: // press right arrow to make peter go
                    $peterGriffin.css('left', positionTwo.left + 40 + 'px');
                    break;
            }
        });

        //press reset button to reset the game
        $('#reset').click(reset);
    });     
});

function reset() {
    $('.player').css('left', 0);
    $('#chicken').css('left', '200px');
    $('#dinner').remove();
    $('h1').text('Chiggen Chase');
    $('#go').addClass('infinite');
    $('img').removeClass('rollIn');
    $('h1').removeClass('slideInLeft');
    //to restart css animation - https://css-tricks.com/restart-css-animation/
    $('.reset-animation').each(function() {
        void this.offsetWidth;
    });
    $('img').addClass('rollIn');
    $('h1').addClass('slideInLeft');
    $('#chicken').removeClass('infinite bounce');
    $('#reset').removeClass('animated infinite pulse');
}