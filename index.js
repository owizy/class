const express = module.require('express')
const app = express()
const mongoose = module.require('mongoose')
mongoose.connect('mongodb+srv://Abdulmalik:SuPEnWarBIng@cluster0.bemncpv.mongodb.net/').then(()=>{
    console.log("connected to Db")
}).catch((err)=>{
    console.log(`not connected due to ${err}`)
})
const Product = module.require('./model')

app.use(express.json())

app.get("/allproduct",async(req,res)=>{
    try{
        const all_product = await Product.find()
        res.send(all_product)
    }catch(err){
        res.send('could not due to'+err)
    }
})

app.post("/addproduct",async(req,res)=>{
    const Prod = Product({
        title:req.body.title,
        description:req.body.description,
        price:req.body.description
    })
    try{
        const new_prod = await Prod.save()
        res.send(new_prod)
    }catch(err){
        res.json({
            message:"oops! couldn't save student",
            err:err
        })
    }
})

app.get("/:product_id",async(req,res)=>{
    try{
        const  prod_id = await Product.findById(req.params.product_id)
        res.send(prod_id)
    }catch(err){
        res.send('oops! could not find student due to'+err)
    }
})
app.delete("/:product_id",async(req,res)=>{
    try{
        const prods_id =await Product.findByIdAndDelete({_id:req.params.product_id})
        res.send(prods_id)
    }catch(err){
        res.send('oops! could not find student to update due to'+err)
    }
})

app.patch("/:product_id",async(req,res)=>{
    try{
        const prods_id =await Product.findByIdAndUpdate({_id:req.params.product_id},req.body)
        res.send(prods_id)
    }catch(err){
        res.send('oops! could not find student to update due to'+err)
    }
})
const Port= process.env.Port || 9000
app.listen(Port,()=>{
    console.log(`port${Port}`)
})