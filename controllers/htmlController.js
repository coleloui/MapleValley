const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/role", (req, res) => {
    if (req.session.user) {
        var userData = {
            user: req.session.user
        }
        res.render("role", userData);
    } else {
        res.redirect("/")
    }

});

router.get("/health", (req, res) => {
    if (req.session.user) {


        // the registration table id that will tie to health history

        console.log(req.query.role)
        const newObj = { user: req.session.user };
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
    }
    else {
        res.redirect("/")
    }
});

router.get("/registration", (req, res) => {
    if (req.session.user) {

        const newObj = { user: req.session.user };
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
    }
    else {
        res.redirect("/")
    }
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
        db.Registration.findOne({
            where: {
                id: req.params.id
            },
            include: [db.HealthHistory, db.VolunteerInfo]

        })
            .then(results => {
                // const register = {data: results};
                // console.log(register);
                console.log(results);
                res.render("managerCamper", results);

            });

    });



    module.exports = router;