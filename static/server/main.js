import { createFloaty } from "../lib/floaty.js";
import { connect } from "../lib/wsConnectionHandler.js";

let reactions = await framework.load("reactions.js");
let emojis = await reactions.reactions;

let scale = 1;

framework.ws.addModule(
  {
    setScale: (newScale) => {
      scale = newScale;
    },
    createReaction: (index) => {
      createFloaty(
        Math.random() * window.innerWidth,
        0,
        emojis[index],
        true,
        scale
      );
      return { success: true };
    },
  },
  "reactionReceiver"
);

connect();
