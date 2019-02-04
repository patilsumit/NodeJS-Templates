//Import Events Module...
var events=require('events');

//Create an eventEmitter object...
var eventEmitter=new events.EventEmitter();

//Create an eventHandler as Follow...
var connectionHandler=function connected(){
    console.log('Connection Successful');

    //Fire the data Received Events
    eventEmitter.emit('Data_Received');
}

//Bind the event connection with handler
eventEmitter.on('connection',connectionHandler);

//Bind the data received event with anonymous function
eventEmitter.on('Data_Received',function(){
   console.log('Data_Received_Succesfully');
});

//Fire the connection event
eventEmitter.emit('connection');
console.log('Program Ended!');