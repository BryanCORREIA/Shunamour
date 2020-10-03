const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

yesBtn.onclick= () => {
    noBtn.classList.remove("selected");
    yesBtn.classList.add("selected");
};

noBtn.onclick= () => {
    yesBtn.classList.remove("selected");
    noBtn.classList.add("selected");
};
