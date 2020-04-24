const express = require("express");
const router = express.Router();
const db = require("../models");


router.get('/', (req,res)=>{ 
    
    db.VolunteerInfo.findAll().then( dbVolunteerInfo=> {
             res.json(dbVolunteerInfo);
    })
});

router.post('/', (req,res)=>{
    db.VolunteerInfo.create({
        camp_name: req.body.camp_name , 
        sweatshirt_size: req.body.sweatshirt_size , 
        sweatshirt_style: req.body.sweatshirt_style , 
        camp_unit: req.body.camp_unit , 
        background_check_complete: req.body.background_check_complete,
        RegistrationId: req.body.RegistrationId

    })
    .then(newVolunteerInfo => {
        res.status(200).json(newVolunteerInfo);
    })
        

});

router.route("/:id").get((req,res)=>{
    db.VolunteerInfo.findOne({
        where:{
            id:req.params.id
        }
    }).then(dbVolunteerInfo=>{
        res.json(dbVolunteerInfo)
    })
}).put((req,res)=>{
    db.VolunteerInfo.update({
        camp_name: req.body.camp_name , 
        sweatshirt_size: req.body.sweatshirt_size , 
        sweatshirt_style: req.body.sweatshirt_style , 
        camp_unit: req.body.camp_unit , 
        background_check_complete: req.body.background_check_complete,
        RegistrationId: req.body.RegistrationId
    },{
        where:{
            id:req.params.id
        }
    }).then(updatedDbVolunteerInfo=>{
        res.status(200).json(updatedDbVolunteerInfo);
    })
}).delete((req,res)=>{
    db.VolunteerInfo.destroy({
        where:{
            id:req.params.id
        }
    }).then(deletedVolunteerInfo=>{
        res.status(200).json(deletedVolunteerInfo);
    })
})




module.exports = router;