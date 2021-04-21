const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
export const replace = (text, props) => text.replace(new RegExp(String.raw `(?<!\\){(${escapeRegExp(Object.keys(props).join("|"))})}|\\{`, "g"), (_, name) => name ? props[name] : "{");
