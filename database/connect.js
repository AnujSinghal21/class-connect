const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

// The URI to connect to the DB
URI=process.env.URI;

// Asynchronous function that awaits a connection
//logs an error if connection is failed within 30 seconds(default)
//use mongoose.connection() as a db object and then perform operations after calling connection function
var connection= async ()=>{

  mongoose.connection.on('connected', () => console.log('connected with host: ',mongoose.connection.host));
  mongoose.connection.on('disconnected',()=> console.log('disconnected'));

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