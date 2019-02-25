import { Options } from '../scripts'

export function main(subCommandName: string, options: Options) {
  console.log(`子命令: ${subCommandName}`)
  require(`./${subCommandName}`).default(options)
}
