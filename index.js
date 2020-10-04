/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
//const cheerio = require('cheerio');
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,output : process.stdout});

rl.on("line",(userInput)=>{
    var debugChannel = client.channels.cache.get('762229279756779550');
    debugChannel.send(userInput);
});
var date_ob = new Date();
var interval;
var Count = 0;
const { prefix } = require('./botconfig.json');
const { userInfo } = require('os');
//const { RSA_X931_PADDING } = require('constants');

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === `help`){
        var Help = new Discord.MessageEmbed()
            .setColor('#7FFF00')
            .setTitle("Useless Help")
            .setAuthor("Useless Name")
            .setDescription("Useless Help")
            .addFields(
            { name: "!tmauf", value: "tell me an useless fact"},
            { name: "!tmtmofut", value: "tell the most useless fact of today"},
             // { name: "!ihrttpisf", value: "i have record that this person is simping for"},
            { name: "!ping", value: "i don't know what this does tbh"},
            { name: "!pong", value: "don't know about this one either tbh"},
              //{ name: "!gmarn", value: "give me a random number + max"},
            { name: "!hmphgauf", value: "how many people have gotten an useless fact"},
            { name: "!htcueodyfhdotey", value: "has the conceivable universe exploded or died of heat death or thermal expansion yet?"},
            //{ name: "!nou", value: "no u, the perfect tool for uno"},
            )
            .setTimestamp()
            .setFooter("useless footer");
        

        message.channel.send(Help);

    }else if(command === `ping`){
        return message.channel.send("pong");
    }else if(command ==='pong'){
        return message.channel.send("ping");
    }else if(command === `tmauf`){
        request('https://uselessfacts.jsph.pl/random.json/?language=en', (error,respone,body) =>{
            if(!error && respone.statusCode == 200){
                var imported = JSON.parse(body);
                var uselessFact = imported['text'];
                Count ++;
                message.channel.send("here is ur useless fact: " + uselessFact)
                
                
            }
        });

    }else if(command === `shutdown`)
    {
        message.channel.send("ok cya!");
        
        client.user.setPresence({status:"invisible"});
    }else if(command ===`nou`){
        //message.channel.send('⠐⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠂\n⠄⠄⣰⣾⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠄⠄\n⠄⠄⣿⣿⣿⡿⠋⠄⡀⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⣉⣉⣉⡉⠙⠻⣿⣿⠄⠄\n⠄⠄⣿⣿⣿⣇⠔⠈⣿⣿⣿⣿⣿⡿⠛⢉⣤⣶⣾⣿⣿⣿⣿⣿⣿⣦⡀⠹⠄⠄\n⠄⠄⣿⣿⠃⠄⢠⣾⣿⣿⣿⠟⢁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄\n⠄⠄⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄\n⠄⠄⣿⣿⣿⣿⣿⡟⠁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄\n⠄⠄⣿⣿⣿⣿⠋⢠⣾⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄\n⠄⠄⣿⣿⡿⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⠗⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄\n⠄⠄⣿⡿⠁⣼⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⣠⣄⢰⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄\n⠄⠄⡿⠁⣼⣿⣿⣿⣿⣿⣿⣿⡇⠄⢀⡴⠚⢿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠⠄⠄\n⠄⠄⠃⢰⣿⣿⣿⣿⣿⣿⡿⣿⣿⠴⠋⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⠄⠄\n⠄⠄⢀⣿⣿⣿⣿⣿⣿⣿⠃⠈⠁⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⣿⠄⠄\n⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⢶⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣾⣿⣿⠄⠄\n⠄⠄⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠋⣠⣿⣿⣿⣿⠄⠄\n⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣼⣿⣿⣿⣿⣿⠄⠄\n⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿⠄⠄\n⠄⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢁⣴⣿⣿⣿⣿⠗⠄⠄⣿⣿⠄⠄\n⠄⠄⣆⠈⠻⢿⣿⣿⣿⣿⣿⣿⠿⠛⣉⣤⣾⣿⣿⣿⣿⣿⣇⠠⠺⣷⣿⣿⠄⠄\n⠄⠄⣿⣿⣦⣄⣈⣉⣉⣉⣡⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⠉⠁⣀⣼⣿⣿⣿⠄⠄\n⠄⠄⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⡿⠟⠄⠄\n⠠⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄.')
    }else if(command === `hmphgauf`){
        message.channel.send(Count +" people have recieved an useless fact.");
    }else if(command === `tmtmufot`){
        request('https://uselessfacts.jsph.pl/today.json?language=en', (error,respone,body) =>{
            if(!error && respone.statusCode == 200){
                var imported = JSON.parse(body);
                var uselessFactToday = imported['text'];
                Count ++;
                message.channel.send("here is the most useless fact of today " + uselessFactToday)
            }
        });
    }else if(command === 'gmarn'){
        if(!args[0]){
            return message.channel.send("i am gonna need a maxinum number.")
        }
        message.channel.send(Math.ceil(Math.random()*  parseFloat(args[0])));
    }else if(command === `test`){
        if(message.member.user.tag == "brammie15#3455"){
            channel = client.channels.cache.get('762229279756779550');
            channel.send("bot is struggeling to start...");
            interval = setInterval (function () {
                var hour = date_ob.getHours();
                hour = (hour < 10 ? "0" : "") + hour;
                if(hour < 22 && hour > 8){
                    request('https://uselessfacts.jsph.pl/random.json/?language=en', (error,respone,body) =>{
                        if(!error && respone.statusCode == 200){
                            var imported = JSON.parse(body);
                            var uselessFact = imported['text'];
                            Count ++;
                            channel.send("here is ur useless fact: " + uselessFact)
                        }
                    });
                }
            }, 3600000);
        }else{
            message.channel.send("u dont hav perms");
        }
    }
    else if(command === "htcueodyfhdotey"){

        message.channel.send("i dont know");
        
    }else if(command === 'stopit'){
        if(message.member.user.tag == "brammie15#3455"){
            clearInterval(interval);
        }else{
            message.channel.send("u dont hav perms")
        }
    }
	console.log(message.content);
});
function testing(helo){
    channel = client.channels.cache.get('756815503925837933');
    channel.send(helo);
}
client.once('ready', () => {
	console.log('Ready!');
});

client.login("tokengoeshere");