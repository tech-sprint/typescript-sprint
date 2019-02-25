import fs from 'fs'
import { Options } from "../scripts";

export default function (options: Options) {
  const claseName = options.moduleName.replace(/[A-Z]/g, (match, position) => `${position === 0 ? '' : '-'}${match.toLowerCase()}`)
  const moduleDir = `./${claseName}`

  fs.mkdirSync(moduleDir)
  fs.writeFileSync(`${moduleDir}/api.js`, '')
  fs.writeFileSync(`${moduleDir}/index.vue`,`<template>
  <div class="${claseName}">
    ${options.moduleName}
  </div>
</template>

<script>
export default {
name: '${options.moduleName}',

components: {},

props: {},

data() {
  return {}
},

computed: {},

watch: {},

// mounted() {
  // this.init()
// },

methods: {
  // init() {
  // }
}
}
</script>

<style lang="stylus">
// @import "../../assets/css/variable"
// .${claseName}
// background-color $white
</style>
  `)
  fs.writeFileSync(`${moduleDir}/store.js`, '')
}
