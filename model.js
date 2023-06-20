const mongoose=module.require('mongoose')


const Products=mongoose.Schema({
    title:{
        type:String,
        require:true,
        max_length:255,
    },
    description:{
        type:String,
        require:true,
        max_length:255
    },
    price:{
        type:String,
        require:true,
        max_length:20,
    }
})
module.exports=mongoose.model("JumaiProduct", Products)