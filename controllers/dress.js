var Dress = require('../models/dress');

// List of all Dress
exports.dress_list = async function(req, res) {
    try{
    theDress = await Dress.find();
    res.send(theDress);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
   };

   exports.dress_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Dress.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle Dress create on POST.
exports.dress_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Dress create POST');
};
// Handle Costume delete form on DELETE.
exports.dress_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Dress.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
exports.dress_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Dress.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.brand) toUpdate.brand = req.body.brand;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


exports.dress_view_all_Page = async function(req, res) {
    try{
    theDress = await Dress.find();
    res.render('dress', { title: 'Dress Search Results', results: theDress });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
   };
   // for a specific Costume.

   // Handle a show one view with id specified by query
    exports.dress_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Dress.findById( req.query.id)
        res.render('dressdetail', 
       { title: 'Dress Detail', toShow: result });
       }
       catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

   


// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dress_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('dresscreate', { title: 'Dress Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



// Handle building the view for updating a costume.
// query provides the id
exports.dress_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Dress.findById(req.query.id)
        res.render('dressupdate', { title: 'Dress Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



// Handle a delete one view with id from query
exports.dress_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Dress.findById(req.query.id)
        res.render('dressdelete', { title: 'Dress Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

