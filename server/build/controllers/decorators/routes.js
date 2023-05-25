"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
function routeBinder(method) {
    return function get(path) {
        return function (target, key, desc) {
            // console.log('target in get', target, 'Key in get', key);
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
