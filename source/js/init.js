(function() {
  var cantPosiciones, personaje, posicion, scrollTimer, widthImage;

  cantPosiciones = 7;

  widthImage = 90;

  posicion = 0;

  scrollTimer = null;

  personaje = $('#contPer');

  $(function() {
    return $(window).scroll(function(e) {
      e.preventDefault();
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      return scrollTimer = setTimeout(function() {
        scrollTimer = null;
        if (posicion > cantPosiciones) {
          posicion = 0;
        }
        personaje.css('backgroundPosition', -(widthImage * posicion));
        return posicion++;
      }, 1);
    });
  });

}).call(this);
