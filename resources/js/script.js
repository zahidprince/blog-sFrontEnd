$(document).ready(function() {
    
    $("#js-mobile-nav").on('click', function(e){
        e.preventDefault();
        
        $("#menu").fadeIn( "slow", function() {

        });
    });

    $("#menuClose").on('click', function(e){
        e.preventDefault();
        
        $("#menu").fadeOut( "slow", function() {
            console.log("com");
        });
    });

    

});