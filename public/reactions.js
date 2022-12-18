export const reactions = ["❤️", "🎵", "👏", "🎻", "🎺"];

let callbacks = [];
const PWD = process.env.PWD || "test";

export const sendReaction = (index) => {
  for (let callback of callbacks) callback("createReaction", index);
};

export const setScale = (pwd, scale) => {
  if (pwd != PWD) return;
  for (let callback of callbacks) callback("setScale", scale);
};

global.handler = (module) => {
  let disable = false;
  callbacks.push(async (method, value) => {
    try {
      if (disable) return;
      if (!(await module[method](value)).success) disable = true;
    } catch {}
  });
};
