"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main(username, options) {
    console.log("hello: " + username);
    if (options.pname) {
        console.log(require('../package.json').name);
    }
}
exports.main = main;
