
var express = require('express');
const dress_controllers= require('../controllers/dress');
var router = express.Router();
/* GET costumes */
router.get('/', dress_controllers.dress_view_all_Page );

/* GET detail costume page */
router.get('/detail', dress_controllers.dress_view_one_Page);

/* GET create costume page */
router.get('/create', dress_controllers.dress_create_Page);


/* GET update costume page */
router.get('/update', dress_controllers.dress_update_Page);


/* GET delete  costume page */
router.get('/delete', dress_controllers.dress_delete_Page);

module.exports = router;