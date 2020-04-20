
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const registrationApiRoutes = require("./controllers/registrationController");
const htmlRoutes = require("./controllers/htmlController");
app.use("/api.registration", registrationApiRoutes);
app.use(htmlRoutes);
// app.use('/', routes);

// app.get('/', (req,res)=>{
//     res.send('homepage');
// });

// app.post('/api.family.info', (req,res)=>{
//     db.FamilyInfo.create({
//         guardian_first_name: req.body.guardian_first_name, 
//         guardian_last_name: req.body.guardian_last_name, 
//         address_street: req.body.address_street, 
//         address_city: req.body.address_city, 
//         address_state: req.body.address_state, 
//         address_zip: req.body.address_zip, 
//         phone_cell: req.body.phone_cell, 
//         phone_home: req.body.phone_home, 
//         phone_work: req.body.phone_work, 
//         phone_work_extension: req.body.phone_work_extension, 
//         email: req.body.email, 
//         emergency_contact_1_name: req.body.emergency_contact_1_name, 
//         emergency_contact_1_phone: req.body.emergency_contact_1_phone, 
//         emergency_contact_1_relationship: req.body.emergency_contact_1_relationship, 
//         emergency_contact_2_name: req.body.emergency_contact_2_name, 
//         emergency_contact_2_phone: req.body.emergency_contact_2_phone, 
//         emergency_contact_2_relationship: req.body.emergency_contact_2_relationship, 
//         contact_for_volunteer: req.body.contact_for_volunteer,
        
//         RegistrationId: req.body.RegistrationId
//     }).then(newFamilyInfo => {
//         res.status(200).json(newFamilyInfo);
//     })
    
    
// });
// app.get('/api.family.info', (req,res)=>{
//     db.FamilyInfo.findAll().then( dbFamilyInfo=> {
//         res.json(dbFamilyInfo);
//     })
// });


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});