const express = require("express");
const router = express.Router();
const db = require("../models");


router.get('/', (req,res)=>{
    db.MedicationPermit.findAll().then( dbMedicationPermit=> {
             res.json(dbMedicationPermit);
    })
});

router.post('/', (req,res)=>{
    db.MedicationPermit.create({
        camp_administered_rx: req.body.camp_administered_rx , 
        aspirin: req.body.aspirin , 
        benadryl: req.body.benadryl , 
        dramamine: req.body.dramamine , 
        ibuprofen: req.body.ibuprofen , 
        imodium: req.body.imodium , 
        pepto_bismol: req.body.pepto_bismol , 
        robitussin: req.body.robitussin , 
        sudafed: req.body.sudafed , 
        tums: req.body.tums , 
        tylenol: req.body.tylenol , 
        ont_neosporin: req.body.ont_neosporin , 
        ont_sunscreen: req.body.ont_sunscreen , 
        ont_other: req.body.ont_other , 
        ont_detail: req.body.ont_detail ,
        RegistrationId: req.body.RegistrationId

    })
    .then(newMedicationPermit => {
        res.status(200).json(newMedicationPermit);
    })
        

});

router.route("/:id").get((req,res)=>{
    db.MedicationPermit.findOne({
        where:{
            id:req.params.id
        }
    }).then(dbMedicationPermit=>{
        res.json(dbMedicationPermit)
    })
}).put((req,res)=>{
    db.MedicationPermit.update({
        camp_administered_rx: req.body.camp_administered_rx , 
        aspirin: req.body.aspirin , 
        benadryl: req.body.benadryl , 
        dramamine: req.body.dramamine , 
        ibuprofen: req.body.ibuprofen , 
        imodium: req.body.imodium , 
        pepto_bismol: req.body.pepto_bismol , 
        robitussin: req.body.robitussin , 
        sudafed: req.body.sudafed , 
        tums: req.body.tums , 
        tylenol: req.body.tylenol , 
        ont_neosporin: req.body.ont_neosporin , 
        ont_sunscreen: req.body.ont_sunscreen , 
        ont_other: req.body.ont_other , 
        ont_detail: req.body.ont_detail ,
        RegistrationId: req.body.RegistrationId
    },{
        where:{
            id:req.params.id
        }
    }).then(updatedDbMedicationPermit=>{
        res.status(200).json(updatedDbMedicationPermit);
    })
}).delete((req,res)=>{
    db.MedicationPermit.destroy({
        where:{
            id:req.params.id
        }
    }).then(deletedMedicationPermit=>{
        res.status(200).json(deletedMedicationPermit);
    })
})




module.exports = router;