const {Command, flags} = require('@oclif/command');

class GenCommand extends Command {
  async run() {
    const {flags} = this.parse(GenCommand);
    const name = flags.name || 'world';
    this.log(`hello ${name} from H:\\xampp7317\\htdocs\\oclif-test\\src\\commands\\gen.js`)
  }
}

GenCommand.description = `Describe the command here
...
Extra documentation goes here
`

GenCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = GenCommand
