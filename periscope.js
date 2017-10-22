const needle = require('needle');

function periscope(url, callback) {
	let id = findId(url);

	if (id) {
		let api = 'https://api.periscope.tv/api/v2/getAccessPublic?broadcast_id=' + id;

		needle.get(api, (error, response, body) => {
			if (error) {
				callback(new Error('Network error'));
			}
			else if (response.statusCode != 200) {
				callback(new Error('Response error: ' + response.statusCode));
			}
			else {
				callback(null, body);
			}
		});
	}
	else {
		return callback(new Error('Invalid URL'));
	}
}

function findId(url) {
	let pscp = url.match(/pscp.tv\/w\/(.*)/i);
	let peri = url.match(/periscope.tv\/w\/(.*)/i);

	if (pscp !== null) return pscp[1];
	if (peri !== null) return peri[1];
	else return null;
}

module.exports = periscope;
