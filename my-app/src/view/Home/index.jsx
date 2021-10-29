import axios from 'axios';
import Header from '../../component/Header/index.jsx';
import ArrayRow from '../../component/ArrayRow/index.jsx';
import React, { useState, useEffect } from 'react';

import './styles.css';

function Repeat({List, limit, item}) {
  let items = [];
  List = List.slice(20*(limit-1),20*limit)

  switch(item){
		case 'brand':
			List.sort((a, b) => b.brand - a.brand);
			break
		case 'price':
			List.sort((a, b) => b.price - a.price);
			break
		case 'bobine_price' :
			List.sort((a, b) => b.bobine_price - a.bobine_price);
			break
		case 'material':
			List.sort((a, b) => b.material - a.material);
			break
		case 'bobine_weight':
			List.sort((a, b) => b.bobine_weight - a.bobine_weight);
			break
		case 'quality':
			List.sort((a, b) => b.quality - a.quality);
			break
	}
  for (const filament of List) {
      items.push(
        <ArrayRow brand={filament.brand} bobine_price={filament.bobine_price} bobine_weight={filament.bobine_weight} material={filament.material} price={filament.price} quality={filament.quality}/>
        );
  }
  return (items.reverse())
}

const Home = props => {

	const [index, setIndex] = useState(1);
	const [item, setItem] = useState("price");
	const [list, setList] = useState([
    {
      	"bobine_price": "19.86",
			"bobine_weight": "1000",
			"brand": "Sunlu",
			"id": 0,
			"material": "PLA-silk",
			"price": "19.86",
			"quality": null
    }
  ])

	useEffect(() => {
		axios.get('/list')
			.then(response => {
				setList(response.data)
				console.log(response.data)
			})
			.catch(error => console.log('erreur axios : '+error+' data : '+error.response));
	},[])

	function choice(choice){
		console.log(index)
		switch(choice){
			case 'first':
				setIndex(1)
				break
			case 'last':
				setIndex(Math.ceil(list.length/20))
				break
			case 'next' :
				if (index <= list.length/20){
					setIndex(index+1);
				}
				break
			case 'prev':
				if(index > 1){
					setIndex(index-1);
				}
				break
		}
		console.log(index)
	}

	function sort(choice){
		console.log(index)
		switch(choice){
			case 'brand':
				setItem('brand');
				break
			case 'price':
				setItem('price');
				break
			case 'bobine_price' :
				setItem('bobine_price');
				break
			case 'material':
				setItem('material');
				break
			case 'bobine_weight':
				setItem('bobine_weight');
				break
			case 'quality':
				setItem('quality');
				break
		}
		console.log(index)
	}

	return (
		<React.Fragment>
			<Header/>
			<main>
				<section className="grid justify-items-stretch">
					<table className="rounded tbl:transition duration-200 table-auto mt-10 shadow-xl justify-self-center text-xs tbl:text-base ">
						<thead className="lg:transition duration-200 divide-y align-middle divide-indigo-900 lg:text-2xl">
							<tr>
								<th onClick={() => setItem('brand')} scope="col" className="hover:bg-cuisse-sky tracking-tighter ipho:tracking-normal tbl:tracking-wider px-1 md:px-3">Marque</th>
								<th onClick={() => setItem('price')} scope="col" className="hover:bg-cuisse-sky tracking-tighter ipho:tracking-normal tbl:tracking-wider px-1 md:px-3">Prix au kg</th>
								<th onClick={() => setItem('bobine_price')} scope="col" className="hover:bg-cuisse-sky tracking-tighter ipho:tracking-normal tbl:tracking-wider px-1 md:px-3">Prix bobine</th>
								<th onClick={() => setItem('material')} scope="col" className="hover:bg-cuisse-sky tracking-tighter ipho:tracking-normal tbl:tracking-wider px-1 md:px-3">Matériaux</th>
								<th onClick={() => setItem('bobine_weight')} scope="col" className="hover:bg-cuisse-sky tracking-tighter ipho:tracking-normal tbl:tracking-wider px-1 md:px-3">Poid bobine</th>
								<th onClick={() => setItem('quality')} scope="col" className="hover:bg-cuisse-sky tracking-tighter ipho:tracking-normal tbl:tracking-wider px-1 md:px-3">Qualité</th>
							</tr>
						</thead>
						<tbody className="lg:transition duration-200 divide-y divide-indigo-900 align-middle min-w-full lg:text-2xl">
							<Repeat List={list} limit={index} item={item}/>
						</tbody>
					</table>
					<nav className="flex col my-5 justify-self-center" aria-label="Pagination">
						<button className="sm:transform duration-200 px-1 sm:px-5 py-1 items-center flex justify-center rounded-full bg-indigo-700" type="button" onClick={() => choice('first')}>
							<img className="h-4 w-4 mr-1 sm:mr-2" src="./img/larrow-8.png"/>
							<span className="hidden sm:flex text-white">first</span>
						</button>
						<button className="sm:transform duration-200 px-1 sm:px-5 py-1 items-center flex justify-center rounded-full bg-indigo-500" type="button" onClick={() => choice('prev')}>
							<img className="h-4 w-4 mr-1 sm:mr-2" src="./img/larrow-7.png"/>
							<span className="hidden sm:flex text-white">prev</span>
						</button>
						<button className="sm:transform duration-200 px-1 sm:px-5 py-1 items-center flex justify-center rounded-full bg-indigo-500" type="button" onClick={() => choice('next')}>
							<span className="hidden sm:flex text-white">next</span>
							<img className="h-4 w-4 ml-1 sm:ml-2" src="./img/rarrow-7.png"/>
						</button>
						<button className="sm:transform duration-200 px-1 sm:px-5 py-1 items-center flex justify-center rounded-full bg-indigo-700" type="button" onClick={() => choice('last')}>
							<span className="hidden sm:flex text-white">last</span>
							<img className="h-4 w-4 ml-1 sm:ml-2" src="./img/rarrow-8.png"/>
						</button>	
					</nav>
				</section>
			</main>
		</React.Fragment>
	);
};

export default Home;
