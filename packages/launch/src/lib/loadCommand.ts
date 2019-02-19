export default function loadCommand(name: string, moduleName: string) {
  return require(moduleName)
}
