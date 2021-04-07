const mongoose =require("mongoose")


const Schema =mongoose.Schema

let Business =new mongoose.Schema({

    person_name:{
        type:String
    },
    business_name:{
        type:String
    },
    business_nic_number:{
        type:String

    }
},{
    collection:"business"
})

module.exports =mongoose.model('Business',Business)
