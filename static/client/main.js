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
  });
  return wrap;
};

const createFloaty = (x, y, emoji) => {
  let floaty = document.createElement("h2");
  floaty.innerText = emoji;
  floaty.className = "floaty";
  floaty.style.left = x + "px";
  floaty.style.top = y + "px";
  setTimeout(async () => {
    floaty.style.top = y - Math.random() * 500 + "px";
    floaty.style.left = x + Math.random() * 40 - 20 + "px";
    floaty.style.transform = `translate(-50%, -50%) rotate( ${
      Math.random() * 80 - 40
    }deg)`;
    await new Promise((r) => setTimeout(r, 2000));
    floaty.style.opacity = 0;
    await new Promise((r) => setTimeout(r, 5000));
    document.documentElement.removeChild(floaty);
  }, 10);
  document.documentElement.appendChild(floaty);
};

let emojis = ["❤️", "🎵", "👏", "🎻", "🎺"];
let wrap = document.getElementById("bottomBar");

for (let emoji in emojis) {
  wrap.appendChild(generateCircle(emojis[emoji], emoji));
}
