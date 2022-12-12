import { createFloaty } from "../lib/floaty.js";

let reactions = await framework.load("reactions.js");
let emojis = await reactions.reactions;

framework.ws.addModule(
  {
    createReaction: (index) => {
      createFloaty(
        (window.innerWidth / emojis.length) * index +
          window.innerWidth / emojis.length / 2,
        window.innerHeight,
        emojis[index]
      );
      return { success: true };
    },
  },
  "reactionReceiver"
);

const generateModule = async () => {
  let result;
  let r;
  (async () => {
    result = await framework.ws.serve();
    r && r();
  })();
  setTimeout(() => r(), 5000);
  await new Promise((resolve) => (r = resolve));
  if (!result) {
    console.log("ws failed retry in 5 seconds");
    await new Promise((r) => setTimeout(r, 5000));
    generateModule();
    return;
  }

  console.log("connection established");
  result.ws.addEventListener("close", () => {
    console.log("connection lost");
    generateModule();
  });
};

generateModule();
