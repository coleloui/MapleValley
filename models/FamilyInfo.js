
module.exports = function (sequelize, DataTypes) {
    var FamilyInfo = sequelize.define('FamilyInfo',{

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

    FamilyInfo.associate = function(models){
        FamilyInfo.belongsTo(models.Registration)
    }

    return FamilyInfo;
}
