var request = require('request');

function periscope(url, callback) {


	let idFinder = function(url) {

		let pscp = url.match(/pscp.tv\/w\/(.*)/i);
		let peri = url.match(/periscope.tv\/w\/(.*)/i);

		if (pscp !== null) {
			return pscp[1];
		}
		if (peri !== null) {
			return peri[1];
		} else return null;

	};

	if (idFinder(url) !== null) {

		var api = 'https://api.periscope.tv/api/v2/getAccessPublic?broadcast_id=' + idFinder(url);

		request(api, function(error, response, body) {
			if (error || response.statusCode != 200) {
				callback('Response error: ' + response.statusCode);
				return;
			}

			var obj = JSON.parse(body);

			callback(null, obj);
		});

	} else {
		return callback(null, "Not a valid URL.")
	}
}

module.exports = periscope;

