const Client = require('./structures/Client');
const client = new Client();

const options = {
  mainGuildID: '343572980351107077',
  inviteChannelID: '621361819059093534',
  logsChannelID: '621216834393210880',
  mainGuildName: 'Lustfulite Mod',
  testingGuildID: '621212697228476416',
}

client.run(options);
client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log('[Discord Bot] Ready!')
})