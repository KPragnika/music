var unirest = require("unirest");

var req = unirest("GET", "https://unsa-unofficial-spotify-api.p.rapidapi.com/search");

req.query({
	"query": "magenta riddim",
	"count": "20",
	"type": "tracks"
});

req.headers({
	"x-rapidapi-host": "unsa-unofficial-spotify-api.p.rapidapi.com",
	"x-rapidapi-key": "5eb78cb0femsh6dc784018b45b53p190851jsn93a13a7754c1",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});