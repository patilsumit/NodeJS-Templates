var events= require('events');
var util=require('util');

// var myEmitter=new events.EventEmitter();

// myEmitter.on('someEvent',function(arg){
//     console.log(arg);
// });


// myEmitter.emit('someEvent','The Event is Emiited');

var Person= function(name){
    this.name=name;
}

util.inherits(Person,events.EventEmitter);

var james=new Person('james');
var bond=new Person('Bond');
var jemubhai=new Person('JemuBhai');
var people=[james,bond,jemubhai];
// console.log(people);

people.forEach(function(person){
    person.on('speak',function(mesg){
        console.log(person.name + ' said ' + mesg);
    })
})

james.emit('speak',"hey Dude....");
bond.emit('speak','Hey Dude Bond...');