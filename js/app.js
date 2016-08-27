$(document).ready(function() {
    
    $(document).keydown(function(key) {
        switch(parseInt(key.which, 10)) {
            // Left arrow key pressed
            case 37:
                $('#player-one').animate({left: "-=50px"}, 'fast');
                break;
        
            // Right Arrow Pressed
            case 39:
                $('#player-one').animate({left: "+=50px"}, 'fast');
                break;
        }     
        switch(parseInt(key.which, 10)) {
             // Left arrow key pressed
            case 90:
                $('#player-two').animate({left: "-=50px"}, 'fast');
                break;
        
            // Right Arrow Pressed
            case 88:
                $('#player-two').animate({left: "+=50px"}, 'fast');
                break;   
            
        }
    });
});