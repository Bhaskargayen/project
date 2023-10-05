module.exports = (sequelize,Sequelize)=>{
    const user = sequelize.define(
        'users',
        {
            name:{
                type: Sequelize.STRING(255),
                // allowNull: false
            },
            email: {
                type: Sequelize.STRING(255),
                // allowNull: false,
                // unique: true
            },
            password: {
                type: Sequelize.STRING(255),
                // allowNull: false
            },
            phone: {
                type: Sequelize.STRING(255),
                // allowNull: false
            },
            pin: {
                type: Sequelize.STRING(255),
                // allowNull: false
            },
            address: {
                type: Sequelize.STRING(255),
                // allowNull: false
            },
            
        },
        {
            frezeTableName: true,
            caseFile: 'p',
            caseProp: 'C',
            timestamps: true,
        },
    );
    //user.removeAttribute('Id');
    return user;
}