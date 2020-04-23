const express = require("express");
const router = express.Router();
const db = require("../models");




router.get('/register', (req, res) => {
    db.Registration.findAll().then(dbRegistration => {
        res.json(dbRegistration);
    })
});

router.post('/register', (req, res) => {
    const trueString = "1";
    const falseString = "0";

    const isFirstYear = req.body.first_year_yes === "on" ? trueString : falseString;
    const isRegisteredGS = req.body.registered_girl_scout === "on" ? trueString : falseString;
    // const canContactForVolunteer = req.body.contact_for_volunteer === "on" ? trueString : falseString;
    
    const birthdate = new Date(`${req.body.birth_month} ${req.body.birth_day}, ${req.body.birth_year}`);
    const email = req.body.minorEmail !== undefined ? (req.body.adultEmail + ", " + req.body.minorEmail) : req.body.email;
    const eContact1Name = req.body.emergency_contact_1_first_name + " " + req.body.emergency_contact_1_last_name;
    const eContact2Name = req.body.emergency_contact_2_first_name + " " + req.body.emergency_contact_2_last_name;
    const buddyName = req.body.buddy_first_name + " " + req.body.buddy_last_name;
    
    const ssSize = req.body.sweatshirt_size;
    const ssStyle = req.body.sweatshirt_style;
    console.log("size: " + ssSize);
    console.log("style " + ssStyle);

    const registrationObj = {

        first_year: isFirstYear,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthdate: birthdate, 
        // grade_in_school: req.body.grade_in_school, // not in questions yet
        t_shirt_size: req.body.t_shirt_size,
        buddy_request: buddyName,
        registered_girl_scout: isRegisteredGS,
        registration_confirmed: falseString,
        troop_number: req.body.troop_number,
        service_unit_number: req.body.service_unit_number,
        // authorized_release_names: req.body.authorized_release_names, // not in questions yet

        guardian_first_name: req.body.guardian_first_name,
        guardian_last_name: req.body.guardian_last_name,
        address_street: req.body.address_street,
        address_city: req.body.address_city,
        address_state: req.body.address_state,
        address_zip: req.body.address_zip,
        phone_cell: req.body.phone_cell,
        phone_home: req.body.phone_guardian, // on reg.hbs as phone_guardian. DB name should change
        // phone_work: req.body.phone_work, 
        // phone_work_extension: req.body.phone_work_extension, 
        email: email,
        emergency_contact_1_name: eContact1Name,
        emergency_contact_1_phone: req.body.emergency_contact_1_phone,
        emergency_contact_1_relationship: req.body.emergency_contact_1_relationship,
        emergency_contact_2_name: eContact2Name,
        emergency_contact_2_phone: req.body.emergency_contact_2_phone, 
        emergency_contact_2_relationship: req.body.emergency_contact_2_relationship, 
        contact_for_volunteer: falseString // canContactForVolunteer, not in questions yet
    };

    
    
    // });
    
    console.log(registrationObj);
    
    db.Registration.create(registrationObj)
    .then(newRegistration => {
        // sweatshirt size and style need to go to volunteer table
        // router.post('/', (req,res)=>{
        //     db.VolunteerInfo.create({
        //         camp_name: req.body.camp_name , 
        //         sweatshirt_size: req.body.sweatshirt_size , 
        //         sweatshirt_style: req.body.sweatshirt_style , 
        //         camp_unit: req.body.camp_unit , 
        //         background_check_complete: req.body.background_check_complete,
        //         RegistrationId: req.body.RegistrationId
        
        //     })
        //     .then(newVolunteerInfo => {
        //         res.status(200).json(newVolunteerInfo);
        //     })
            
        
        res.redirect("/profile");
            // res.status(200).json(newRegistration);
        })

});




router.route("/:id").get((req, res) => {
    db.Registration.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbRegistration => {
        res.json(dbRegistration)
    })
}).put((req, res) => {
    db.Registration.update({
        first_year: req.body.first_year,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthdate: req.body.birthdate,
        grade_in_school: req.body.grade_in_school,
        t_shirt_size: req.body.t_shirt_size,
        buddy_request: req.body.buddy_request,
        registered_girl_scout: req.body.registered_girl_scout,
        registration_confirmed: req.body.registration_confirmed,
        troop_number: req.body.troop_number,
        service_unit_number: req.body.service_unit_number,
        authorized_release_names: req.body.authorized_release_names,

        guardian_first_name: req.body.guardian_first_name, 
        guardian_last_name: req.body.guardian_last_name, 
        address_street: req.body.address_street, 
        address_city: req.body.address_city, 
        address_state: req.body.address_state, 
        address_zip: req.body.address_zip, 
        phone_cell: req.body.phone_cell, 
        phone_home: req.body.phone_home, 
        phone_work: req.body.phone_work, 
        phone_work_extension: req.body.phone_work_extension, 
        email: req.body.email, 
        emergency_contact_1_name: req.body.emergency_contact_1_name, 
        emergency_contact_1_phone: req.body.emergency_contact_1_phone, 
        emergency_contact_1_relationship: req.body.emergency_contact_1_relationship, 
        emergency_contact_2_name: req.body.emergency_contact_2_name, 
        emergency_contact_2_phone: req.body.emergency_contact_2_phone, 
        emergency_contact_2_relationship: req.body.emergency_contact_2_relationship, 
        contact_for_volunteer: req.body.contact_for_volunteer,

    },{
        where:{
            id:req.params.id
        }
    }).then(updatedDbRegistration => {
        res.status(200).json(updatedDbRegistration);
    })
}).delete((req, res) => {
    db.Registration.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedRegistration => {
        res.status(200).json(deletedRegistration);
    })
})




module.exports = router;