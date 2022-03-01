const express = require("express")
var bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan'); //middewear
const OrgRouter = require("./Routes/institutes.routes")
const userRoutes = require("./Routes/user.routes")
const cloudinary = require('cloudinary');
const db = require("./models/database");

// db.sequelize.sync();
// db.sequelize.sync()
//     .then(() => {
//         console.log("All models were synchronized successfully.");
//     });
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.end(JSON.stringify(req.body, null, 2))
    next();
});

cloudinary.config({
    cloud_name: 'duia5t6yl',
    api_key: '259715186775216',
    api_secret: 'P0k93MRBV2CE4yX74d3zQmCBlYk'
});

app.use(bodyParser.urlencoded({
    extended: true
}));
// parse requests of content-type - application/json
app.use(express.json());

//register view engine and the app lisiner
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
        console.log("Server running on port " + PORT)
    })
    //Middleware & static files 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use("/institutes", OrgRouter)
app.use("/user", userRoutes)