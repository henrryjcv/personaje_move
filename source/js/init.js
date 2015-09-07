(function() {
  var cantPosiciones, personaje, posicion, scrollTimer, widthImage;

  cantPosiciones = 8;

  widthImage = 200;

  posicion = 1;

  scrollTimer = null;

  personaje = $('.personaje');

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
        personaje.css('backgroundPosition', -(widthImage * posicion) + 'px 0px');
        return posicion++;
      }, 1);
    });
  });

}).call(this);
