import config from "@proxtx/config";

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
  if (pwd != config.pwd) return;
  text = newText;
};

export const checkPwd = (pwd) => {
  return pwd == config.pwd;
};
