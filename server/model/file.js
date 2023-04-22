// checks the data received from frontend is valid or not
import mongoose from "mongoose";
 

const fileSchema = new mongoose.Schema({
    path : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    downloadContent : {
        type : Number,
        required : true,
        default : 0
    }
})

const File = mongoose.model('file',fileSchema);
export default File;