let listF;
let index = 0;

function updateTable(i){
	let table = document.querySelectorAll("tbody>tr")

	for (let v of table){
		let tableLine = v.getElementsByTagName('td')
		for (let cel of tableLine) {
			let className = cel.classList[0]
			console.log(className)
			cel.innerHTML = listF[i][className] !== "" ? listF[i][className] : "NC"
		}
		i++
	}
}

$(document).ready(function(){
	$.getJSON("./test.json",function(file){
		listF = file
		updateTable(0)
	})
})