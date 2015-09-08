cantPosiciones = 2
widthImage = 200
posicion = 1
paso = 50
scrollTimer = null
personaje = $('.personaje')
inicial = 0

$ ->

  $(window).scroll (e) ->
    e.preventDefault()
    final = $(window).scrollTop();
    if final > inicial
      inicial =  final

      if scrollTimer
        clearTimeout(scrollTimer)

      scrollTimer = setTimeout ->
        scrollTimer = null

        if(posicion > cantPosiciones)
          posicion = 0

        TweenMax.to('.boxGreen',1,{right:+paso})
        personaje.css('backgroundPosition', -(widthImage * posicion) + 'px 0px')
        posicion++
        paso = paso + 50
      , 1







