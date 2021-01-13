console.log('linked');

const pageLayout = () => {
   $('body').append($('<div>').attr('id', 'game'));
   $('#game').append($('<h1>').text('The Jumping Man'));
   $('#game').append($('<div>').attr('id', 'character')); 
   $('#game').append($('<div>').attr('id', 'obstacles'));
   $('#character').append($('<div>').addClass('player-image')); 
   $('#obstacles').append($('<div>').addClass('obstacle-image')); 

};

const playerJump = () => {
    $('html').keydown(function(event){
        console.log(event.which);
    });

    let arrowUp = 38;
    $('html').keydown(function(event){
        if (event.which == arrowUp) {
            $('.player-image').animate({
                marginTop: '150px',
            }, 500);

            $('.obstacle-image').animate({
                marginTop: '1.5%',
            }, 500);


        }
    })

    
    
};
        


$(() => {

    pageLayout();
    
    playerJump();
   

});



