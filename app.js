const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan'); //middewear
const OrgRouter = require("./Routes/institutes.routes")
const userRoutes = require("./Routes/user.routes")
const JobRoutes = require("./Routes/JobRoutes.routes")
const cloudinary = require('cloudinary');
const db = require("./models/database");
const chalkAnimation = require('chalk-animation');
const Sequelize = require("sequelize");
async function neon() {
    const tt = chalkAnimation.neon("All models were synchronized successfully.")
}
async function karaoke() {
    const tt = chalkAnimation.neon("have a nice jurny")
}
// // db.sequelize.sync();
// db.sequelize.sync({ force: true })
//     .then(() => {
//         neon();
//         karaoke()
//     }).catch((err) => 
//     {
//         console.warn(err);
//         return res.status(500).send('تأكد من ان جهازك متصل بأنترنت او قم بمراجعة مزود الخدمه')
//     });
const app = express();
var corsOptions = {
    origin: "http://192.168.8.102"
    
};
// 192.168.137.1

///check if db connected or not
// db.authenticate()
//     .then(() => console.log('Database connected...'))
//     .catch((error) => console.log('Error :' +error.message));
    
app.use(cors(corsOptions));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Connection', 'keep-alive');
    next();
});

cloudinary.config({
    cloud_name: 'duia5t6yl',
    api_key:'259715186775216',
    api_secret: 'P0k93MRBV2CE4yX74d3zQmCBlYk'
});



app.use(bodyParser.json({ limit: '1000mb' }))
app.use(bodyParser.urlencoded({
        limit: '5mb',
        extended: true,
    }))

    // parse requests of content-type - application/json
app.use(express.json());



//register view engine and the app lisiner
app.set('view engine', 'ejs');

//set the default port for express
const PORT = process.env.PORT || 8000;

async function init() { const tt = chalkAnimation.rainbow("Server running on port " + PORT) }
app.listen(PORT, () => {
        init()
    })
    //Middleware & static files 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.use("/institutes", OrgRouter)
app.use("/user", userRoutes);
app.use("/job", JobRoutes);