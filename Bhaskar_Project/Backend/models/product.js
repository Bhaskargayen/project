module.exports = (sequelize, Sequelize)=>{
    const product = sequelize.define(
        'products',
        {
            p_name:{
                type: Sequelize.STRING(255),
            },
            p_price: {
                type: Sequelize.STRING(255),
                // allowNull: false,
            },
            p_quantity: {
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
    return product;
}