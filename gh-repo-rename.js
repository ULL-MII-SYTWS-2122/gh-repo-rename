const shell = require('shelljs');
const { Command } = require('commander');
const path= require('path');
const defaultName = 'default-repository';
const program = new Command();
program.version(require(path.join(__dirname,'package.json')).version);

program
    .name("gh repo-rename [options] [organization/repository] [newRepositoriName]")
    .option('-d --default' ,' set default name for the repository')

program.addHelpText('after', `
    - You can change the name of a repo in a organization
    `);

program.parse(process.argv);
if (process.argv.length === 1) program.help();

function exec(executable, ...args) {
    let command = `${executable} ${args.join('')}`;
    let result = shell.exec(command, {silent: true});
    if (result.code !== 0) {
      shell.echo(`Error: Command "${command}" failed\n${result.stderr}`);
      shell.exit(result.code);
    }    
    return result.stdout.replace(/\s+$/,'');
}

const gh = (...args) => exec("gh", ...args);

function showError(error) {
    if (error) {
      console.error(`Error!: ${error}`);
      process.exit(1); 
    }
  }

if (!shell.which('git')) {
    showError('Sorry, this extension requires git installed!');
}

if (!shell.which('gh')) {
    showError('Sorry, this extension requires GitHub Cli (gh) installed!');
}

if(!program.opts() && !program.args[0]) {
    showError('Sorry, you need to write an organization/repository');
}

if(!program.args[1] && !program.opts().default) {
    showError('Sorry, you need to write an name for the repository, or you can put the -d option');
}

if(program.opts().default) {
    gh(`api -X PATCH /repos/${program.args[0]} -f name=${defaultName}`);
}
else {
    gh(`api -X PATCH /repos/${program.args[0]} -f name=${program.args[1]}`);
}