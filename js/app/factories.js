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
    	boxOffice: function () {
    		var url = RTC.base_url + '/lists/movies/box_office.json';
            url += QSBF.buildQuery(['page_limit', 'page', 'country', 'apikey'], [_pageLimit, _page, _country, _apiKey]);
            return HttpService.get(url);
    	},
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
        },
        search: function (query) {
        	var url = RTC.base_url + '/lists/movies';
        	url += QSBF.buildQuery(['q', 'page_limit', 'page', 'country', 'apikey'], [encodeURI(query), _pageLimit, _page, _country, _apiKey]);
        	return HttpService.get(url);
        },
        //DVD LISTS
        currentRelease: function () {
        	var url = RTC.base_url + '/lists/dvds/current_releases.json';
        	url += QSBF.buildQuery(['page_limit', 'page', 'country', 'apikey'], [_pageLimit, _page, _country, _apiKey]);
        	return HttpService.get(url);
        },
        newRelease: function () {
        	var url = RTC.base_url + '/lists/dvds/new_releases.json';
        	url += QSBF.buildQuery(['page_limit', 'page', 'country', 'apikey'], [_pageLimit, _page, _country, _apiKey]);
        	return HttpService.get(url);
        },
        upcomingRelease: function () {
        	var url = RTC.base_url + '/lists/dvds/upcoming.json';
        	url += QSBF.buildQuery(['page_limit', 'page', 'country', 'apikey'], [_pageLimit, _page, _country, _apiKey]);
        	return HttpService.get(url);
        }
    }
}])

/**
*	This factory provides method for writing the movie rottentomatoes data chunks to localstorage.
*	In this way we prevent the user fromg needing to refresh data via http calls.
*/
.factory('MovieStorageFactory', ['$localStorage', function ($localStorage) {
	var _oneDay = 24*60*60*1000;
	if(!$localStorage.movies){
		$localStorage.movies = {}
	}
	return {
		writeBoxOffice: function (data) {
			$localStorage.movies.boxOffice = data;
			$localStorage.movies.lastWrote = new Date();
		},
		writeInTheaters: function (data) {
			$localStorage.movies.inTheaters = data;
			$localStorage.movies.lastWrote = new Date();
		},
		writeOpeningMovies: function (data) {
			$localStorage.movies.openingMovies = data;
			$localStorage.movies.lastWrote = new Date();
		},
		writeUpcomingMovies: function (data) {
			$localStorage.movies.upcomingMovies = data;
			$localStorage.movies.lastWrote = new Date();
		},
		needToWriteStorage: function () {
			var now = new Date();
			if ($localStorage.movies.lastWrote == null) {
				return true;
			}
			var lastWrote = new Date($localStorage.movies.lastWrote);
			var days = Math.round(Math.abs((now.getTime() - lastWrote.getTime())/(_oneDay)));
			return (days > 1);
		}
	}
}])

/**
*	This factory provides method for writing the dvd rottentomatoes data chunks to localstorage.
*	In this way we prevent the user fromg needing to refresh data via http calls.
*/
.factory('DvdStorageFactory', ['$localStorage', function ($localStorage) {
	var _oneDay = 24*60*60*1000;
	if(!$localStorage.dvds){
		$localStorage.dvds = {}
	}
	return {
		writeCurrentRelease: function (data) {
			$localStorage.dvds.inTheaters = data;
			$localStorage.dvds.lastWrote = new Date();
		},
		writeUpcomingRelease: function (data) {
			$localStorage.dvds.openingMovies = data;
			$localStorage.dvds.lastWrote = new Date();
		},
		writeNewRelease: function (data) {
			$localStorage.dvds.upcomingMovies = data;
			$localStorage.dvds.lastWrote = new Date();
		},
		needToWriteStorage: function () {
			var now = new Date();
			if ($localStorage.dvds.lastWrote == null) {
				return true;
			}
			var lastWrote = new Date($localStorage.dvds.lastWrote);
			var days = Math.round(Math.abs((now.getTime() - lastWrote.getTime())/(_oneDay)));
			return (days > 1);
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
