const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/",(req,res)=>{
    res.render("index");
});

router.get("/role",(req,res)=>{
    res.render("role");
});

router.get("/registration",(req,res)=>{
    res.render("registration");
});


module.exports = router;