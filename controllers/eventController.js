const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Event.findAll().then((dbEvent) => {
    res.json(dbEvent);
  });
});

router.post("/", (req, res) => {
  db.Event.create({
    name: req.body.name,
    venue_name: req.body.venue_name,
    venue_address: req.body.venue_address,
    venue_city: req.body.venue_city,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    contact_name: req.body.contact_name,
    contact_email: req.body.contact_email,
  }).then((newEvent) => {
    res.status(200).json(newEvent);
  });
});

router
  .route("/:id")
  .get((req, res) => {
    db.Event.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbEvent) => {
      res.json(dbEvent);
    });
  })
  .put((req, res) => {
    db.Event.update(
      {
        name: req.body.name,
        venue_name: req.body.venue_name,
        venue_address: req.body.venue_address,
        venue_city: req.body.venue_city,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        contact_name: req.body.contact_name,
        contact_email: req.body.contact_email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((updatedDbEvent) => {
      res.status(200).json(updatedDbEvent);
    });
  })
  .delete((req, res) => {
    db.Event.destroy({
      where: {
        id: req.params.id,
      },
    }).then((deletedEvent) => {
      res.status(200).json(deletedEvent);
    });
  });

module.exports = router;
