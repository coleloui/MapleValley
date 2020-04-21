module.exports = function (sequelize, DataTypes) {
    var Registration = sequelize.define('Registration',{

    
        first_year: DataTypes.BOOLEAN,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        grade_in_school: DataTypes.STRING,
        t_shirt_size: DataTypes.INTEGER,
        buddy_request: DataTypes.STRING,
        registered_girl_scout: DataTypes.BOOLEAN,
        registration_confirmed: DataTypes.BOOLEAN,
        troop_number: DataTypes.INTEGER, 
        service_unit_number: DataTypes.INTEGER,
        authorized_release_names: DataTypes.TEXT
    });

    Registration.associate = function(models){
        Registration.hasMany(models.FamilyInfo, {onDelete: "cascade"});
        Registration.hasMany(models.MedicationPermit, {onDelete: "cascade"});
        Registration.hasMany(models.HealthHistory, {onDelete: "cascade"});
        Registration.hasMany(models.VolunteerInfo, {onDelete: "cascade"});
        Registration.belongsTo(models.Event)
        // Registration.hasMany(models.Event, {onDelete: "cascade"});
    };

    

    return Registration;
}
