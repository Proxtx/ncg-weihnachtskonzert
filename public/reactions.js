export const reactions = ["❤️", "🎵", "👏", "🎻", "🎺"];

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
