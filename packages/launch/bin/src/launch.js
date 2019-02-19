#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var commander_1 = __importDefault(require("commander"));
var loadCommand_1 = __importDefault(require("../lib/loadCommand"));
console.log(chalk_1.default.yellow('launch typescript-sprint'));
commander_1.default
    .version(require('../package.json').version)
    .usage('<command> [options]');
commander_1.default
    .command('helloword <username>')
    .description('向指定的用户问好')
    .option('-n, --name', '显示 helloword 程序的全称')
    .action(function (username, cmd) {
    loadCommand_1.default('helloword', '@typescript-sprint/helloword').main(username, cleanArgs(cmd));
});
// output help information on unknown commands
commander_1.default
    .arguments('<command>')
    .action(function (cmd) {
    commander_1.default.outputHelp();
    console.log("  " + chalk_1.default.red("Unknown command " + chalk_1.default.yellow(cmd) + "."));
    console.log();
});
// add some useful info on help
commander_1.default.on('--help', function () {
    console.log();
    console.log("  Run " + chalk_1.default.cyan("typescript-sprint <command> --help") + " for detailed usage of given command.");
    console.log();
});
commander_1.default.commands.forEach(function (c) { return c.on('--help', function () { return console.log(); }); });
commander_1.default.parse(process.argv);
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
}
function camelize(str) {
    return str.replace(/-(\w)/g, function (_, c) { return c ? c.toUpperCase() : ''; });
}
function cleanArgs(cmd) {
    var args = {};
    console.log(cmd.options)
    cmd.options.forEach(function (o) {
        var key = camelize(o.long.replace(/^--/, ''));
        // if an option is not present and Command has a method with the same name
        // it should not be copied
        if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
            args[key] = cmd[key];
        }
    });
    return args;
}
//# sourceMappingURL=launch.js.map