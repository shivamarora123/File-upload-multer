const mongoose=require('mongoose');
const DocumentSchema=mongoose.Schema({
  documentImage:{type:String}
});
module.exports=mongoose.model('documents',DocumentSchema);
