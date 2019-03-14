import fs from 'fs'
import { Options } from '../scripts';

function addModule(options: Options) {
  const claseName = options.moduleName.replace(/[A-Z]/g, (match, position) => `${position === 0 ? '' : '-'}${match.toLowerCase()}`)
  const moduleDir = `./${claseName}`

  fs.mkdirSync(moduleDir)
  // fs.writeFileSync(`${moduleDir}/api.js`, '')
  // fs.writeFileSync(`${moduleDir}/store.js`, '')
  fs.writeFileSync(`${moduleDir}/index.vue`,`<template>
    <div class="${claseName}">
        ${options.moduleName}
    </div>
</template>

<script type="typescript">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ${options.moduleName} extends Vue {
    name: string = '${options.moduleName}'
}
</script>

<style lang="less">
// .${claseName} {

// }
</style>
  `)
}

function addComponent(options: Options) {
  const fileName = options.moduleName.replace(/[A-Z]/g, (match, position) => `${position === 0 ? '' : '-'}${match.toLowerCase()}`)

  fs.writeFileSync(`./${fileName}.vue`,`<template>
    <div class="${fileName}">
        ${options.moduleName}
    </div>
</template>

<script type="typescript">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ${options.moduleName} extends Vue {
    name: string = '${options.moduleName}'
}
</script>

<style lang="less">
// .${fileName} {

// }
</style>
  `)
}

export default function (options: Options) {
  if (options.component) {
    addComponent(options)
  } else {
    addModule(options)
  }
}
