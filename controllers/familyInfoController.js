const express = require("express");
const router = express.Router();
const db = require("../models");



router.get('/', (req,res)=>{
    db.FamilyInfo.findAll().then( dbFamilyInfo=> {
             res.json(dbFamilyInfo);
    })
});

router.post('/', (req,res)=>{
    db.FamilyInfo.create({
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
        RegistrationId: req.body.RegistrationId

    })
    .then(newFamilyInfo => {
        res.status(200).json(newFamilyInfo);
    })
        

});

router.route("/:id").get((req,res)=>{
    db.FamilyInfo.findOne({
        where:{
            id:req.params.id
        }
    }).then(dbFamilyInfo=>{
        res.json(dbFamilyInfo)
    })
}).put((req,res)=>{
    db.FamilyInfo.update({
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
        RegistrationId: req.body.RegistrationId
    },{
        where:{
            id:req.params.id
        }
    }).then(updatedDbFamilyInfo=>{
        res.status(200).json(updatedDbFamilyInfo);
    })
}).delete((req,res)=>{
    db.FamilyInfo.destroy({
        where:{
            id:req.params.id
        }
    }).then(deletedFamilyInfo=>{
        res.status(200).json(deletedFamilyInfo);
    })
})




module.exports = router;