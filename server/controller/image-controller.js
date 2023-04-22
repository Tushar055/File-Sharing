import File from "../model/file.js";

export const uploadImage = async (request,response) => {
    const fileObj = {
        path : request.file.path,
        name : request.file.originalname
    }
    try {
        // checks and saves data in database.
        const file = await File.create(fileObj);
        //file_id is the image id we are going to use to fetch the image in database.
        response.status(200).json({path : `localhost:8000/file/${file._id}`});    
    } catch (error) {
        console.log(error.message);
        response.status(500).json({error : error.message});
    }
}



export const downloadImage = async(request,response) =>{
    try{
        // findbyid is provided by mongodb module
        const file = await File.findById(request.params.fileId);
        file.downloadContent++;
        await file.save();
        //downloading the file
        response.download(file.path,file.name);
    }
    catch(error){
        console.error(error.message);
        return response.status(500).json({error : error.message});   
    }
}