const mongoose = require('mongoose')



const postSchema = new mongoose.Schema({

postname:String,
postdesc:String,
postprice:Number,
quantity:Number,


})


export default mongoose.model('Post',postSchema)





