var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
		var message = req.body.message;

    res.send("got message" + message);
  	//res.render('index', { title: 'Express' });
});

module.exports = router;
