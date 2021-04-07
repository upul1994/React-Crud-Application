const express =require("express")
const businessRoutes =express.Router()
let Business =require("./business.model")

// Add data
businessRoutes.route("/add").post(function(req,res){
    let business =new Business(req.body)
    business.save()
    .then(business=>{
        res.status(200).json({"business":"business is added successfull"})
    }).catch(err=>{
        res.status(400).send("Unable to save database")
    })
})


// get data

businessRoutes.route("/").get(function(req,res){
Business.find(function(err,business){
    if(err){
        console.log(err)
    }else{
        res.json(business)
    }
})
})


// update


businessRoutes.route("/update/:id").post(function(req,res){
    Business.findById(req.params.id,function(err,business){     // business => collection name
        if(!business){
            res.status(400).send("Data is not found")

        }else{
            business.person_name=req.body.person_name
            business.business_name=req.body.business_name
            business.business_nic_number=req.body.business_nic_number
        

        business.save().then(business=>{
            res.json("Update Complete")
        }).catch(err=>{
            res.status(400).send("Unable to update database")
        })

             }

    })
})

// edit
businessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function (err, business){
        res.json(business);
    });
});










// delete

businessRoutes.route("/delete/:id").get(function(req,res){
    Business.findByIdAndRemove({_id:req.params.id},function(err,business){
        if(err){
            res.json(err)
                
        }else{
            res.json("Successfully Removed")
        }
    })

})

module.exports=businessRoutes