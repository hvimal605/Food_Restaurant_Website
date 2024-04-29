const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Card = require('../models/Card')



//route
router.get('/allCards',requireLogin,(req,res)=>{
    Card.find()
    .populate("postedBy","_id name")
    .then(cards=>res.json(cards))
    .catch(err=>console.log(err))
})


router.post('/createPost',requireLogin,(req,res)=>{
    const {itemName,price,category,pic}=req.body;
    if(!itemName||!price||!category||!pic){
        return res.status(400).json({error:"Please add all the details"})
    }
    // console.log(req.User)

    const card = new Card({
        itemName,
        price,
        category,
        photo:pic,
        postedBy:req.User.id
    })
   card.save().then((result)=>{
    return res.json({card:result})
   }).catch(err=>console.log(err))
    

})

module.exports = router;