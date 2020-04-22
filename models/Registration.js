module.exports = function (sequelize, DataTypes) {
    var Registration = sequelize.define('Registration',{

    
        first_year: DataTypes.BOOLEAN,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        grade_in_school: DataTypes.STRING,
        t_shirt_size: DataTypes.STRING,
        buddy_request: DataTypes.STRING,
        registered_girl_scout: DataTypes.BOOLEAN,
        registration_confirmed: DataTypes.BOOLEAN,
        troop_number: DataTypes.INTEGER, 
        service_unit_number: DataTypes.INTEGER,
        authorized_release_names: DataTypes.TEXT,

        guardian_first_name: DataTypes.STRING, 
        guardian_last_name: DataTypes.STRING, 
        address_street: DataTypes.STRING, 
        address_city: DataTypes.STRING, 
        address_state: DataTypes.STRING, 
        address_zip: DataTypes.INTEGER, 
        phone_cell: DataTypes.STRING, 
        phone_home: DataTypes.STRING, 
        phone_work: DataTypes.STRING, 
        phone_work_extension: DataTypes.STRING, 
        email: DataTypes.STRING, 
        emergency_contact_1_name: DataTypes.STRING, 
        emergency_contact_1_phone: DataTypes.STRING, 
        emergency_contact_1_relationship: DataTypes.STRING, 
        emergency_contact_2_name: DataTypes.STRING, 
        emergency_contact_2_phone: DataTypes.STRING, 
        emergency_contact_2_relationship: DataTypes.STRING, 
        contact_for_volunteer: DataTypes.BOOLEAN
    });

    Registration.associate = function(models){
        // Registration.hasMany(models.FamilyInfo, {onDelete: "cascade"});
        Registration.hasMany(models.MedicationPermit, {onDelete: "cascade"});
        Registration.hasMany(models.HealthHistory, {onDelete: "cascade"});
        Registration.hasMany(models.VolunteerInfo, {onDelete: "cascade"});
        Registration.belongsTo(models.Event)
        // Registration.hasMany(models.Event, {onDelete: "cascade"});
    };

    

    return Registration;
}
