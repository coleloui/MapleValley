const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/role", (req, res) => {
    res.render("role");
});

router.get("/health", (req, res) => {
    const newObj = {};

    // the registration table id that will tie to health history
    newObj.regId = req.query.regId;

    switch (req.query.role) {
        case "volunteer":
            newObj.volunteer = true;
            break;

        case "childVolunteer":
            newObj.childVolunteer = true;
            break;
        case "participant":
            newObj.participant = true;
            break;
        case "boy":
            newObj.boy = true;
            break;

        default:
            break;
    }
    console.log(newObj);
    res.render("health", newObj);
});

router.get("/registration", (req, res) => {
    const newObj = {};

    // passing along the registration role-type that was picked on the profile page
    // needed to pass it along so health history will render appropriately
    newObj.regRole = req.query.role;

    switch (req.query.role) {
        case "volunteer":
            newObj.volunteer = true;
            break;
        case "childVolunteer":
            newObj.childVolunteer = true;
            break;
        case "participant":
            newObj.participant = true;
            break;
        case "boy":
            newObj.boy = true;
            break;

        default:
            break;
    }
    console.log(newObj);
    res.render("registration", newObj);
});

router.get("/managerprofile", (req, res) => {
    res.render("managerProfile");
});

router.get("/grade/:id", (req, res) => {
    db.Registration.findAll({
        where: {
            grade_in_school: req.params.id
        }
    }).then(results => {
        const register = { data: results };
        console.log(register);
        console.log(results);
        res.render("managerGrade", register);
    });
});

router.get("/camper/:id", (req, res) => {
    console.log("=====================get camper/:id ==============================")
    console.log("===================================================")
    console.log(req.params.id);
    db.Registration.findOne({
        where: {
            id: req.params.id
        },
        include: [db.HealthHistory, db.VolunteerInfo]

    })
        .then(results => {
            // const register = {data: results};
            // console.log(register);
            console.log("=====================results==============================")
            console.log(results);
            res.render("managerCamper", results);

        });

});



module.exports = router;