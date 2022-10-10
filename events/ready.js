module.exports = {
  name: 'ready',
  run: (client) => {
    console.log('toy papi');
      client.application.commands.set([
    {
      name: 'ping',
      description: 'Pingeame esta!',
      options: [],
    },
    {
      name: 'pingea',
      description: 'te manda pal lobby',
      options: [
        {
          type: '6',
          name: 'usuario',
          description: 'usuario que quiere pingear',
          required: true
        }
      ]
    }
  ]);
  }
}