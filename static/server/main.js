import { createFloaty } from "../lib/floaty.js";
import { connect } from "../lib/wsConnectionHandler.js";

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

connect();
