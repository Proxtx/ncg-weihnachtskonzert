import { createFloaty } from "../lib/floaty.js";
import { connect } from "../lib/wsConnectionHandler.js";

let reactions = await framework.load("reactions.js");
let emojis = await reactions.reactions;
let timeout = await reactions.timeout;

const generateCircle = (emoji, index) => {
  let wrap = document.createElement("div");
  wrap.className = "circle";
  let emojiWrap = document.createElement("h1");
  emojiWrap.innerText = emoji;
  let wave = document.createElement("m-wave");
  wrap.appendChild(emojiWrap);
  wrap.appendChild(wave);
  wrap.addEventListener("click", (e) => {
    createFloaty(e.pageX, e.pageY, emoji, false, 2);
    reactions.sendReaction(index);
    reactionWrap.style.pointerEvents = "none";
    setTimeout(() => {
      reactionWrap.style.pointerEvents = "unset";
    }, timeout);
  });
  return wrap;
};

let reactionWrap = document.getElementById("bottomBar");

for (let emoji in emojis) {
  reactionWrap.appendChild(generateCircle(emojis[emoji], emoji));
}

framework.ws.addModule(
  {
    setText: (text) => {
      document.getElementById("info").innerText = text;
      return { success: true };
    },
    clientTimeout: (newTimeout) => {
      timeout = newTimeout;
      return { success: true };
    },
  },
  "textReceiver"
);

connect();
