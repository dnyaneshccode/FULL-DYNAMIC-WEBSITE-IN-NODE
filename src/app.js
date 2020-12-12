const express = require("express");
require("./db/conn");
const User = require("./models/usermessage");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

// Set the path.
 const staticpath = path.join(__dirname, "../public");
 const templatespath = path.join(__dirname, "../templates/views");
 const partialspath = path.join(__dirname, "../templates/partials");

// Middleware.
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));
app.set("views", templatespath);
app.set("view engine", "hbs")
hbs.registerPartials(partialspath)

// Routing.
app.get("/", (req, res) => {
    res.render("index");

})

app.post("/contact", async(req, res) => {
    try{
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");

    }catch(err){
        res.status(500).send(err);
    }


})
app.get("/service", (req, res) => {
    res.render("contact");

})
app.get("/portfolio", (req, res) => {
    res.render("contact");

})
app.get("/about", (req, res) => {
    res.render("contact");

})

app.listen(port, ()=>{
    console.log(`listening on port no ${port}`);
})