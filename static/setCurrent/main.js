let reactions = await framework.load("currentMessage.js");

while (!(await reactions.checkPwd(localStorage.pwd))) {
  localStorage.pwd = prompt("PWD");
}

window.changeCur = async () => {
  await reactions.setText(
    localStorage.pwd,
    document.getElementById("text").component.value
  );

  alert("Send");
};
