#!/usr/bin/env node
// 添加 shebang
import chalk from 'chalk'
import program from 'commander'
import loadCommand from './lib/loadCommand'

console.log(chalk.yellow('launch typescript-sprint'))

program
  .version(require('../package.json').version)
  .usage('<command> [options]')

program
  .command('helloword <username>')
  .description('向指定的用户问好')
  .option('-p, --pname', '显示 helloword 程序的全称')
  .action((username, cmd) => {
    loadCommand('helloword', '@typescript-sprint/helloword').main(username, cleanArgs(cmd))
  })

// output help information on unknown commands
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
  })

// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`typescript-sprint <command> --help`)} for detailed usage of given command.`)
  console.log()
})

program.commands.forEach((c: any) => c.on('--help', () => console.log()))

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

function camelize (str: string) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

function cleanArgs(cmd: any) {
  const args: any = {}
  cmd.options.forEach((o: any) => {
    const key = camelize(o.long.replace(/^--/, ''))
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key]
    }
  })
  return args
}
