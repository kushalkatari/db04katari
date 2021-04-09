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
exports.dress_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Dress delete DELETE ' + req.params.id);
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
    res.render('drees', { title: 'Dress Search Results', results: theDress });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
   };
   // for a specific Costume.
