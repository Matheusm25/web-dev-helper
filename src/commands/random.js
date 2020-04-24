const crypto = require('crypto');

module.exports = {
  name: 'random',
  alias: ['rdm'],
  description: 'Generates a random string for dev tests',
  run: async toolbox => {
    const {
      parameters,
      print: { info },
    } = toolbox;
    const { options } = parameters;

    if (options.string) {
      const hash = crypto.randomBytes(32).toString('ascii');
      info(hash);
    }
  }
}
