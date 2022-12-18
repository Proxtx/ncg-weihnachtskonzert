import process from "process";

const PWD = process.env.PWD || "test";

export let text = "";
export let timeout = 500;

let callbacks = [];

export const setText = (pwd, newText) => {
  if (pwd != PWD) return;
  text = newText;
  for (let callback of callbacks) callback("setText", text);
};

export const clientTimeout = (pwd, newTimeout) => {
  if (pwd != PWD) return;
  timeout = newTimeout;
  for (let callback of callbacks) callback("clientTimeout", timeout);
};

global.textHandler = async (module) => {
  await module.setText(text);
  await module.clientTimeout(timeout);
  let func = async (method, value) => {
    try {
      if (!(await module[method](value)).success)
        callbacks.splice(callbacks.indexOf(func), 1);
    } catch {}
  };
  callbacks.push(func);
};

export const checkPwd = (pwd) => {
  return pwd == PWD;
};
