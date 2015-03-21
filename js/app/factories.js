angular.module('app.factories', [])

.factory('OpenMovieDatabaseFactory', ['OpenMovieDatabaseConfig', 'QueryStringBuilderFactory', 'HttpService', function(OMDC, QSBF, HttpService) {
    /* PRIVATE VARS */
    var _t, _tomatoes = true, _plot = 'full', _y = "";

    /* PUBLIC METHODS */
    return {
        search: function (data) {
        	if(data.year){
        		_y = data.year
        	}
        	var url = OMDC.base_url;
        	url += QSBF.buildQuery(['t', 'tomatoes', 'y', 'plot'], [encodeURI(data.title), _tomatoes, _y, _plot]);
        	return HttpService.get(url);
        }
    }
}])

/**
*	This factory builds a query string from {@code keys} and {@code values}
* 	and returns the built query string
*/
.factory('QueryStringBuilderFactory', [function() {
    return {
        buildQuery: function(keys, values) {
            if (keys.length != values.length) {
                return false;
            }
            var i = 0,
                string = "?";
            for (i; i < keys.length; i++) {
                string += "&" + keys[i] + '=' + values[i];
            }
            return string;
        }
    }
}]);
