var liveServer = require("live-server");

var params = {
	port: 8000,
	host: "127.0.0.1",
	open: true,
	file: "index.html", 
	wait: 1000,
	logLevel: 0,
	middleware: [function(req, res, next) { next(); }]
};
liveServer.start(params);