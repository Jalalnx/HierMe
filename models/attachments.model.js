module.exports = (sequelize, Sequelize) => {
    const attachments = sequelize.define("attachments", {

        path: {
            type: Sequelize.TEXT
        }
    });
    return attachments;
};