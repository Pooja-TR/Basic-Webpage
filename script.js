var gradInfo = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function bodyBackground() {
	body.style.background = "linear-gradient(to right , "
		+ color1.value + " , "
		+ color2.value + ")";

	gradInfo.textContent = body.style.background + ";";
}

// color1.addEventListener("input", bodyBackground)

// color2.addEventListener("input", bodyBackground)

