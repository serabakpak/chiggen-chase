$(document).ready(function() {
    var $homerSimpson = $('#homer');
    var $peterGriffin = $('#peter');
    var audioChicken = new Audio('media/Angry-chicken.mp3');
    audioChicken.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    audioChicken.play();
    $('#audio').click(function() {
        if (audioChicken.paused == false) {
            audioChicken.pause();
        } else {
            audioChicken.play();
            }
        });

    
    //click the Catch It button to start the game
    $('#go').click(function() {
        var chickenWidth = $('#chicken').width();
        var trackWidth = $(document).width() - chickenWidth;
        
        

        $('#go').removeClass('infinite');
        $('#chicken').removeClass('rollIn');
        $('#chicken').addClass('infinite bounce');
        $('#chicken').animate({left: trackWidth}, 4000);
        
        $(document).keydown(function(key) {
            
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
                case 91: 
                    $homerSimpson.css('left', positionOne.left + 40 + 'px');
                    break;
                case 39: 
                    $peterGriffin.css('left', positionTwo.left + 40 + 'px');
                    break;
            }

        });

        $('#reset').click(reset);

    });
      
});

function reset() {
    $('.player').css('left', 0);
    $('#chicken').css('left', '200px');
    $('#dinner').remove();
    $('h1').text('Chiggen Chase');
    $('#go').addClass('infinite');
    $('img').addClass('rollIn');
    $('#chicken').removeClass('infinite bounce');
    $('#reset').removeClass('animated infinite pulse');
}