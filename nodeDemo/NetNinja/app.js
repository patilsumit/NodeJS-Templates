// console.log("Hello Patil");

// var time=0;
// var timer=setInterval(function(){
//     time= time + 1;
//       if(time>5)
//       {
//          clearInterval(timer);
//       }                                
//     console.log(time, "second pass para");
// },1000);

/*********************Part - 2************************************/
// console.log(__dirname);
// console.log(__filename);

// function sayHi()
// {
//     console.log("Hi PAtil!");
// }

// sayHi();

// var sayBye=function(req,rep){
//     console.log("bye!");
// }

// sayBye();
/*********************Part - 3************************************/
// function callFunction(fun)
// {
//   fun();
// }

//   var sayBye=function()
//   {
//         console.log("bye!");
//   }

//  callFunction(sayBye);
/*********************Part - 3************************************/
 var  counter = require('./count');

console.log(counter.counter(['sumit', 'lucky', 'patil', 124]));

console.log(counter.adder(15,15));

console.log(counter.adder(counter.pi,5));