angular.module('app.factories', [])

.factory('RottenTomatoesFactory', ['RottenTomatoesConfig', 'QueryStringBuilderFactory', 'HttpService', function(RTC, QSBF, HttpService) {
    /* PRIVATE VARS */
    var _q, _pageLimit = 16,
        _page = 1,
        _country = 'us',
        _apiKey = RTC.key;

    /* PUBLIC METHODS */
    return {
    	//MOVIE LISTS
        inTheaters: function() {
            var url = RTC.base_url + '/lists/movies/in_theaters.json';
            url += QSBF.buildQuery(['page_limit', 'page', 'country', 'apikey'], [_pageLimit, _page, _country, _apiKey]);
            return HttpService.get(url);
        },
        openingMovies: function() {
            var url = RTC.base_url + '/lists/movies/opening.json';
            url += QSBF.buildQuery(['page_limit', 'page', 'country', 'apikey'], [_pageLimit, _page, _country, _apiKey]);
            return HttpService.get(url);
        },
        upcomingMovies: function() {
            var url = RTC.base_url + '/lists/movies/upcoming.json';
            url += QSBF.buildQuery(['page_limit', 'page', 'country', 'apikey'], [_pageLimit, _page, _country, _apiKey]);
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
