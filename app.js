var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/todo_app",{useNewUrlParser:true});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine","ejs");

var todoSchema=new mongoose.Schema({
    text:String
});
var todos=mongoose.model("todo",todoSchema);


app.get("/",function(req,res){
    todos.find({},function(err,alltodos){
        if(err){
            console.log(err);
        }else{
            res.render("list",{todos:alltodos});
        }
    })
})
app.post("/add",function(req,res){
    todos.create({text:req.body.todo},function(err,todo){
        if(err){
            console.log(err);
        }else{
            console.log(todo);
            res.redirect("/");
        }
    })
})
app.post("/:id",function(req,res){
    console.log(req.params.id);
    todos.findByIdAndRemove(req.params.id,function(err){
        if(err){
            console.log(err);
        }else{
            console.log("deleted");
        }
        res.redirect("/");
    })
})
app.listen(3000,function(){
    console.log("Server has started!!!");
})
