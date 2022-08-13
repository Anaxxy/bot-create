const { Client, Intents } = require('discord.js');

const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
  });

client.once("ready",() =>{
    console.log(`Anaxy`.green)
    console.log(`Logged in as ${client.user.tag}`.cyan)
    client.user.setActivity("Bercinta Dengan Anak SD", {
        type: 'STREAMING',
      url: "https://youtu.be/aLqPy-93B9Y"
    })
  })


  client.on("message", message => {
    if(message.content === "helo"){
        message.channel.send("hello word")
    }
});
  client.login("YOU_TOKEN");
