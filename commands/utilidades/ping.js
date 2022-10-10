module.exports = {
  name: 'mss',
  description: 'Que tan veloz soy?',
  options: [],
  run: async (client, int) => {
    int.reply({
      content: "Geolocalizando",
      fetchReply: true
    }).then((m) => {
      m.edit(`Ping: \`${Date.now() - m.createdTimestamp}ms\``);
    });
  }
}