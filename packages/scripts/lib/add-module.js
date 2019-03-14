"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function default_1(options) {
    var claseName = options.moduleName.replace(/[A-Z]/g, function (match, position) { return "" + (position === 0 ? '' : '-') + match.toLowerCase(); });
    var moduleDir = "./" + claseName;
    fs_1.default.mkdirSync(moduleDir);
    // fs.writeFileSync(`${moduleDir}/api.js`, '')
    // fs.writeFileSync(`${moduleDir}/store.js`, '')
    fs_1.default.writeFileSync(moduleDir + "/index.vue", "<template>\n    <div class=\"" + claseName + "\">\n        " + options.moduleName + "\n    </div>\n</template>\n\n<script src=\"./index.ts\"></script>\n\n<style lang=\"less\">\n// ." + claseName + " {\n\n// }\n</style>\n  ");
    fs_1.default.writeFileSync(moduleDir + "/index.ts", "import { Vue, Component } from 'vue-property-decorator'\n\n@Component\nexport default class " + options.moduleName + " extends Vue {\n    name: string = '" + options.moduleName + "'\n}\n");
}
exports.default = default_1;
//# sourceMappingURL=add-module.js.map