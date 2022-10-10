module.exports = {
  name: 'mencion',
  description: 'juro que no fui',
  options: [
        {
          type: '6',
          name: 'pibe',
          description: 'usuario que quiere mencionar',
          required: true
        }
  ],
  run: async (client, int) => {
    int.reply(`${int.user} Ups se me chispoteo`);
    }
  }