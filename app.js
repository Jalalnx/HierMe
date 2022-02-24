const express = require("express")
var bodyParser = require("body-parser");
const morgan = require('morgan'); //middewear
const OrgRouter = require("./Routes/org.routes")
const userRoutes = require("./Routes/user.routes")

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


app.use(bodyParser.urlencoded({
    extended: true
}));

//register view engine and the app lisiner
app.set('view engine', 'ejs');
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

//Middleware & static files 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use("/org", OrgRouter)
app.use("/user", userRoutes)