"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NPMVersion = exports.NodeVersion = exports.createTable = exports.Subject = void 0;
var Subjects_1 = require("./dist/Subjects");
Object.defineProperty(exports, "Subject", { enumerable: true, get: function () { return Subjects_1.Subject; } });
var Table_1 = require("./dist/Table");
Object.defineProperty(exports, "createTable", { enumerable: true, get: function () { return Table_1.createTable; } });
var NodeVersion;
(function (NodeVersion) {
    NodeVersion["major"] = "16.15.1";
    NodeVersion["minor"] = "14.17.0";
    NodeVersion["exp"] = "18.4.0";
})(NodeVersion = exports.NodeVersion || (exports.NodeVersion = {}));
var NPMVersion;
(function (NPMVersion) {
    NPMVersion["major"] = "8.12.2";
    NPMVersion["minor"] = "6.14.13";
})(NPMVersion = exports.NPMVersion || (exports.NPMVersion = {}));
