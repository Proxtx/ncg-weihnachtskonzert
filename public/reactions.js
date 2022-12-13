import process from "process";

export const reactions = ["❤️", "🎵", "👏", "🎻", "🎺"];
export let text = "";

let callbacks = [];

export const sendReaction = (index) => {
  for (let callback of callbacks) callback(index);
};

global.handler = (module) => {
  let disable = false;
  callbacks.push(async (index) => {
    if (disable || !(await module.createReaction(index)).success)
      disable = true;
  });
};

export const setText = (pwd, newText) => {
  if (pwd != process.env.PWD) return;
  text = newText;
};

export const checkPwd = (pwd) => {
  return pwd == process.env.PWD;
};
