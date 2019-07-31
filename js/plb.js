$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

$( document ).ready(function() {

	console.log("mon fichier js est bien chargé");	
     $(".card_city,.card_expertises").on("mouseover", function () {
        console.log( "je suis passé sur une card" );
     $(this).animateCss("pulse")
    });
});
$("#button_chuck").on("click", function () {
       console.log( "ok, on va chucker" );

       url = "https://api.chucknorris.io/jokes/random"
       console.log(url)

        $.get( url, function( data ) {
            console.log(data)
            $("#response_chuck").text(data.value)
        });

    });