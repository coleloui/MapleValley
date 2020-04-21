module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('Event',{

        name: DataTypes.STRING, 
        venue_name: DataTypes.STRING, 
        venue_address: DataTypes.STRING, 
        venue_city: DataTypes.STRING, 
        start_date: DataTypes.DATE, 
        end_date: DataTypes.DATE, 
        contact_name: DataTypes.STRING, 
        contact_email: DataTypes.STRING

    


    });


    Event.associate = function(models){
        Event.hasMany(models.Registration, {onDelete: "cascade"})
    }

    return Event;
}
