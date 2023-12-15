const mongoose=require('mongoose');

const PASS="dnzEcQDErO9QtM3E";

const DBName="appDB";

// The URI to connect to the DB
URI=`mongodb+srv://classconnect2023:${PASS}@classconnect.yiphpts.mongodb.net/${DBName}?retryWrites=true&w=majority`;

// Asynchronous function that awaits a connection
//logs an error if connection is failed within 30 seconds(default)
//use mongoose.connection() as a db object and then perform operations after calling connection function
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