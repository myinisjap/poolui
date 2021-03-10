'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: process.env.WEB_HOSTNAME || "XMRTariPool.net",
		api_url : process.env.API_HOSTNAME || 'http://api.xmrtaripool.test',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});
