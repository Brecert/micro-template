"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = void 0;
const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const replace = (text, props) => text.replace(new RegExp(String.raw `(?<!\\){(${Object.keys(props)
    .map(escapeRegExp)
    .join("|")})}|\\{`, "g"), (_, name) => (name ? props[name] : "{"));
exports.replace = replace;
