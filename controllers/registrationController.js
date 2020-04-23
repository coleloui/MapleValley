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
    // const canContactForVolunteer = req.body.contact_for_volunteer === "on" ? trueString : falseString;
    // const isFirstYear = req.body.first_year_yes === "on" ? trueString : falseString;
    let birthdate = new Date(`${req.body.birth_month} ${req.body.birth_day}, ${req.body.birth_year}`);

    console.log(birthdate);
    const registrationObj = {

        first_year: isFirstYear, // on reg.hbs
        first_name: req.body.first_name, // on reg.hbs
        last_name: req.body.last_name, // on reg.hbs
        birthdate: birthdate, //req.body.birthdate,  // on reg.hbs as birth_year, birth_day, birth_month
        // grade_in_school: req.body.grade_in_school,
        t_shirt_size: req.body.t_shirt_size, // on reg.hbs
        // buddy_request: req.body.buddy_request,
        registered_girl_scout: req.body.registered_girl_scout,
        registration_confirmed: falseString,
        // troop_number: req.body.troop_number,
        // service_unit_number: req.body.service_unit_number,
        // authorized_release_names: req.body.authorized_release_names,

        // guardian_first_name: req.body.guardian_first_name, 
        // guardian_last_name: req.body.guardian_last_name, 
        address_street: req.body.address_street,  // on reg.hbs
        address_city: req.body.address_city,  // on reg.hbs
        address_state: req.body.address_state,  // on reg.hbs
        address_zip: req.body.address_zip,  // on reg.hbs
        phone_cell: req.body.phone_cell  // on reg.hbs
        // phone_home: req.body.phone_home, 
        // phone_work: req.body.phone_work, 
        // phone_work_extension: req.body.phone_work_extension, 
        // email: req.body.email, 
        // emergency_contact_1_name: req.body.emergency_contact_1_name, 
        // emergency_contact_1_phone: req.body.emergency_contact_1_phone, 
        // emergency_contact_1_relationship: req.body.emergency_contact_1_relationship, 
        // emergency_contact_2_name: req.body.emergency_contact_2_name, 
        // emergency_contact_2_phone: req.body.emergency_contact_2_phone, 
        // emergency_contact_2_relationship: req.body.emergency_contact_2_relationship, 
        // contact_for_volunteer: canContactForVolunteer
    };

    console.log(registrationObj);

    db.Registration.create(registrationObj)
        .then(newRegistration => {
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