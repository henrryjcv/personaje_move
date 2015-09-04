(function() {
  var actionButtons, validation;

  validation = function() {
    var mail, numero, solotexto;
    $('input[placeholder]').placeholder();
    numero = " '\\@ñÑ+-|*/°!\"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}´+abcdefghijklmnopqrstuvwxyz¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿŒœŠšŸƒ–—‘’‚“”„†‡•…‰€™¿¡";
    solotexto = '\'\\@+-*/°!"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}+|¡¢£¤¥¦§¨©ª«¬®¯°±²³µ¶·¸¹º»¼½¾¿ÀÂÃÄÅÆÇÈÊËÌÎÏÐÒÔÕÖ×ØÙÛÜÝÞßàâãäåæçèêëìîïðòôõö÷ø';
    mail = '\'\\+*/°!ñÑ"#$%&/()=?¡¨*[];:^`~¬\\,{}+|¡¢£¤¥¦§¨©ª«¬®¯°±²³µ¶·¸¹º»¼½¾¿ÀÂÃÄÅÆÇÈÊËÌÎÏÐÒÔÕÖ×ØÙÛÜÝÞßàâãäåæçèêëìîïðòôõö÷ø';
    $('#txtDni,#txtTelFijo,#txtTelCel').numeric({
      ichars: numero + '<>'
    });
    $('#txtName,#txtAp').alpha({
      ichars: solotexto
    });
    $('#txtMail').alphanumeric({
      ichars: mail
    });
    if (navigator.userAgent.match(/Android/i)) {
      $('#txtDni,#txtTelFijo,#txtTelCel').keyup(function() {
        return this.value = this.value.replace(/[^0-9]/g, '');
      });
      $('#txtMail').keyup(function() {
        return this.value = this.value.replace(/[^A-Za-z_.0123456789@-]/g, '');
      });
      $('#txtName,#txtAp').keyup(function() {
        return this.value = this.value.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚ äëïöüÿÄËÏÖÜ]/g, '');
      });
    }
    return $('#formPorta').validate({
      errorClass: 'error',
      rules: {
        Nombres: {
          required: true
        },
        Apellidos: {
          required: true
        },
        Telefono1: {
          required: true,
          rangelength: [7, 7]
        },
        Telefono2: {
          required: true,
          rangelength: [9, 9]
        },
        DNI: {
          required: true,
          min: 1,
          max: 99999998,
          rangelength: [8, 8]
        },
        Mail: {
          required: true,
          email: true
        },
        Distrito: {
          required: true
        },
        AceptoTerminoCondiciones: {
          required: true
        },
        AceptoClasulaProteccionDatos: {
          required: true
        }
      },
      messages: {
        Nombres: 'Ingresa un Nombre(s)',
        Apellidos: 'Ingresa tus Apellidos',
        Telefono1: {
          required: 'Ingresa Teléfono Fijo',
          rangelength: 'Debe ingresar 7 dígitos'
        },
        Telefono2: {
          required: 'Ingresa un Celular de contacto',
          rangelength: 'Debe ingresar 9 dígitos'
        },
        DNI: {
          min: 'Ingrese un DNI válido',
          max: 'Ingrese un DNI válido',
          required: 'Ingrese DNI',
          rangelength: 'Debe ingresar 8 dígitos'
        },
        Mail: {
          required: 'Ingresa un Mail',
          email: 'Ingrese un Mail válido'
        },
        Distrito: {
          required: 'Selecciona un distrito'
        },
        AceptoTerminoCondiciones: {
          required: 'Debe aceptar los términos y condiciones'
        },
        AceptoClasulaProteccionDatos: {
          required: 'Debe aceptar la cláusula de protección de datos'
        }
      },
      showErrors: function(errorMap, errorList) {
        var all, caja, i, _i, _ref;
        for (i = _i = 0, _ref = errorList.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          all = errorList[0].message;
          caja = errorList[0].element.id;
        }
        $('.form-errors').html('');
        $('input, select').removeClass('errorCaja');
        $('.form-errors').html(all);
        return $('#' + caja).addClass('errorCaja');
      }
    });
  };

  actionButtons = function() {
    $('.btnComprar').on('click', function() {
      if ($('#formPorta').valid()) {
        return $.ajax({
          type: 'POST',
          url: 'http://apiforms.serviciosmovistar.com/api/CATPortabilidad/GrabarCompraPortabilidadMotorolaMotoE',
          crossDomain: true,
          dataType: 'json',
          data: $('#formPorta').serialize(),
          success: function(responseData, textStatus, jqXHR) {
            if (responseData.Estado === 'OK') {
              $('#formOk').show();
              $('#formData').hide();
            }
            return $('#formPorta').trigger('reset');
          }
        });
      }
    });
    return $('#btnDesple').on('click', function() {
      $('#btnDesple').hide();
      return $('.contForm').show();
    });
  };

  $(function() {
    validation();
    return actionButtons();
  });

}).call(this);
