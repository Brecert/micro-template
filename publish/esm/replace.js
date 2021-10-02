const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
export const replace = (text, props) => text.replace(new RegExp(String.raw `(?<!\\){(${Object.keys(props)
    .map(escapeRegExp)
    .join("|")})}|\\{`, "g"), (_, name) => (name ? props[name] : "{"));
