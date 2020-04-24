const express = require("express");
const router = express.Router();
const db = require("../models");



router.get('/', (req, res) => {
    db.HealthHistory.findAll().then(dbHealthHistory => {
        res.json(dbHealthHistory);
    })
});

router.post('/register/:id', (req, res) => {
    const trueString = "1";
    const falseString = "0";

    console.log("========================================")
    console.log(req.body);
    console.log("========================================")
    console.log(req.params.id);
    console.log("========================================")

    const healthHistoryObj = {
        immunization_utd: req.body.immunization_utd === "yes" ? trueString : falseString,
        ci_asthma: req.body.ci_asthma === "yes" ? trueString : falseString,
        ci_blood_disorder: req.body.ci_blood_disorder === "yes" ? trueString : falseString,
        ci_diabetes: req.body.ci_diabetes === "yes" ? trueString : falseString,
        ci_ear_infection: req.body.ci_ear_infection === "yes" ? trueString : falseString,
        ci_heart: req.body.ci_heart === "yes" ? trueString : falseString,
        ci_hypertension: req.body.ci_hypertension === "yes" ? trueString : falseString,
        ci_muskuloskeletal_disorder: req.body.ci_muskuloskeletal_disorder === "yes" ? trueString : falseString,
        ci_seizures: req.body.ci_seizures === "yes" ? trueString : falseString,
        ill_exposed: req.body.ill_exposed === "yes" ? trueString : falseString,
        ill_prolonged: req.body.ill_prolonged === "yes" ? trueString : falseString,
        ill_medication: req.body.ill_medication === "yes" ? trueString : falseString,
        inj_physical_restriction: req.body.inj_physical_restriction === "yes" ? trueString : falseString,
        inj_recent_hospital_er: req.body.inj_recent_hospital_er === "yes" ? trueString : falseString,
        inj_recent_injury_fracture: req.body.inj_recent_injury_fracture === "yes" ? trueString : falseString,
        inj_recent_surgery: req.body.inj_recent_surgery === "yes" ? trueString : falseString,
        ci_ill_inj_detail: req.body.ci_ill_inj_detail,
        all_animals: req.body.all_animals === "yes" ? trueString : falseString,
        all_foods: req.body.all_foods === "yes" ? trueString : falseString,
        all_hayfever: req.body.all_hayfever === "yes" ? trueString : falseString,
        all_insect_stings: req.body.all_insect_stings === "yes" ? trueString : falseString,
        all_medications_drugs: req.body.all_medications_drugs === "yes" ? trueString : falseString,
        all_plants: req.body.all_plants === "yes" ? trueString : falseString,
        all_pollen: req.body.all_pollen === "yes" ? trueString : falseString,
        all_detail: req.body.all_detail,
        ohc_bedwetting: req.body.ohc_bedwetting === "yes" ? trueString : falseString,
        ohc_constipation: req.body.ohc_constipation === "yes" ? trueString : falseString,
        ohc_emotional_disturbance: req.body.ohc_emotional_disturbance === "yes" ? trueString : falseString,
        ohc_fainting: req.body.ohc_fainting === "yes" ? trueString : falseString,
        ohc_hearing_impairment: req.body.ohc_hearing_impairment === "yes" ? trueString : falseString,
        ohc_menstrual_cramps: req.body.ohc_menstrual_cramps === "yes" ? trueString : falseString,
        ohc_motion_sickness: req.body.ohc_motion_sickness === "yes" ? trueString : falseString,
        ohc_nosebleeds: req.body.ohc_nosebleeds === "yes" ? trueString : falseString,
        ohc_sickle_cell: req.body.ohc_sickle_cell === "yes" ? trueString : falseString,
        ohc_sleep_disturbances: req.body.ohc_sleep_disturbances === "yes" ? trueString : falseString,
        ohc_special_diet_regime: req.body.ohc_special_diet_regime === "yes" ? trueString : falseString,
        ohc_vision_impairment: req.body.ohc_vision_impairment === "yes" ? trueString : falseString,
        ohc_detail: req.body.ohc_detail,
        //other_concern: req.body.other_concern, // No question...is this really needed?

        camp_administered_rx: req.body.camp_administered_rx,
        aspirin: req.body.aspirin === "yes" ? trueString : falseString,
        benadryl: req.body.benadryl === "yes" ? trueString : falseString,
        dramamine: req.body.dramamine === "yes" ? trueString : falseString,
        ibuprofen: req.body.ibuprofen === "yes" ? trueString : falseString,
        imodium: req.body.imodium === "yes" ? trueString : falseString,
        pepto_bismol: req.body.pepto_bismol === "yes" ? trueString : falseString,
        robitussin: req.body.robitussin === "yes" ? trueString : falseString,
        sudafed: req.body.sudafed === "yes" ? trueString : falseString,
        tums: req.body.tums === "yes" ? trueString : falseString,
        tylenol: req.body.tylenol === "yes" ? trueString : falseString,
        ont_neosporin: req.body.ont_neosporin === "yes" ? trueString : falseString,
        ont_sunscreen: req.body.ont_sunscreen === "yes" ? trueString : falseString,

        // cannot get rid of the : and still pass the page and regId around correctly, so I admit defeat and just strip the : here.
        RegistrationId: req.params.id.replace(":", "")
    }

    db.HealthHistory.create(healthHistoryObj)
        .then(newHealthHistory => {
            console.log(newHealthHistory);

            res.redirect("/profile");
            // res.status(200).json(newHealthHistory);
        })


});

router.route("/:id").get((req, res) => {
    db.HealthHistory.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbHealthHistory => {
        res.json(dbHealthHistory)
    })
}).put((req, res) => {
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
        ci_ill_inj_detail: req.body.in_ill_inj_detail,
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
        ohc_fainting: req.body.ohc_fainting,
        ohc_hearing_impairment: req.body.ohc_hearing_impairment,
        ohc_menstrual_cramps: req.body.ohc_menstrual_cramps,
        ohc_motion_sickness: req.body.ohc_motion_sickness,
        ohc_nosebleeds: req.body.ohc_nosebleeds,
        ohc_sickle_cell: req.body.ohc_sickle_cell,
        ohc_sleep_disturbances: req.body.ohc_sleep_disturbances,
        ohc_special_diet_regime: req.body.ohc_special_diet_regime,
        ohc_vision_impairment: req.body.ohc_vision_impairment,
        ohc_detail: req.body.ohc_detail,
        other_concern: req.body.other_concern,

        camp_administered_rx: req.body.camp_administered_rx,
        aspirin: req.body.aspirin,
        benadryl: req.body.benadryl,
        dramamine: req.body.dramamine,
        ibuprofen: req.body.ibuprofen,
        imodium: req.body.imodium,
        pepto_bismol: req.body.pepto_bismol,
        robitussin: req.body.robitussin,
        sudafed: req.body.sudafed,
        tums: req.body.tums,
        tylenol: req.body.tylenol,
        ont_neosporin: req.body.ont_neosporin,
        ont_sunscreen: req.body.ont_sunscreen,
        ont_other: req.body.ont_other,
        ont_detail: req.body.ont_detail,

        RegistrationId: req.body.RegistrationId
    }, {
        where: {
            id: req.params.id
        }
    }).then(updatedDbHealthHistory => {
        res.status(200).json(updatedDbHealthHistory);
    })
}).delete((req, res) => {
    db.HealthHistory.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedHealthHistory => {
        res.status(200).json(deletedHealthHistory);
    })
})




module.exports = router;