const express=require("express");
const bodyparser=require("body-parser");
const app=express();
var items=["sleep"];

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/",function(req,res){
  const today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day=today.toLocaleDateString("en-US",options);
  res.render("list",{kindofday:day,item:items})
});

app.post("/",function(req,res){
  var a=req.body.newitem;
  items.push(a);
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("server is running at port 3000");
});
