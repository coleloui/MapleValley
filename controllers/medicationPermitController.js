const express = require("express");
const router = express.Router();
const db = require("../models");


router.get('/', (req,res)=>{
    db.MedicationPermit.findAll().then( dbMedicationPermit=> {
             res.json(dbMedicationPermit);
    })
});

router.post('/', (req,res)=>{
    
    const trueString = "1";
    const falseString = "0";

    const canHaveAspirin = req.body.aspirin_yes === "on" ? trueString : falseString;
    const canHaveBenadryl = req.body.benadryl_yes === "on" ? trueString : falseString;
    const canHaveDramamine = req.body.dramamine_yes === "on" ? trueString : falseString;
    const canHaveIbuprofen = req.body.ibuprofen_yes === "on" ? trueString : falseString;
    const canHaveImodium = req.body.imodium_yes === "on" ? trueString : falseString;
    const canHavePeptoBismol = req.body.pepto_bismol_yes === "on" ? trueString : falseString;
    const canHaveRobitussin = req.body.robitussin_yes === "on" ? trueString : falseString;
    const canHaveSudafed = req.body.sudafed_yes === "on" ? trueString : falseString;
    const canHaveTums = req.body.tums_yes === "on" ? trueString : falseString;
    const canHaveTylenol = req.body.tylenol_yes === "on" ? trueString : falseString;
    const canHaveNeosporin = req.body.neosporin_yes === "on" ? trueString : falseString;
    const canHaveSunscreen = req.body.sunscreen_yes === "on" ? trueString : falseString;

    const medicationPermitObj = {
        camp_administered_rx: req.body.camp_administered_rx, 
        aspirin: canHaveAspirin, 
        benadryl: canHaveBenadryl, 
        dramamine: canHaveDramamine, 
        ibuprofen: canHaveIbuprofen, 
        imodium: canHaveImodium, 
        pepto_bismol: canHavePeptoBismol, 
        robitussin: canHaveRobitussin, 
        sudafed: canHaveSudafed, 
        tums: canHaveTums, 
        tylenol: canHaveTylenol, 
        ont_neosporin: canHaveNeosporin, 
        ont_sunscreen: canHaveSunscreen, 
        ont_other: req.body.ont_other , 
        ont_detail: req.body.ont_detail ,
        RegistrationId: req.body.RegistrationId
    }
    db.MedicationPermit.create(medicationPermitObj)
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