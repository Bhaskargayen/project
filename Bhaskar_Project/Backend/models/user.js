module.exports = (sequelize, Sequelize)=>{
    const user = sequelize.define(
        'users',
        {
            name:{
                type: Sequelize.STRING(255),
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
            role: {
                type: Sequelize.STRING(255),
                defaultValue:'user'
            },
        },
        {
            frezeTableName: true,
            caseFile: 'p',
            caseProp: 'C',
            timestamps: true,
        },
    );
    return user;
}