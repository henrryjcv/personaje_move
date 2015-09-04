cantPosiciones = 2
widthImage = 200
posicion = 1
scrollTimer = null

personaje = $('#contPer')

$ ->
  $(window).scroll (e) ->
    e.preventDefault()
    if scrollTimer
      clearTimeout(scrollTimer)

    scrollTimer = setTimeout ->
      scrollTimer = null

      if(posicion > cantPosiciones)
        posicion = 0

      personaje.css('backgroundPosition', -(widthImage * posicion) + 'px 0px')
      posicion++
    , 1
