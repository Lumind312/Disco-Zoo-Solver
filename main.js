/*----- constants -----*/
// I was required to hardcode this :(
// const farm_animals = [
// 	[Sheep,	  [0,0], [1,0] 2,0 3,0],
// 	[Pig,	  [0,0] [1,0] 0,1 1,1],
// 	[Rabbit,  [0,0] [0,1] 0,2 0,3],
// 	[Horse,	  [0,0] [0,1] 0,2],
// 	[Cow,	  [0,0] [1,0] 2,0],
// 	[Unicorn, [0,0] [1,1] 2,1],
// 	[Chicken, [2,0] [1,1] 0,2]

// ];

/*----- app's state (variables) -----*/
let habitat;

/*----- cached element references -----*/

/*----- event listeners -----*/
document.getElementById("go_button").addEventListener("click", readHabitat);
document.getElementById('file-input').addEventListener('change', readFile, false);

/*----- functions -----*/
function readFile(event) {
	// let f = new String();
	// f = `data/` + filename + `.txt`;

	let file = event.target.files[0];
	if (!file) {
		return;
	}

	let reader = new FileReader();
	reader.onload = function(event) {
		// let text = reader.result;
		// let node = document.getElementById("output");
		// node.innerText = text;
		let contents = event.target.result;
		document.getElementById('file-content').textContent = contents;

		console.log(reader.result);
	};
	// reader.readAsText(f);
}

function readHabitat() {
	habitat = document.getElementById("habitat").value;
	console.log(habitat);

	// const f = `data/` + filename + `.txt`;
	// readFile(habitat);
	

	// document.getElementById("animals").textContent = 
}