const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types
const nodemailer = require('nodemailer')



const CardSchema = new mongoose.Schema({
    itemName:{
        type: String,
        required: true

    },
    price:{
        type: String,
        required: true
    },
    category:{
        type: String,
        require: true
    },
    photo:{
        type: String,
        require: true,
        
    },
    postedBy:{
        type: ObjectId,
        ref:"User"
    }

   
})

//post middleware
CardSchema.post("save",async function(doc){
    try{
        console.log("doc",doc)
        //transporter
        //todo: shift this transporter under /config folder

        let transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            
            auth:{
                user:"hvimal605@gmail.com",
                pass:"ntee zquv jwcs fzuh",
            },
        })
//send mail
        let info = await transporter.sendMail({
            from:`harshkvima`,
            to:"22cd3012@rgipt.ac.in",
            subject:" 🔔New Food Card Added on Your Website HarshMeal",
            html:`<h2> Hello HarshMeal Admin &#128075;</h2> <p>New Food Item &#127860; Added <br> view here : <a href ="${doc.photo}">${doc.photo}</a>
            <br> ${doc.itemName} ,${doc.price} , ${doc.category} </p>`,
        })
console.log('info',info)

    }
    catch(error){
        console.log(error);
        

    }
 })

module.exports=mongoose.model("Card", CardSchema)