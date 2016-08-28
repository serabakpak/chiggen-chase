$(document).ready(function() {
    var $homerSimpson = $('#homer');
    var $peterGriffin = $('#peter');
    
    $('#go').click(function() {
        var chickenWidth = $('#chicken').width();
        var trackWidth = $(document).width() - chickenWidth;
        $('#go').removeClass('infinite');
        $('#chicken').removeClass('rollIn');
        $('#chicken').addClass('infinite bounce');
        $('#chicken').animate({left: trackWidth}, 7000);
        
        $(document).keydown(function(key) {
            //console.log(key.which);
            var positionOne = $($homerSimpson).position();
            var positionTwo = $($peterGriffin).position();
            console.log(positionOne.left + $($homerSimpson).width() + 20);
            if (positionOne.left + $($homerSimpson).width() >= trackWidth) {
                $(document).off('keydown');
                $('#container').append('<img id="dinner" src="imgs/winnerwinnerchickendinner.png"></img>');
                $('h1').text('Homer Simpson Wins!!!!');
                var audio = new Audio('media/burp.wav');
                audio.play();
                return;
            }
            if (positionTwo.left + $($peterGriffin).width() >= trackWidth) {
                $(document).off('keydown');
                $('#container').append('<img id="dinner" src="imgs/winnerwinnerchickendinner.png"></img>');
                $('h1').text('Peter Griffin Wins!!!!');
                var audio = new Audio('media/laugh.mp3');
                audio.play();
                
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



    });
      
});

