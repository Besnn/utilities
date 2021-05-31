(function() {
	function jsonp(url, callback) {
		var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
		window[callbackName] = function(data) {
			document.body.removeChild(script);
			callback(data);
		};

		var script = document.createElement('script');
		script.src = url + '&format=jsonp&callback=' + callbackName;
		document.body.appendChild(script);
	}

	jsonp("http://backend.deviantart.com/oembed?url=" + encodeURIComponent(document.URL.split("?")[0]), function(data) {
		//window.location.href = data["url"];
	   window.open(data["url"]);
	});
}());
