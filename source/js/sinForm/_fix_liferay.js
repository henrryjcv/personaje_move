$(function(){

  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  if (!Array.prototype.indexOf){
    Array.prototype.indexOf = function(elt /*, from*/)
    {
      var len = this.length >>> 0;

      var from = Number(arguments[1]) || 0;
      from = (from < 0)
           ? Math.ceil(from)
           : Math.floor(from);
      if (from < 0)
        from += len;

      for (; from < len; from++)
      {
        if (from in this &&
            this[from] === elt)
          return from;
      }
      return -1;
    };
  }

  //removing styles
  var stylesheets = $('link[rel="stylesheet"]');
  var appCss = [
      "/documents/80379/2624215/bootstrap.min.css/73a84b33-5887-4cb1-87e4-10608e1660a2",
      "/documents/80379/2629282/style.css/36cd247e-dcca-4e2c-82b6-f548d1c19d5b"
    ];
    
  if(getParameterByName("fix") === ""){
      for (i=0; i<stylesheets.length; i++){
      var css = stylesheets[i];
      var href = $(css).attr('href');
      if(appCss.indexOf(href) == -1)
        $(css).remove();
    }

    //removing html
    var contentCloned = $('.journal-content-article').children().clone(true, true);
    $('body').empty();
    $('body').append(contentCloned);
  }else{

    var fileName=["/documents/80379/2624215/bootstrap.min.css/73a84b33-5887-4cb1-87e4-10608e1660a2",
    "/documents/80379/2629282/style.css/36cd247e-dcca-4e2c-82b6-f548d1c19d5b",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/vendor/jquery-1.8.3.js",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/vendor/fix_liferay.js",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/vendor/modernizr.js",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/vendor/respond.js",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/vendor/jquery.xdomainrequest.min.js",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/vendor/jquery.alphanumeric.pack.js",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/vendor/jquery.validate.js",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/vendor/placeholder.js",
    "http://servicios.movistar.com.pe/filesPortabilidadSem/js/init.js"];

    var $elements = $('link[rel="stylesheet"], script');
    var $link ="";

    $.each($elements, function(i,el){
        element = $(el)
        if(element.attr("href")){
          $link = element.attr("href");
        }else{
          $link = element.attr("src");
        }

        if($.inArray($link,fileName) != -1){
          element.remove();
        }
    })
  }




});