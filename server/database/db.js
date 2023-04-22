import mongoose from 'mongoose';



const DBConnection = async() => {
    try{
        const MONGODB_URI = `mongodb://sharmalakshya341:sharmalakshya@ac-yqpvdjj-shard-00-00.p3deq5s.mongodb.net:27017,ac-yqpvdjj-shard-00-01.p3deq5s.mongodb.net:27017,ac-yqpvdjj-shard-00-02.p3deq5s.mongodb.net:27017/?ssl=true&replicaSet=atlas-14kj29-shard-0&authSource=admin&retryWrites=true&w=majority`;
        await mongoose.connect(MONGODB_URI,{useNewUrlParser : true});
        console.log('Database Connected Successfully');
    }
    catch(error){
        console.error('Error while connecting to database',error.message);
    }
}

export default DBConnection;