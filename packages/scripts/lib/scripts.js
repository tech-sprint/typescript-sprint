"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main(subCommandName, options) {
    console.log("\u5B50\u547D\u4EE4: " + subCommandName);
    require("./" + subCommandName).default(options);
}
exports.main = main;
//# sourceMappingURL=scripts.js.map