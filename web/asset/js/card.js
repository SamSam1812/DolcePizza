var card = document.querySelector(".card");
var playing = false;

card.addEventListener('click',function() {
    if(playing)
        return;

    playing = true;
    anime({
        targets: card,
        scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
        rotateY: {value: '+=180', delay: 200},
        easing: 'easeInOutSine',
        duration: 400,
        complete: function(anim){
            playing = false;
        }
    });
});

var card2 = document.querySelector(".card2");
var playing = false;

card2.addEventListener('click',function() {
    if(playing)
        return;

    playing = true;
    anime({
        targets: card2,
        scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
        rotateY: {value: '+=180', delay: 200},
        easing: 'easeInOutSine',
        duration: 400,
        complete: function(anim){
            playing = false;
        }
    });
});

var card3 = document.querySelector(".card3");
var playing = false;

card3.addEventListener('click',function() {
    if(playing)
        return;

    playing = true;
    anime({
        targets: card3,
        scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
        rotateY: {value: '+=180', delay: 200},
        easing: 'easeInOutSine',
        duration: 400,
        complete: function(anim){
            playing = false;
        }
    });
});

