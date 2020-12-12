var mongoose=require("mongoose");

var EmailSchema=new mongoose.Schema({
    emailadd:{
        type:String,
        unique:true
    }
})

var Email = mongoose.model("emaildb",EmailSchema);

module.exports= Email;