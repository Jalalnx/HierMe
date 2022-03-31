const uploadFile = require("../middelware/upload");
const db = require("../models/database")


const upload = async(req, res) => {
    try {
        await uploadFile(req, res);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        const employmentApplications = await db.EmploymentApplications.create({
            status: 0,
            userId: req.body.userId,
            jobId: req.body.jobId,

        });

        const meta = await db.attachments.create({
            path: "/files/" + req.file.originalname,
             description:req.body.description,
            EmploymentApplicationId: req.body.userId
            
        })
        res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
            "error": false,
            "appl": employmentApplications,
            meta

        });
    } catch (err) {


        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};
const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }
        let fileInfos = [];
        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });
        res.status(200).send(fileInfos);
    });
};
const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};
module.exports = {
    upload,
    getListFiles,
    download,
};