var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
require("dotenv").config();

// Requiring our models for syncing
var db = require("./models");
const session = require("express-session");
var SequelizeStore = require("connect-session-sequelize")(session.Store);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({
      db: db.sequelize,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7200000,
    },
  })
);

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const registrationApiRoutes = require("./controllers/registrationController");
// const familyInfoApiRoutes = require("./controllers/familyInfoController");
const healthHistoryApiRoutes = require("./controllers/healthHistoryController");
// const medicationPermitApiRoutes = require("./controllers/medicationPermitController");
const volunteerInfoApiRoutes = require("./controllers/volunteerInfoController");
const eventApiRoutes = require("./controllers/eventController");
const userRoutes = require("./controllers/userController");
const htmlRoutes = require("./controllers/htmlController");

app.use("/api.registration", registrationApiRoutes);
// app.use("/api.family.info", familyInfoApiRoutes);
app.use("/api.health.history", healthHistoryApiRoutes);
// app.use("/api.medication.permit", medicationPermitApiRoutes);
app.use("/api.volunteer.info", volunteerInfoApiRoutes);
app.use("/api.event", eventApiRoutes);
app.use(userRoutes);

app.use(htmlRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize
  .sync({ force: false })
  .then(function () {
    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    });
  })
  .catch((err) => {
    throw err;
  });
