const express = require("express");
const router = express.Router();
const db = require("../models");



router.get('/', (req,res)=>{
    db.HealthHistory.findAll().then( dbHealthHistory=> {
             res.json(dbHealthHistory);
    })
});

router.post('/', (req,res)=>{
    db.HealthHistory.create({
        immunization_utd: req.body.immunization_utd,
        ci_asthma: req.body.ci_asthma,
        ci_blood_disorder: req.body.ci_blood_disorder,
        ci_diabetes: req.body.ci_diabetes, 
        ci_ear_infection: req.body.ci_ear_infection, 
        ci_heart: req.body.ci_heart, 
        ci_hypertension: req.body.ci_hypertension, 
        ci_muskuloskeletal_disorder: req.body.ci_muskuloskeletal_disorder, 
        ci_seizures: req.body.ci_seizures, 
        ill_exposed: req.body.ill_exposed, 
        ill_prolonged: req.body.ill_prolonged, 
        ill_medication: req.body.ill_medication, 
        inj_physical_restriction: req.body.inj_physical_restriction, 
        inj_recent_hospital_er: req.body.inj_recent_hospital_er, 
        inj_recent_injury_fracture: req.body.inj_recent_injury_fracture, 
        inj_recent_surgery: req.body.inj_recent_surgery, 
        in_ill_inj_detail: req.body.in_ill_inj_detail, 
        all_animals: req.body.all_animals, 
        all_foods: req.body.all_foods, 
        all_hayfever: req.body.all_hayfever, 
        all_insect_stings: req.body.all_insect_stings, 
        all_medications_drugs: req.body.all_medications_drugs, 
        all_plants: req.body.all_plants, 
        all_pollen: req.body.all_pollen, 
        all_detail: req.body.all_detail, 
        ohc_bedwetting: req.body.ohc_bedwetting, 
        ohc_constipation: req.body.ohc_constipation, 
        ohc_emotional_disturbance: req.body.ohc_emotional_disturbance, 
        ohc_menstrual_cramps: req.body.ohc_menstrual_cramps, 
        ohc_motion_sickness: req.body.ohc_motion_sickness, 
        ohc_nosebleeds: req.body.ohc_nosebleeds, 
        ohc_sickle_cell: req.body.ohc_sickle_cell, 
        ohc_sleep_disturbances: req.body.ohc_sleep_disturbances, 
        ohc_special_diet_regime: req.body.ohc_special_diet_regime, 
        ohc_vision_impairment: req.body.ohc_vision_impairment, 
        ohc_detail: req.body.ohc_detail, 
        other_concern: req.body.other_concern,
        RegistrationId: req.body.RegistrationId

    })
    .then(newHealthHistory => {
        res.status(200).json(newHealthHistory);
    })
        

});

router.route("/:id").get((req,res)=>{
    db.HealthHistory.findOne({
        where:{
            id:req.params.id
        }
    }).then(dbHealthHistory=>{
        res.json(dbHealthHistory)
    })
}).put((req,res)=>{
    db.HealthHistory.update({
        immunization_utd: req.body.immunization_utd,
        ci_asthma: req.body.ci_asthma,
        ci_blood_disorder: req.body.ci_blood_disorder,
        ci_diabetes: req.body.ci_diabetes, 
        ci_ear_infection: req.body.ci_ear_infection, 
        ci_heart: req.body.ci_heart, 
        ci_hypertension: req.body.ci_hypertension, 
        ci_muskuloskeletal_disorder: req.body.ci_muskuloskeletal_disorder, 
        ci_seizures: req.body.ci_seizures, 
        ill_exposed: req.body.ill_exposed, 
        ill_prolonged: req.body.ill_prolonged, 
        ill_medication: req.body.ill_medication, 
        inj_physical_restriction: req.body.inj_physical_restriction, 
        inj_recent_hospital_er: req.body.inj_recent_hospital_er, 
        inj_recent_injury_fracture: req.body.inj_recent_injury_fracture, 
        inj_recent_surgery: req.body.inj_recent_surgery, 
        in_ill_inj_detail: req.body.in_ill_inj_detail, 
        all_animals: req.body.all_animals, 
        all_foods: req.body.all_foods, 
        all_hayfever: req.body.all_hayfever, 
        all_insect_stings: req.body.all_insect_stings, 
        all_medications_drugs: req.body.all_medications_drugs, 
        all_plants: req.body.all_plants, 
        all_pollen: req.body.all_pollen, 
        all_detail: req.body.all_detail, 
        ohc_bedwetting: req.body.ohc_bedwetting, 
        ohc_constipation: req.body.ohc_constipation, 
        ohc_emotional_disturbance: req.body.ohc_emotional_disturbance, 
        ohc_menstrual_cramps: req.body.ohc_menstrual_cramps, 
        ohc_motion_sickness: req.body.ohc_motion_sickness, 
        ohc_nosebleeds: req.body.ohc_nosebleeds, 
        ohc_sickle_cell: req.body.ohc_sickle_cell, 
        ohc_sleep_disturbances: req.body.ohc_sleep_disturbances, 
        ohc_special_diet_regime: req.body.ohc_special_diet_regime, 
        ohc_vision_impairment: req.body.ohc_vision_impairment, 
        ohc_detail: req.body.ohc_detail, 
        other_concern: req.body.other_concern,
        RegistrationId: req.body.RegistrationId
    },{
        where:{
            id:req.params.id
        }
    }).then(updatedDbHealthHistory=>{
        res.status(200).json(updatedDbHealthHistory);
    })
}).delete((req,res)=>{
    db.HealthHistory.destroy({
        where:{
            id:req.params.id
        }
    }).then(deletedHealthHistory=>{
        res.status(200).json(deletedHealthHistory);
    })
})




module.exports = router;