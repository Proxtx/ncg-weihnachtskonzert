import { createFloaty } from "../lib/floaty.js";

let reactions = await framework.load("reactions.js");
let emojis = await reactions.reactions;

const generateCircle = (emoji, index) => {
  let wrap = document.createElement("div");
  wrap.className = "circle";
  let emojiWrap = document.createElement("h2");
  emojiWrap.innerText = emoji;
  let wave = document.createElement("m-wave");
  wrap.appendChild(emojiWrap);
  wrap.appendChild(wave);
  wrap.addEventListener("click", (e) => {
    createFloaty(e.pageX, e.pageY, emoji);
    reactions.sendReaction(index);
  });
  return wrap;
};

let wrap = document.getElementById("bottomBar");

for (let emoji in emojis) {
  wrap.appendChild(generateCircle(emojis[emoji], emoji));
}

(async () => {
  while (true) {
    document.getElementById("info").innerText = await reactions.text;
    await new Promise((r) => setTimeout(r, 5000));
  }
})();
