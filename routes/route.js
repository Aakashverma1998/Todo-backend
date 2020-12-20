const express = require("express")
const router = express.Router()
const userdata = require("../models/userschema")


//get all userdata(read)......
router.get("/get", async(req,res)=>{
    try{
        const getdata = await userdata.find()
        res.json(getdata)

    }catch(err){
        res.status(400).send(err)
    }
})

//get the  indvisiul userdata id........
router.get("/:id",async(req,res)=>{
    try{
        const indivisualget = await userdata.findById(req.params.id)
        console.log(indivisualget
            );
        if(!indivisualget){
            res.status(404).send()
        }else{
            res.send(indivisualget)
        }

    }catch(err){
        res.status(500).send(err)
    }
})

//for create data.......
router.post("/post",async(req,res)=>{
    console.log(req.body);
    try{
        const postdata = new userdata(req.body)
        const  data = await postdata.save()
        res.status(201).send(data)

    }catch(err){
         return res.status(400).send(err)
    }
})

//for delete userdata by id.....
router.delete("/del/:id", async(req,res)=>{
    try{
        const deletedata = await userdata.findByIdAndDelete(req.params.id)
        if(!deletedata){
            res.status(400).send()
        }else{
            res.json(deletedata)
        }

    }catch(err){
        res.status(500).send(err)
    }
})

//for update ........
router.patch("/patch/:id", async(req,res)=>{
    try{
        const patchdata = await userdata.findByIdAndUpdate(req.params.id, req.body,{new:true})
        if(!patchdata){
            return res.status(400).send()
        }else{
            res.json(patchdata)
        }
    }catch(err){
        res.status(404).send(err)
    }
})
module.exports = router