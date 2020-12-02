let table = document.getElementsByTagName('tr')
let i = 0

$(document).ready(function(){
	$.getJSON("./listFilaments.json",function(list){
		for (let v of table){
			let tableLine = v.getElementsByTagName('th')
			for (let cel of tableLine) {
				tableLine.innerHTML = list[i][tableLine.className] != "" ? list[i][tableLine.className] : "NC" 
			}
			i++
		}
	})
})

