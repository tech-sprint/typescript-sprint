"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function addModule(options) {
    var claseName = options.moduleName.replace(/[A-Z]/g, function (match, position) { return "" + (position === 0 ? '' : '-') + match.toLowerCase(); });
    var moduleDir = "./" + claseName;
    fs_1.default.mkdirSync(moduleDir);
    // fs.writeFileSync(`${moduleDir}/api.js`, '')
    // fs.writeFileSync(`${moduleDir}/store.js`, '')
    fs_1.default.writeFileSync(moduleDir + "/index.vue", "<template>\n    <div class=\"" + claseName + "\">\n        " + options.moduleName + "\n    </div>\n</template>\n\n<script type=\"typescript\">\nimport { Vue, Component } from 'vue-property-decorator'\n\n@Component\nexport default class " + options.moduleName + " extends Vue {\n    name: string = '" + options.moduleName + "'\n}\n</script>\n\n<style lang=\"less\">\n// ." + claseName + " {\n\n// }\n</style>\n  ");
}
function addComponent(options) {
    var fileName = options.moduleName.replace(/[A-Z]/g, function (match, position) { return "" + (position === 0 ? '' : '-') + match.toLowerCase(); });
    fs_1.default.writeFileSync("./" + fileName + ".vue", "<template>\n    <div class=\"" + fileName + "\">\n        " + options.moduleName + "\n    </div>\n</template>\n\n<script type=\"typescript\">\nimport { Vue, Component } from 'vue-property-decorator'\n\n@Component\nexport default class " + options.moduleName + " extends Vue {\n    name: string = '" + options.moduleName + "'\n}\n</script>\n\n<style lang=\"less\">\n// ." + fileName + " {\n\n// }\n</style>\n  ");
}
function default_1(options) {
    if (options.component) {
        addComponent(options);
    }
    else {
        addModule(options);
    }
}
exports.default = default_1;
//# sourceMappingURL=add-module.js.map