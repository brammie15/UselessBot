const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const cheerio = require('cheerio');

var Count = 0;
const { prefix, token } = require('./botconfig.json');

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
              { name: "!tmauf", value: "tell me a useless fact"},
              { name: "!tmtmofut", value: "tell the most useless fact of today"},
              { name: "!ihrttpisf", value: "i have record that this person is simping for"},
              { name: "!ping", value: "i don't know what this does tbh"},
              { name: "!gmarn", value: "give me a random number + max"},
              { name: "!hmphgauf", value: "how many people have gotten a useless fact"},
              { name: "!nou", value: "no u, the perfect tool for uno"},
            )
            .setTimestamp()
            .setFooter("useless footer");
        

        message.channel.send(Help)

    }else if(command === `ping`){
        return message.channel.send("pong");
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
        message.channel.send('⠐⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠂\n⠄⠄⣰⣾⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠄⠄\n⠄⠄⣿⣿⣿⡿⠋⠄⡀⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⣉⣉⣉⡉⠙⠻⣿⣿⠄⠄\n⠄⠄⣿⣿⣿⣇⠔⠈⣿⣿⣿⣿⣿⡿⠛⢉⣤⣶⣾⣿⣿⣿⣿⣿⣿⣦⡀⠹⠄⠄\n⠄⠄⣿⣿⠃⠄⢠⣾⣿⣿⣿⠟⢁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄\n⠄⠄⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⠄\n⠄⠄⣿⣿⣿⣿⣿⡟⠁⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄\n⠄⠄⣿⣿⣿⣿⠋⢠⣾⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄\n⠄⠄⣿⣿⡿⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⠗⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄\n⠄⠄⣿⡿⠁⣼⣿⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⣠⣄⢰⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄\n⠄⠄⡿⠁⣼⣿⣿⣿⣿⣿⣿⣿⡇⠄⢀⡴⠚⢿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠⠄⠄\n⠄⠄⠃⢰⣿⣿⣿⣿⣿⣿⡿⣿⣿⠴⠋⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⠄⠄\n⠄⠄⢀⣿⣿⣿⣿⣿⣿⣿⠃⠈⠁⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾⣿⠄⠄\n⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⢶⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣾⣿⣿⠄⠄\n⠄⠄⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠋⣠⣿⣿⣿⣿⠄⠄\n⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣼⣿⣿⣿⣿⣿⠄⠄\n⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣴⣿⣿⣿⣿⣿⣿⣿⠄⠄\n⠄⠄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢁⣴⣿⣿⣿⣿⠗⠄⠄⣿⣿⠄⠄\n⠄⠄⣆⠈⠻⢿⣿⣿⣿⣿⣿⣿⠿⠛⣉⣤⣾⣿⣿⣿⣿⣿⣇⠠⠺⣷⣿⣿⠄⠄\n⠄⠄⣿⣿⣦⣄⣈⣉⣉⣉⣡⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⠉⠁⣀⣼⣿⣿⣿⠄⠄\n⠄⠄⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⡿⠟⠄⠄\n⠠⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄.')
    }else if(command === `hmphgauf`){
        message.channel.send(Count +" people have recieved a useless fact.")
    }else if(command === `hmphgauf`){

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
    }
    
    
    /*else if(command === `ihrttpisf`){

        //message.channel.send("this person talked to me: "+message.member.user);
        const user = message.author;

        if(!args.length){
            return message.channel.send(`u r soo stupid u need to provide arguments, ${message.author}!`)
        }
	    //message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    
    }*/else if(command === `test`){
       message.channel.send("pls beg");

       // message.channel.send(`First argument: ${args[0]}`);
    }
	console.log(message.content);
});


client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.token);
