let listF;
let index = 0;
let lenList = 0;

const line = {
    "brand": "-",
    "price": "-",
    "bobine_price": "-",
    "bobine_weight": "-",
    "material": "-",
    "quality": "-"
  }

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
	$.getJSON("../listFilaments.json",function(file){
		listF = file
		updateTable(0)
		lenList = listF.length % 10

		if (lenList !== 0){
			for (let i = 0; i <= lenList; i++){
				listF.push(line)
			}
		}
	})
})

function choice(choice){

	switch(choice){
		case 'first':
			index = 0
			break
		case 'last':
			index = listF.length-10
			break
		case 'next' :
			if (index <= listF.length-20){
				index += 10
			}
			break
		case 'prev':
			if(index >= 10){
				index -= 10
			}
			break
	}
}