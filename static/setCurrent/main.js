let currentMessage = await framework.load("currentMessage.js");
let reactions = await framework.load("reactions.js");

while (!(await currentMessage.checkPwd(localStorage.pwd))) {
  localStorage.pwd = prompt("PWD");
}

window.changeCur = async () => {
  await currentMessage.setText(
    localStorage.pwd,
    document.getElementById("text").component.value
  );

  alert("Send");
};

window.changeScale = async () => {
  await reactions.setScale(
    localStorage.pwd,
    document.getElementById("scale").component.value
  );

  alert("Send");
};

window.clientTimeout = async () => {
  await currentMessage.clientTimeout(
    localStorage.pwd,
    document.getElementById("clientTimeout").component.value
  );

  alert("Send");
};

window.setDisable = async (disable) => {
  await reactions.setDisable(localStorage.pwd, disable);

  alert("Set");
};
