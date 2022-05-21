module.exports = (sequelize, Sequelize) => {
    const notify = sequelize.define("notify", {
        message: {
            type: Sequelize.TEXT
        },
        viewed: {
            type: Sequelize.BOOLEAN
        },
    });
    return notify;
};