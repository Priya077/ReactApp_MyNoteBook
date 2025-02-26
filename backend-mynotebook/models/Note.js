import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
  
  title: {
    type: String,
    required: true,
    unique:true
  },
  description: {
      type:String 
  },
  tag: {
      type:String,
      default:'General'
  },
  date:{
      type:Date,
      default: Date.now
  }
});

module.exports=mongoose.model('notes',NotesSchema);