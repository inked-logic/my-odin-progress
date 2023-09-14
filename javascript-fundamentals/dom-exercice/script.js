// Your Javascript File
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redP = document.createElement("p");
redP.innerText = "Hey I'm red!";
redP.style.setProperty("color", "red");

document.body.appendChild(redP);

const blueH3 = document.createElement("h3");

blueH3.innerText = "I'm blue h3!";
blueH3.style.setProperty("color", "blue");

document.body.appendChild(blueH3);

const blackDiv = document.createElement("div");

blackDiv.style.setProperty("border", "1px solid black");
blackDiv.style.setProperty("background", "pink");

const divH1 = document.createElement("h1");

divH1.innerHTML = "I'm in a div";
blackDiv.appendChild(divH1);

const divP = document.createElement("p");

divP.innerHTML = "ME TOO!";
blackDiv.appendChild(divP);

document.body.appendChild(blackDiv);

