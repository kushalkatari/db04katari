
var express = require('express');
const dress_controllers= require('../controllers/dress');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET costumes */
router.get('/', dress_controllers.dress_view_all_Page );

/* GET detail costume page */
router.get('/detail', dress_controllers.dress_view_one_Page);

/* GET create costume page */
router.get('/create',secured, dress_controllers.dress_create_Page);


/* GET update costume page */
router.get('/update',secured, dress_controllers.dress_update_Page);


/* GET delete  costume page */
router.get('/delete',secured, dress_controllers.dress_delete_Page);

module.exports = router;