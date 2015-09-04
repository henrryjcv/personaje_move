cantPosiciones = 7
widthImage = 90
posicion = 0
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

      personaje.css('backgroundPosition', -(widthImage * posicion))
      posicion++
    , 1
