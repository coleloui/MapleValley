module.exports = function (sequelize, DataTypes) {
    var VolunteerInfo = sequelize.define('VolunteerInfo',{

        camp_name: DataTypes.STRING, 
        sweatshirt_size: DataTypes.STRING, 
        sweatshirt_style: DataTypes.STRING, 
        camp_unit: DataTypes.STRING, 
        background_check_complete: DataTypes.BOOLEAN

    


    });

    VolunteerInfo.associate = function(models){
        VolunteerInfo.belongsTo(models.Registration)
    }

    return VolunteerInfo;
}
