const Disord = require('discord.js');
const client = new Disord.Client();

const token = 'Njk2NzM0NjI0NzA5MjE0MjI4.XotKxw.rg5v5rn4xYSh77t9LUn1qNzsT-Q';

var re = /[0-9A-Fa-f]{6}/g;


client.on('message', msg => {

    if(msg.content.length==8 && re.test(msg.content)){
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