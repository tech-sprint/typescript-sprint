import fs from 'fs'
import { Options } from "../scripts";

export default function (options: Options) {
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

<script src="./index.ts"></script>

<style lang="less">
// .${claseName} {

// }
</style>
  `)
fs.writeFileSync(`${moduleDir}/index.ts`,`import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ${options.moduleName} extends Vue {
    name: string = '${options.moduleName}'
}
`)
}
