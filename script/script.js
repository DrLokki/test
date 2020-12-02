let list
let table = document.getElementsByTagName('tr')

$(document).ready(function(){
  $.getJSON("./listFilaments.json",function(json){
    list = json
  })
})

for (let i = 0; i <= 10; i++){
	let tableLine = table[i].getElementsByTagName('th')
	switch (tableLine.className){
		case 'brand':
			tableLine.innerHTML = list[i].brand
			break
		case 'price':
			tableLine.innerHTML = list[i].price
			break
		case 'price bobine':
			tableLine.innerHTML = list[i].bobine_price
			break
		case 'weight':
			tableLine.innerHTML = list[i].bobine_weight
			break
		case 'material':
			tableLine.innerHTML = list[i].material
			break
		case 'quality':
			tableLine.innerHTML = list[i].quality
			break
	}
}