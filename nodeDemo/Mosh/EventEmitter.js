var EventEmitter=require('events');
var emitter=new EventEmitter();

emitter.on('Message-Logged',(arg)=>{
    console.log('Listener-Called',arg)
});


emitter.emit('Message-Logged',{id :1 ,url : 'http://'});