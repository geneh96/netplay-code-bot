const Disord = require('discord.js');
const client = new Disord.Client();

let token = '';


if(process.env.NODE_ENV == 'prod'){
    token = process.env.TOKEN;
}
else{
    const config = require('./config/config.json');
    token = config.token;
}

client.on('message', msg => {

    if(msg.content.length==8 &&(typeof(parseInt(msg.content, 16))=="number")){
        msg.channel.messages.fetch().then(messages=>{
            const botMessages = messages.filter(message=>message.author.bot && message.content.includes('melee/PM'));
            msg.channel.bulkDelete(botMessages)
        })
            msg.channel.send(`Latest melee/PM netplay code: ${msg.content}`);
            msg.delete();

    }
    else if(msg.content.includes(`duelingnexus.com/game/NA-`)&&!msg.author.bot){
        msg.channel.messages.fetch().then(messages=>{
            const botMessages = messages.filter(message=>message.author.bot && message.content.includes('duelingnexus'));
            msg.channel.bulkDelete(botMessages)
        })
        msg.channel.send(`Latest YGO arena: ${msg.content}`);
        msg.delete();         
    }
    
 });

client.login(token);