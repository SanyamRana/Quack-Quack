// index.js
require('dotenv').config();
const { channel } = require('diagnostics_channel');
const { Client, GatewayIntentBits } = require('discord.js');
const { EOF } = require('dns');
const fs=require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => 
{
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }

    
    if (message.content === 'mc')
    {
        (message.channel.send('Did you mean Mehul?'));
    }


    if (message.content.toLowerCase() === 'pohapaglu'||message.content.toLowerCase()==='dyslexic'||message.content.toLowerCase() === 'poha paglu'||message.content.toLowerCase()==='dickslexic')
    {
        (message.channel.send(`Did you mean <@1356273214770249890>,Ek Indori jo Amity ke saath Prometeo ghumta hai aur jisse mission impossible nahi khela jaata`));
    }


    if (message.content.toLowerCase() === 'soni')
    {
        (message.channel.send(`Did you mean <@516247416878530560>, Ek aisa jangli Pokemon jiske sar pe bachpan mein brick gir gayi thi aur ab woh mansik santulan kho chuka hai`));
    }


    if (message.content.toLowerCase()==='bad luck'||message.content.toLowerCase()==='buri kismat')
    {
        (message.channel.send(`Did you mean <@516247416878530560>?`));
    }


    if (message.content === 'sabse bada'|| message.content=== 'vidhi')
    {
        (message.channel.send(`Did you mean<@809921170445959168> ,Ek aisa Jigglypuff jo 70% water hai and 110% Brainrot`));
    }
    
    
    if (message.content === 'black'|| message.content=== 'nityan')
    {
        (message.channel.send(`Did you mean <@793335701390622741> Ek aisa banda jisse Biryani and Pulao ke beech difference hi nahi pata LOL LMAO XDXD`));
    }


    if (message.content === 'shikavan'||message.content === 'vanshika'|| message.content.toLowerCase()=== ' penguin')
    {
        (message.channel.send(`Did you mean <@766139610837155840>Ek aisi penguin jo pechle ek saal se apna igloo hi nahi bana paayi`));
    }
    
    
    if (message.content === 'siddhant')
    {
        (message.channel.send(`<@547726554453770241> is GAYEEEEEEEEEE`));
    }
    
    
    if (message.content === 'anmol')
    {
        (message.channel.send('<@760379095581196348>The niggatron jo apni bandi pe ladko ke sath cheat krta hai'));
    }
    
    
    if(message.content.toLowerCase() === 'celebrate')
    {
        message.channel.send('OSCAR OSCAR OSCAR');
    }
    
    
    if(message.content=== 'roll')
    {
        const rickAstleyArt = 
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⣀⡀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠈⠀⠀⠀⠀⣠⣶⣶⣻⣿⣿⣿⣭⡀⠀⠀⠠⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣬⢿⡟⠙⠛⠛⠛⠛⢿⣿⡇⠀⠀⠀⠀⠀⠀⠈⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⣿⣿⢨⣯⣂⣁⢂⠄⠐⢸⣿⡿⡁⠀⠀⠀⠀⠀⠀⠀⡉⠓⠢⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠉⡿⣛⣿⡇⠻⢿⣿⢾⡟⠀⠀⠀⡀⠀⠀⠀⠀⠀⠘⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢛⣿⣸⡷⢡⡿⢧⣧⠀⣀⣾⡷⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣽⡧⢳⣷⡶⢤⡄⣶⠟⠉⠀⠀⠀⠀⢣⡀⠀⠀⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⢀⡴⠚⣧⡽⣧⣴⣀⡴⢺⣧⡀⠀⠀⠀⠀⣠⠴⠃⠀⠀⡼⠁⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠒⠤⣤⣞⣠⢼⢻⡲⣹⢉⡭⢑⡾⣻⣝⠦⠀⣀⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠠⠖⠚⢀⣴⣿⠀⢸⣿⠷⣯⣌⣴⠞⠁⣿⣿⣿⣷⣶⣤⣤⣀⡀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣷⣿⣿⣿⠀⢸⣯⢻⣿⠛⠁⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⣶⣾⣷⣻⢵⢤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀\n" +
"⠀⠀⠀⠀⠀⠀⠐⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣽⣽⣿⣳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⡎⠀⢐⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠅⢸⣿⣓⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⡇⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀⣺⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠁⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⣻⣿⡿⣽⣿⣿⣿⣿⣭⣛⣛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣿⣿⣿⣿⣿⣿⣿⣾⠭⣍⠚⡔⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣟⣛⡛⢦⠡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀\n" +
"⠀⠀⠀⠀⠀⠀⠀⠀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠠⠀⠀\n"+
"\t\t\t\t\t\t\t\t\t\t\t\tGET RICK ROLLED MF";
        (message.reply(rickAstleyArt));
    }
    
    
    if (message.content.toLowerCase()==='help')
    {
        (message.reply('!ping\nmc\n!adddialogue\nshow all dialogue\njuyee\npohapaglu/poha paglu/dyslexic/Dickslexic\nsoni\nsabse bada/vidhi \nnityan/black\nvanshika/shikavan\nsiddhant\nanmol\ncelebrate\n!dialogue\nroll\npahadi musalmaan\nvictory pose\nlag?@(mention)/hang?@(mention)\n!joke\n!brainrot\n'));
    }
    
    
    if (message.content.toLowerCase() === 'pahadi musalmaan'||message.content.toLowerCase()==='sanyam'||message.content === 'pahadi musalman')
    {
        (message.channel.send(`<@1164626187545481339>Yeh banda toh pookie hai Isse kyu tang karte ho <3`));
    }
    
    
    if (message.content.toLowerCase()==='victory pose')
    {
        (message.channel.send('GO OUTSIDE.\n GET A LIFE.\n TOUCH SOME GRASS.\n GET A GIRL IN YOUR LIFE.\n SINGLE MARNA HAI KYA.\n'));
    }
    
    
    if (message.mentions.users.first())
    {
        if (message.content.toLowerCase().startsWith('lag?')||message.content.toLowerCase().startsWith('hang?'))
    {
        const name= message.mentions.users.first();
        message.channel.send(`Seedha seedha bolna SKILL ISSUE HAI ${name}`)
    }
    }
    
    
    if (message.content==='!joke')
    {
        const jokes=["Nikhil","Soni ka Good Luck","Padhai Likhai karo \n aaye bade joke sunne waale"];
        const randomjoke=jokes[Math.floor(Math.random()*jokes.length)];
        message.channel.send(randomjoke);
    }
    
    
    if(message.content==='!brainrot')
    {
        const brainrot =["Wi Wi Wi","AAAA CHUD GAYI CHUD GAYI CHUD GAYI","GAYEEEEEEEEEEEE","Yeh kya bak rahe ho mc","BEHENCHOD","O4-E139"];
        const rndmbrainrot=brainrot[Math.floor(Math.random()*brainrot.length)];
        message.channel.send(rndmbrainrot); 
    }
    

    if(message.content.toLowerCase()==='juyee')
    {
        message.channel.send({files:['D:\\Discord_Bots\\Images\\drake meme template_juyee.png']});
    }
    
    if(message.content.toLowerCase()==='!dialogue')
    {
        fs.readFile('D:\\Discord_Bots\\discord-bot\\dialogues.txt', 'utf8', (err, data) => {
            if(err)
            {
                console.error('Error reading file:',err);
                return message.reply('Something went wrong while trying to fetch the dailogue');
            }
            const line=data.split('\n').filter(line=>line.trim()!=='');
            const rndmline=line[Math.floor(Math.random()*line.length)];
            message.channel.send(rndmline);
        });
    }


    if (message.content.toLowerCase().startsWith('!adddialogue '))
    {
        const newdialogue = message.content.replace('!adddialogue','').trim()
        fs.appendFile('D:\\Discord_Bots\\discord-bot\\dialogues.txt',newdialogue+'\n',(err)=>{
            if(err)
            {
                console.error('File could not be appended',err);
                return message.channel.send('Error, dialogue could not be added');
            }
            message.channel.send('✅ Dialogue added to the collection successfully');
        });
    }
    if(message.content.toLowerCase()==='show all dialogues')
    {
        fs.readFile('D:\\Discord_Bots\\discord-bot\\dialogues.txt','utf8',(err,data)=>{
            if(err)
            {
                console.error('Error reacing file',err);
                return message.channel.send('The dialogue file could not be read');
            }
            message.channel.send(data)
        });
    }
});

client.login(process.env.TOKEN);
