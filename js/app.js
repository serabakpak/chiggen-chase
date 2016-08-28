$(document).ready(function() {
    var $playerOne = $('#player-one');
    var $playerTwo = $('#player-two');
    
    $('#go').click(function() {
        var chickenWidth = $('#chicken').width();
        var trackWidth = $(document).width() - chickenWidth;
        $('#go').removeClass('infinite');
        $('#chicken').removeClass('rollIn');
        $('#chicken').addClass('infinite bounce');

        $('#chicken').animate({
            left: trackWidth
        }, 7000);
    });
    


    $(document).keydown(function(key) {
        //console.log(key.which);
        
        var positionOne = $($playerOne).position();
        var positionTwo = $($playerTwo).position();
        switch(key.which) {
            
            case 39: //move player one right
                $playerOne.css('left', positionOne.left + 20 + 'px');
                break;
            case 88: //move player two right
                $playerTwo.css('left', positionTwo.left + 20 + 'px');
                break;
        }

    });

});