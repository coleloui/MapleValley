module.exports = function (sequelize, DataTypes) {
    var MedicationPermit = sequelize.define('MedicationPermit',{

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
        ont_other: DataTypes.STRING,  // add to hbs
        ont_detail: DataTypes.STRING // add to hbs

    


    });

    MedicationPermit.associate = function(models){
        MedicationPermit.belongsTo(models.Registration)
    }

    return MedicationPermit;
}