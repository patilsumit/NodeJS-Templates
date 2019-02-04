// var x=function(){
//     console.log("i m called from inside function");
// }

// var y=function(callback){
//     console.log("do something");
//     callback();
// }

// y(x);
//------------------------------
// let calc=function(num1,num2,calcType){

//     if(calcType === 'add'){
//        return num1 + num2;
//     }else(calcType === 'multiply')
//     {
//        return num1 * num2;
//     }          
// }

// // console.log(calc(50,45,'add'));
// console.log(calc(5,25,'multiply'));
//--------------------------
  
let add=function(a,b){
    return a + b;
};

let mulitply=function(){
    return a * b;
};

let doWhatever=function(a,b){
    console.log(`here two numbers back ${a} ${b}`);
}
let calc=function(a,b,callback){
    return callback(a,b);
}

console.log(calc(50,45,function(a,b){return a-b }));