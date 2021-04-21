const escapeRegExp = (text: string) =>
  text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const replace = (text: string, props: Record<string, string>) =>
  text.replace(
    new RegExp(
      String.raw`(?<!\\){(${escapeRegExp(Object.keys(props).join("|"))})}|\\{`,
      "g",
    ),
    (_, name) => name ? props[name] : "{",
  );