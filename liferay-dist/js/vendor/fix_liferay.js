$(function(){

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
		"/documents/80379/2624215/style.css/00a25598-3b9b-4a20-8b2d-2b0fd8786c77"
	];

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



});
