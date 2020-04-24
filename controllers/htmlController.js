const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/",(req,res)=>{
    res.render("index");
});

router.get("/role",(req,res)=>{
    res.render("role");
});

router.get("/health",(req,res)=>{
    console.log("==================================================")
    console.log(req.query.role)
    console.log(req.query.regId);
    console.log("==================================================")

    const regId = req.query.regId;
    const newObj = {};
    newObj.regId = regId;
            
    switch (req.query.role) {
        case "childVolunteer":
            newObj.childVolunteer=true;
            break;
        case "participant":
            newObj.participant=true;
            break;
        case "boy":
            newObj.boy=true;
            break;
    
        default:
            break;
    }
    console.log(newObj);
    res.render("health",newObj);
});

router.get("/registration",(req,res)=>{
    const newObj = {};
    switch (req.query.role) {
        case "volunteer":
            newObj.volunteer=true;
            break;
        case "childVolunteer":
            newObj.childVolunteer=true;
            break;
        case "participant":
            newObj.participant=true;
            break;
        case "boy":
            newObj.boy=true;
            break;
    
        default:
            break;
    }
    console.log(newObj);
    res.render("registration",newObj);
});


module.exports = router;