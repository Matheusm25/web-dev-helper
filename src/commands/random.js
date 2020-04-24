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
      let hash = crypto.randomBytes(32).toString(options.encoding || 'ascii');
      hash = hash.split('\n').join('').split('\r').join('');
      info(hash);
    }
  }
}
