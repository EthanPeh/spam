const Discord = require (discord.js);
const client = new Discord.Client();

Client.on('ready', () =>{
  console.log('BOT STARTED');
});

Client.on('ready', () =>{
  Client.user.setActivity("help,everyone,v!stop");
  console.log('$(Client.user.tag) running on $(Client.guilds.size) guilds with $(Client.users.size) users.');
});

Client.on('message', async mag=>{
  if (mag.content === 'everyone') (
  mag.channel.send('everyone')
  )
  if (mag.content === 'help') (
  mag.channel.send('everyone'));
  if (mag.content === 'v!stop') (
  mag.channel.send('ok')
  )
  if (mag.content === 'v!stop') (
  process.exit()
  
  );
});

Client.login('NzI3MDk3MjE5NjcyNzAyOTg3.Xvm4qw.TEhbqsTnj_nITZfG1xbmKuqzBus')
