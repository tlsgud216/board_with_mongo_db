var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form', {
        name: 'kimsinhyoung',
        blog: 'bcg',
        homepage: 'www',
    });
});

router.post('/',function(req,res,next){
    res.json(req.body);}
);

module.exports = router;
