import process from "process";

const PWD = process.env.PWD || "test";

export let text = "";

let callbacks = [];

export const setText = (pwd, newText) => {
  if (pwd != PWD) return;
  text = newText;
  for (let callback of callbacks) callback(text);
};

global.textHandler = async (module) => {
  await module.setText(text);
  let func = async (text) => {
    if (!(await module.setText(text)).success)
      callbacks.splice(callbacks.indexOf(func), 1);
  };
  callbacks.push(func);
};

export const checkPwd = (pwd) => {
  return pwd == PWD;
};
