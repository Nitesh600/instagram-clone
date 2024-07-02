const express = require("express");
const app = express();
const {render} = require("ejs");
const port = 3000;
const path = require("path");
const { error } = require("console");


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public/html")));
app.use(express.static(path.join(__dirname,"public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/posts",(req,res)=>{
res.render("posts.ejs");
});
app.get("/reels", (req,res)=>{
    res.render("reels.ejs");
});
app.get("/saved", (req,res)=>{
    res.render("saved.ejs");
});
app.get("/tagged", (req,res)=>{
    res.render("tagged.ejs");
});
app.get("/blog",(req,res)=>{
    res.render("blog.ejs");
});
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
app.get("/location",(req,res)=>{
    res.render("location.ejs");
});
if(error, (req,res)=>{
    res.render("error.ejs");
});




app.listen(port,()=>{
    console.log(`app is listening to the port ${port}`);
});
