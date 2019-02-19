export function main(username: string, options: any) {
  console.log(`hello: ${username}`)
  if (options.pname) {
    console.log(require('../package.json').name)
  }
}
