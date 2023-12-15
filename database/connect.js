const mongoose=require('mongoose');

const PASS="dnzEcQDErO9QtM3E";

const DBName="appDB";

URI=`mongodb+srv://classconnect2023:${PASS}@classconnect.yiphpts.mongodb.net/${DBName}?retryWrites=true&w=majority`;

var connection= async ()=>{

  mongoose.connection.on('connected', () => console.log('connected with host: ',mongoose.connection.host));
  mongoose.connection.on('disconnected',()=> console.log('disconnected'))

  console.log("Attempting Connection with ConnectDB");
  try{
    await mongoose.connect(URI);
  }
  catch(error)
  {
    console.log("Failed with error: ", error);
  }
}

module.exports=connection;