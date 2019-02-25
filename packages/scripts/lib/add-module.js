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
    fs_1.default.writeFileSync(moduleDir + "/api.js", '');
    fs_1.default.writeFileSync(moduleDir + "/index.vue", "<template>\n  <div class=\"" + claseName + "\">\n    " + options.moduleName + "\n  </div>\n</template>\n\n<script>\nexport default {\nname: '" + options.moduleName + "',\n\ncomponents: {},\n\nprops: {},\n\ndata() {\n  return {}\n},\n\ncomputed: {},\n\nwatch: {},\n\n// mounted() {\n  // this.init()\n// },\n\nmethods: {\n  // init() {\n  // }\n}\n}\n</script>\n\n<style lang=\"stylus\">\n// @import \"../../assets/css/variable\"\n// ." + claseName + "\n// background-color $white\n</style>\n  ");
    fs_1.default.writeFileSync(moduleDir + "/store.js", '');
}
exports.default = default_1;
//# sourceMappingURL=add-module.js.map