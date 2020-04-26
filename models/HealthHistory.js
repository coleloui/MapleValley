module.exports = function (sequelize, DataTypes) {
  var HealthHistory = sequelize.define("HealthHistory", {
    immunization_utd: DataTypes.BOOLEAN,
    ci_asthma: DataTypes.BOOLEAN,
    ci_blood_disorder: DataTypes.BOOLEAN,
    ci_diabetes: DataTypes.BOOLEAN,
    ci_ear_infection: DataTypes.BOOLEAN,
    ci_heart: DataTypes.BOOLEAN,
    ci_hypertension: DataTypes.BOOLEAN,
    ci_muskuloskeletal_disorder: DataTypes.BOOLEAN,
    ci_seizures: DataTypes.BOOLEAN,
    ill_exposed: DataTypes.BOOLEAN,
    ill_prolonged: DataTypes.BOOLEAN,
    ill_medication: DataTypes.BOOLEAN,
    inj_physical_restriction: DataTypes.BOOLEAN,
    inj_recent_hospital_er: DataTypes.BOOLEAN,
    inj_recent_injury_fracture: DataTypes.BOOLEAN,
    inj_recent_surgery: DataTypes.BOOLEAN,
    ci_ill_inj_detail: DataTypes.STRING,
    all_animals: DataTypes.BOOLEAN,
    all_foods: DataTypes.BOOLEAN,
    all_hayfever: DataTypes.BOOLEAN,
    all_insect_stings: DataTypes.BOOLEAN,
    all_medications_drugs: DataTypes.BOOLEAN,
    all_plants: DataTypes.BOOLEAN,
    all_pollen: DataTypes.BOOLEAN,
    all_detail: DataTypes.STRING,
    ohc_bedwetting: DataTypes.BOOLEAN,
    ohc_constipation: DataTypes.BOOLEAN,
    ohc_emotional_disturbance: DataTypes.BOOLEAN,
    ohc_fainting: DataTypes.BOOLEAN,
    ohc_hearing_impairment: DataTypes.BOOLEAN,
    ohc_menstrual_cramps: DataTypes.BOOLEAN,
    ohc_motion_sickness: DataTypes.BOOLEAN,
    ohc_nosebleeds: DataTypes.BOOLEAN,
    ohc_sickle_cell: DataTypes.BOOLEAN,
    ohc_sleep_disturbances: DataTypes.BOOLEAN,
    ohc_special_diet_regime: DataTypes.BOOLEAN,
    ohc_vision_impairment: DataTypes.BOOLEAN,
    ohc_detail: DataTypes.STRING,
    other_concern: DataTypes.STRING, // add to hbs or remove from table?

    camp_administered_rx: DataTypes.STRING,
    aspirin: DataTypes.BOOLEAN,
    benadryl: DataTypes.BOOLEAN,
    dramamine: DataTypes.BOOLEAN,
    ibuprofen: DataTypes.BOOLEAN,
    imodium: DataTypes.BOOLEAN,
    pepto_bismol: DataTypes.BOOLEAN,
    robitussin: DataTypes.BOOLEAN,
    sudafed: DataTypes.BOOLEAN,
    tums: DataTypes.BOOLEAN,
    tylenol: DataTypes.BOOLEAN,
    ont_neosporin: DataTypes.BOOLEAN,
    ont_sunscreen: DataTypes.BOOLEAN,
    ont_other: DataTypes.STRING, // add to hbs or remove from table?
    ont_detail: DataTypes.STRING, // add to hbs or remove from table?
  });

  HealthHistory.associate = function (models) {
    HealthHistory.belongsTo(models.Registration);
  };

  return HealthHistory;
};
