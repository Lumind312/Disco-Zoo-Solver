window.onload;

/*----- constants -----*/

/*----- app's state (variables) -----*/
let habitat;

/*----- cached element references -----*/
let checks;

/*----- event listeners -----*/
document.getElementById("go_button").addEventListener("click", readHabitat);
document.getElementById("generate").addEventListener("click", generateMatrix);
// NOTICE: I scrapped the idea of preventing more than 3 checkboxes being checked.
// when checkboxes get to more than 3, put a warning message that says that only 3 max appear in game
document.getElementById("animals").onclick = function(event) {
	console.log("Was checked", event.target);

	let checklist = []
	checks = Array.from(document.querySelectorAll('#animals input'));
	checks.forEach(function(value, index) {
		if (value.checked) {
			checklist.push(value);
		}
	})
	console.log("Checklist", checklist);

	// event.stopPropagation();
	document.getElementById("max3warning").hidden = (checklist.length <= 3);
};

/*----- functions -----*/

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
async function populate(habitat) {
	let f = `https://lumind312.github.io/Disco-Zoo-Solver/data/json/` + habitat + `.json`;
	console.log(f);
	
	const requestURL = f;
	const request = new Request(requestURL);
	const response = await fetch(request);
	const animals = await response.json();
	console.log("The animals from json:", animals);

	let ani = document.getElementById("animals");
	// make the animal checkbox html
	// https://stackoverflow.com/questions/28678027/create-and-populate-with-dom-a-checkbox-list-with-array-values-in-javascript
	for (let i = 0; i < animals.length; i++) {
		let checkBox = document.createElement('input');
		let label = document.createElement('label');

		checkBox.type = "checkbox";
		checkBox.value = animals[i][0].replace('_',' ');
		checkBox.name = "checkbox";

		ani.appendChild(checkBox);
		ani.appendChild(label);
		label.appendChild(document.createTextNode(animals[i][0].replace('_',' ')));
		label.appendChild(document.createElement("br"));
	}

	// let generate = document.createElement("button")
	// generate.textContent = "Generate";
	// ani.appendChild(generate);
	document.getElementById("generate").hidden = false;
	generateMatrix();
}

function readHabitat() {
	// document.getElementById("animals").innerHTML = "";
	let ani = document.getElementById("animals").querySelectorAll(["input", "label"]);
	ani.forEach(function(checkbox, index) {
		delete checkbox.remove();
	});
	document.getElementById("generate").hidden = true;
	habitat = document.getElementById("habitat").value;
	console.log(habitat);

	// const f = `data/` + filename + `.txt`;
	populate(habitat);
}

function generateMatrix() {
	// document.getElementById("animals");

	let checklist = [];
	checks = Array.from(document.querySelectorAll('#animals input'));
	checks.forEach(function(value, index) {
		if (value.checked) {
			checklist.push(value);
		}
	})

	console.log(checklist);
}