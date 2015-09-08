(function() {
  var cantPosiciones, inicial, paso, personaje, posicion, scrollTimer, widthImage;

  cantPosiciones = 2;

  widthImage = 200;

  posicion = 1;

  paso = 50;

  scrollTimer = null;

  personaje = $('.personaje');

  inicial = 0;

  $(function() {
    return $(window).scroll(function(e) {
      var final;
      e.preventDefault();
      final = $(window).scrollTop();
      if (final > inicial) {
        inicial = final;
        if (scrollTimer) {
          clearTimeout(scrollTimer);
        }
        return scrollTimer = setTimeout(function() {
          scrollTimer = null;
          if (posicion > cantPosiciones) {
            posicion = 0;
          }
          TweenMax.to('.boxGreen', 1, {
            right: +paso
          });
          personaje.css('backgroundPosition', -(widthImage * posicion) + 'px 0px');
          posicion++;
          return paso = paso + 50;
        }, 1);
      }
    });
  });

}).call(this);
