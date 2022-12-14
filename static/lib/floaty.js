export const createFloaty = (x, y, emoji, reverse = false, scale = 1) => {
  let floaty = document.createElement("h2");
  floaty.innerText = emoji;
  floaty.className = "floaty";
  floaty.style.left = x + "px";
  floaty.style.top = y + "px";
  floaty.style.transform = `translate(-50%, -50%) rotate(0deg) scale(${scale})`;
  setTimeout(async () => {
    if (!reverse) {
      floaty.style.left = x - Math.random() * 1000 + 500 + "px";
      floaty.style.top = y + Math.random() * 40 - 20 + "px";
    } else {
      floaty.style.top = y + Math.random() * 500 + "px";
      floaty.style.left = x + Math.random() * 40 - 20 + "px";
    }
    floaty.style.transform = `translate(-50%, -50%) rotate( ${
      Math.random() * 80 - 40
    }deg) scale(${scale})`;
    await new Promise((r) => setTimeout(r, 2000));
    floaty.style.opacity = 0;
    await new Promise((r) => setTimeout(r, 5000));
    document.body.removeChild(floaty);
  }, 50);
  document.body.appendChild(floaty);
};
