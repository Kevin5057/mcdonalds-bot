const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});

require("http").createServer((_, res) => 
res.end("Client Online Already! \nhttps://discord.gg/xxwH4ea6Ka\nREMEMBER, ORDERING DOES NOT NEED TO USE PREFIX! \n \n  ===============================\n      Client Version: [1.2.5] \n  =============================== \n \n           Prefix: [;] \n \n  =============================== \n \n   Bot Info: \n   -help \n   -owner \n   -botinfo \n \n  =============================== \n \n   Order Commands: \n   -menu \n   -order \n   -order rice \n   -order mineral water \n   -order chicken snack wrap \n   -order chicken muffin \n   -order chicken muffin with egg \n   -order egg mcmuffin \n   -order sausage mcmuffin \n   -order sausage mcmuffin with egg \n   -order egg and cheese muffin \n   -order breakfast wrap \n   -order bubur ayam mcd \n   -order sausage wrap \n   -order hashbrown \n   -order hotcakes \n   -order french fries \n   -order frenchfries\n \n  =============================== \n    (C)2021 Powered by Ren Devs")).listen(8080)

const { MessageEmbed, Client } = require('discord.js');
const client = new Client();


//Custom Status. (Like: WATCHING, PLAYING, LISTENING...)
client.on('ready', () => {
  console.log(`Bot Ready on ${client.guilds.cache.size} servers.`);
  client.user.setActivity(`McD 24h | ;help`, {type: "WATCHING"}, {status: "WATCHING"});
});



//Ping Developer. (Like: <@USER_ID>) [USE Developer_Mode]
client.on('message', async  message => {
  if (message.content === "bang") {
message.channel.send('<@861231546924400641>');
  }
});



//Bot Info. (Check the Bot's Info ;> ) [USE MessageEmbed]
client.on('message', async  message => {
  if (message.content === ";help") {
        const embed = new MessageEmbed()
        .setColor('#5865f2')
        .setTitle('Help Pannel')
        .setThumbnail('https://cdn.discordapp.com/avatars/898932651593986128/1890f14cfa46250420826bf5616eec91.png?size=4096')
        .setImage('https://media.discordapp.net/attachments/902855977894817862/902858222262685726/rgb_2.gif')
        .setDescription(`[Invite](https://discord.com/oauth2/authorize?client_id=898932651593986128&scope=bot&permissions=6563417089) | [Launch](https://mc-donald-bot.glitch.me) | [Commands](https://mc-donald-bot.glitch.me) | [Support](https://discord.gg/xxwH4ea6Ka) \n \n*Note: REMEMBER, ORDERING DOES NOT NEED TO USE PREFIX! **Use** \`menu\` **or** \`order\` **for Ordering.***`)
        .setFooter('Powered by Ren Devs', 'https://yt3.ggpht.com/TuUkJjsddA36sWNSfP89ME_jZxyJ3CtWiKCKSmu_ZtGbEsRnBmlk1Nn7FHWwqmyZGokvscnzjg=s4096-c-k-c0x00ffffff-no-rj')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === ";owner") {
        const embed = new MessageEmbed()
        .setColor('#c31f26')
        .setTitle('Developer\'s Info')
        .setAuthor('McD Servers', 'https://cdn.discordapp.com/attachments/902855977894817862/904537081001435196/image-removebg-preview.png?size=4096')
        .setThumbnail('https://wavegame.net/img/icon/discord.png')
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/assets/ico/richlink.jpg')
        .setDescription(`**Username:** McD Bot \n**Tag:** Bot Mc donalds#9553 \n**ID:** 898932651593986128 \n**Developer:** REINER#2459 \n[**Join our Support Server**](https://discord.gg/xxwH4ea6Ka)`)
        .setFooter('Powered by Ren Devs', 'https://yt3.ggpht.com/TuUkJjsddA36sWNSfP89ME_jZxyJ3CtWiKCKSmu_ZtGbEsRnBmlk1Nn7FHWwqmyZGokvscnzjg=s4096-c-k-c0x00ffffff-no-rj')
        .setTimestamp()

        message.channel.send(embed)
    }
}) 

client.on('message', async  message => {
  if (message.content === ";botinfo") {
        const embed = new MessageEmbed()
        .setColor('#c31f26')
        .setTitle('Bot\'s Info')
        .setAuthor('McD Servers', 'https://cdn.discordapp.com/attachments/902855977894817862/904537081001435196/image-removebg-preview.png?size=4096')
        .setThumbnail('https://cdn.discordapp.com/avatars/898932651593986128/1890f14cfa46250420826bf5616eec91.png?size=4096')
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/assets/ico/richlink.jpg')
        .setDescription(`**Username:** McD Bot \n**Tag:** Bot Mc donalds#9553 \n**ID:** 898932651593986128 \n**Developer:** REINER#2459 \n[**Join our Support Server**](https://discord.gg/xxwH4ea6Ka) \n \n`)
        .setFooter('©2021 Reiner - McDonald\'s Indonesia', 'https://yt3.ggpht.com/TuUkJjsddA36sWNSfP89ME_jZxyJ3CtWiKCKSmu_ZtGbEsRnBmlk1Nn7FHWwqmyZGokvscnzjg=s4096-c-k-c0x00ffffff-no-rj')
        .setTimestamp()

        message.channel.send(embed)
    }
}) 

client.on('message', async  message => {
  if (message.content === ";embedtest") {
        const embed = new MessageEmbed()
        .setColor('#5865f2')
        .setTitle('Title')
        .setAuthor('Author', 'https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png')
        .setThumbnail('https://wavegame.net/img/icon/discord.png')
        .setImage('https://pbs.twimg.com/media/E1RnbS_VcAg4B5C.jpg')
        .setDescription(`**Description** \nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. \n \n[Link](https://www.dicord.com/app)`)
        .setFooter('©2021 Discord.js Embed')
        .setTimestamp()

        message.channel.send(embed)
    }
})





//Ordering and Contacting to McD Indonesian Server.
client.on('message', async  message => {
  if (message.content === "order") {
        const embed = new MessageEmbed()
        .setColor('#00aff4')
        .setTitle('Order Pannel')
        .setAuthor('McD Servers', 'https://cdn.discordapp.com/attachments/902855977894817862/904537081001435196/image-removebg-preview.png?size=4096')
        .setThumbnail('https://images-ext-2.discordapp.net/external/QcrXZ9NR5XJ2gLI_f0x3PogdLbRRLsid_X6j6Qk4exc/https/dontasktoask.com/favicon.png')
        .setImage('https://4.bp.blogspot.com/-c4NSs5a_u58/W319hrPErtI/AAAAAAAAgjc/zuvCqY3in4UMK5sAvJVr3setVaHoqZLdwCLcBGAs/s1600/Untitled.png')
        .setDescription(`Welcome to **McDonald's** \n[McDonald's Indonesia Menu](https://mcdonalds.co.id/menu) \nIf you want to buy something, just buy something in here and it's Very human things to buy in here.`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
}) 

client.on('message', async  message => {
  if (message.content === "menu") {
        const embed = new MessageEmbed()
        .setColor('#d52b1e')
        .setTitle('McDonald\'s Menu')
        .setAuthor('McD Clown', 'https://cdn.discordapp.com/avatars/898932651593986128/1890f14cfa46250420826bf5616eec91.png?size=4096')
        .setThumbnail('https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setImage('https://4.bp.blogspot.com/-c4NSs5a_u58/W319hrPErtI/AAAAAAAAgjc/zuvCqY3in4UMK5sAvJVr3setVaHoqZLdwCLcBGAs/s1600/Untitled.png')
        .setDescription(`Welcome to **McDonald's** \n[McDonald's Indonesia Menu](https://mcdonalds.co.id/menu) \nIf you want to buy something, just buy something in here and it's Very human things to buy in here.`)
        .setFooter('©2021 Reiner - McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

//=================================================

client.on('message', async  message => {
  if (message.content === "order mineral water") {
        const embed = new MessageEmbed()
        .setColor('#00ff00')
        .setTitle('Mineral Water')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://cdn.discordapp.com/attachments/902855977894817862/904639771622662204/image-removebg-preview.png')
        .setDescription(`Check here [About Water](https://www.alodokter.com/memahami-air-mineral-kandungan-dan-bedanya-dengan-air-putih-biasa) \n \n[**Beli Disini**](https://www.tokopedia.com/rekomendasi/1613584444)`)
        .setFooter('©2021 McDonald\'s Indonesia • All rights reserved')
        .setTimestamp()

        message.channel.send(embed)
    }
}) 

client.on('message', async  message => {
  if (message.content === "order rice") {
        const embed = new MessageEmbed()
        .setColor('#00ff00')
        .setTitle('Rice')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/873089091657420820/904381078117175337/image-removebg-preview.png')
        .setImage('https://files.kfcku.com/uploads/media/dummy/food/kfc-web_rice_l.png')
        .setDescription(`Check here [About Rice](https://id.wikipedia.org/wiki/Beras) \n \n[**Beli Disini**](https://www.tokopedia.com/rekomendasi/1613584444)`)
        .setFooter('©2021 McDonald\'s Indonesia • All rights reserved')
        .setTimestamp()

        message.channel.send(embed)
    }
}) 

client.on('message', async  message => {
  if (message.content === "order pamer") {
        const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle('Oops, something went wrong...')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://cdn.discordapp.com/attachments/849223143733461002/899685234851860490/unknown.png')
        .setDescription(`It doesn't look like the page you're searching for exists.`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
}) 

client.on('message', async  message => {
  if (message.content === "order chicken snack wrap") {
        const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle('Oops, something went wrong...')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://cdn.discordapp.com/attachments/849223143733461002/899685234851860490/unknown.png')
        .setDescription(`It doesn't look like the page you're searching for exists.`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order chicken muffin") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Chicken Muffin')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/AZa7XBfA0ADkUbSdnQOW.png')
        .setDescription(`Setangkup English muffin hangat dilapis saus \nmayonais dengan daging ayam olahan yang digoreng \ndengan sempurna. Tersedia dari jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order chicken muffin with egg") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Chicken Muffin with Egg')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/O1eyabztTE8thbUbu8Fw.png')
        .setDescription(`Setangkup English muffin hangat dilapis saus \nmayonais dengan daging ayam olahan yang digoreng \ndengan sempurna. Tersedia dari jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order egg mcmuffin") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Egg McMuffin')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/qrb2OgE9WfuDZp3EtCQg.png')
        .setDescription(`English muffin hangat yang disajikan dengan daging \nayam asap, telur, dan keju bernutrisi. Tersedia dari jam \n5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order sausage mcmuffin") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Sausage McMuffin')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/Vm7RRv0nsWQmS1fz3iv6.png')
        .setDescription(`English muffin disajikan dengan sosis ayam yang gurih dan selembar keju bernutrisi. Tersedia dari jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order sausage mcmuffin with egg") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Sausage McMuffin with Egg')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/pOXjdLMT1dffGjlcYHdj.png')
        .setDescription(`Perpaduan klasik english muffin, sosis ayam khas McDonald's, telur, dan selembar keju bernutrisi. Tersedia dari jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order egg and cheese muffin") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Egg and Cheese Muffin')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/9FcgMqqWSFYjE6edaOAL.png')
        .setDescription(`Perpaduan scrambled egg dan keju gurih dalam setangkup English Muffin hangat. Tersedia dari jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order breakfast wrap") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Egg and Cheese Muffin')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/NADVM6Oa9TNKytIGzKVT.png')
        .setDescription(`Paduan daging ayam asap, scrambled egg, dan keju gurih dalam balutan tortilla yang lembut, tersedia jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order bubur ayam mcd") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Bubur Ayam McD')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/6VJ2ueCTa01TMyXxBfVo.png')
        .setDescription(`Bubur ayam klasik disajikan dengan seledri dan bawang goreng renyah, tersedia jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order sausage wrap") {
        const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Sausage Wrap')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/oOqk0inorO5YNcw5S2iG.png')
        .setDescription(`Perpaduan sosis ayam, scrambled egg, dan keju gurih dalam balutan tortilla yang lembut. Tersedia dari jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order hashbrown") {
        const embed = new MessageEmbed()
        .setColor('#cd6f27')
        .setTitle('Hashbrown')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/H5uo107Z3k8lUlhFKsM5.png')
        .setDescription(`Perpaduan sosis ayam, scrambled egg, dan keju gurih dalam balutan tortilla yang lembut. Tersedia dari jam 5-11 pagi. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order hotcakes") {
        const embed = new MessageEmbed()
        .setColor('#cd6f27')
        .setTitle('Hotcakes™ (3pcs)')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/AryU9XqfAtd0qRGb5zmi.png')
        .setDescription(`3 Panekuk lembut dan hangat berlumur sirup maple dan mentega gurih. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order hotcakes") {
        const embed = new MessageEmbed()
        .setColor('#cd6f27')
        .setTitle('Hotcakes™ (2pcs)')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/8wS86IhSr97xPHH7d0Ro.png')
        .setDescription(`2 Panekuk lembut dan hangat berlumur sirup maple dan mentega gurih. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order french fries") {
        const embed = new MessageEmbed()
        .setColor('#cd6f27')
        .setTitle('French Fries')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/N6lms2s2I8EeH6Iq4uAi.png')
        .setDescription(`Kentang goreng renyah dan gurih. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order frenchfries") {
        const embed = new MessageEmbed()
        .setColor('#cd6f27')
        .setTitle('French Fries')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/N6lms2s2I8EeH6Iq4uAi.png')
        .setDescription(`Kentang goreng renyah dan gurih. \n[**Beli Disini**](https://www.mcdelivery.co.id/id/)`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

client.on('message', async  message => {
  if (message.content === "order bigbreakfast") {
        const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle('Oops, something went wrong...')
        .setAuthor('McDonald\'s Servers', 'https://cdn.discordapp.com/attachments/849223143733461002/899325137113985105/McDonalds-Logo-1200x1200-1-1200x1200.png')
        .setThumbnail()
        .setImage('https://cdn.discordapp.com/attachments/849223143733461002/899685234851860490/unknown.png')
        .setDescription(`It doesn't look like the page you're searching for exists.`)
        .setFooter('©2021 McDonald\'s Indonesia')
        .setTimestamp()

        message.channel.send(embed)
    }
})

//Chat-bot. (Like: Hello Mister!, Goodmorning Student!)
client.on('message', async  message => {
  if (message.content === "pagi") {
message.channel.send('Pagi juga, jangan lupa jemur. Buat kesehatan.');
  }
});

client.on('message', async  message => {
  if (message.content === "siang") {
message.channel.send('Siang juga, gw butuh bebek goreng diskon **100%**');
  }
});

client.on('message', async  message => {
  if (message.content === "sore") {
message.channel.send('\`tidak ada apa apa...\`');
  }
});

client.on('message', async  message => {
  if (message.content === "malam") {
message.channel.send('jangan ganggu, lagi lihat kucing peduli.');
  }
});

client.on('message', async  message => {
  if (message.content === "order skin") {
message.channel.send('Matamu...');
  }
});

//Discord Bot Login Process...
client.login(process.env.BOT);