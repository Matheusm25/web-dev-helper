const { build } = require('gluegun')

async function run (argv) {
  const cli = build()
    .brand('wdh')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'wdh-*', hidden: true })
    .help()
    .defaultCommand()
    .version()
    .create()
  const toolbox = await cli.run(argv)
  return toolbox
}

module.exports = { run }
