validation = ->
  $('input[placeholder]').placeholder()
  numero = " '\\@ñÑ+-|*/°!\"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}´+abcdefghijklmnopqrstuvwxyz¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿŒœŠšŸƒ–—‘’‚“”„†‡•…‰€™¿¡"
  solotexto = '\'\\@+-*/°!"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}+|¡¢£¤¥¦§¨©ª«¬®¯°±²³µ¶·¸¹º»¼½¾¿ÀÂÃÄÅÆÇÈÊËÌÎÏÐÒÔÕÖ×ØÙÛÜÝÞßàâãäåæçèêëìîïðòôõö÷ø'
  mail = '\'\\+*/°!ñÑ"#$%&/()=?¡¨*[];:^`~¬\\,{}+|¡¢£¤¥¦§¨©ª«¬®¯°±²³µ¶·¸¹º»¼½¾¿ÀÂÃÄÅÆÇÈÊËÌÎÏÐÒÔÕÖ×ØÙÛÜÝÞßàâãäåæçèêëìîïðòôõö÷ø'


  $('#txtDni,#txtTelFijo,#txtTelCel').numeric ichars: numero + '<>'
  $('#txtName,#txtAp').alpha(ichars: solotexto)
  $('#txtMail').alphanumeric(ichars:mail)


  if navigator.userAgent.match(/Android/i)
    $('#txtDni,#txtTelFijo,#txtTelCel').keyup ->
      this.value = this.value.replace(/[^0-9]/g, '')

    $('#txtMail').keyup ->
      this.value = this.value.replace(/[^A-Za-z_.0123456789@-]/g, '')

    $('#txtName,#txtAp').keyup ->
      this.value = this.value.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚ äëïöüÿÄËÏÖÜ]/g, '')

  $('#formPorta').validate(
    errorClass: 'error'
    rules:
      Nombres:
        required: true
      Apellidos:
        required: true
      Telefono1:
        required: true,
        rangelength: [7, 7]
      Telefono2:
        required: true,
        rangelength: [9, 9]
      DNI:
        required: true,
        min: 1,
        max: 99999998,
        rangelength: [8, 8]
      Mail:
        required: true,
        email: true
      Distrito:
        required: true
      AceptoTerminoCondiciones:
        required: true
      AceptoClasulaProteccionDatos:
        required: true
    messages:
      Nombres: 'Ingresa un Nombre(s)',
      Apellidos: 'Ingresa tus Apellidos',
      Telefono1:
        required: 'Ingresa Teléfono Fijo',
        rangelength: 'Debe ingresar 7 dígitos'
      Telefono2:
        required: 'Ingresa un Celular de contacto',
        rangelength: 'Debe ingresar 9 dígitos'
      DNI:
        min: 'Ingrese un DNI válido',
        max: 'Ingrese un DNI válido',
        required: 'Ingrese DNI',
        rangelength: 'Debe ingresar 8 dígitos'
      Mail:
        required: 'Ingresa un Mail',
        email: 'Ingrese un Mail válido'
      Distrito:
        required: 'Selecciona un distrito'
      AceptoTerminoCondiciones:
        required: 'Debe aceptar los términos y condiciones'
      AceptoClasulaProteccionDatos:
        required: 'Debe aceptar la cláusula de protección de datos'

    showErrors: (errorMap, errorList) ->
      for i in [0...errorList.length]
        all = errorList[0].message
        caja = errorList[0].element.id
      $('.form-errors').html('')
      $('input, select').removeClass('errorCaja')
      $('.form-errors').html(all)
      $('#' + caja).addClass('errorCaja')
  )

actionButtons = ->
  $('.btnComprar').on('click', ->
    if $('#formPorta').valid()

      $.ajax
        type: 'POST'
        url: 'http://apiforms.serviciosmovistar.com/api/CATPortabilidad/GrabarCompraPortabilidadSamsungE7'
        crossDomain: true
        dataType: 'json'
        data: $('#formPorta').serialize()
        success: (responseData, textStatus, jqXHR) ->

          if responseData.Estado is 'OK'
            $('#formOk').show()
            $('#formData').hide()

          $('#formPorta').trigger 'reset'
  )

  $('#btnDesple').on('click', ->
    $('#btnDesple').hide()
    $('.contForm').show()

  )

$ ->
  validation()
  actionButtons()