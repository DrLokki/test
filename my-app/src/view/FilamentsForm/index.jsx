import axios from 'axios';
import Header from '../../component/Header/index.jsx';
import React, { useState, useEffect } from 'react';

import './styles.css';


const FilamentsForm = props => {

	const [form, setForm] = useState({
		"bobine_price": 0,
		"bobine_weight": 0,
		"brand": "TEST",
		"id": 0,
		"material": "TEST",
		"price": 0,
		"quality": null
	});
	const [formBrand, setFormBrand] = useState("");
	const [formBobinePrice, setFormBobinePrice] = useState("");
	const [formBobineWeight, setFormBobineWeight] = useState("");
	const [formMaterial, setFormMaterial] = useState("");
	const [formQuality, setFormQuality] = useState("");

	const handleSubmit = (event) => {
		setForm({
		"bobine_price": parseInt(formBobinePrice),
		"bobine_weight": parseInt(formBobineWeight),
		"brand": formBrand,
		"material": formMaterial,
		"quality": parseInt(formQuality)
	});
		axios.post("/insert",JSON.stringify(form))
			.then(response => console.log(response.data))
			.catch(error => console.log('erreur axios : '+error+' data : '+error.response));
	}

	return (
		<>
			<Header/>
			<div className="flex justify-center mt-10">
				<form className="flex shadow-xl flex-col sm:w-1/3 rounded bg-cuisse border border-cuisse-dark" onSubmit={handleSubmit}>
					<div className="flex justify-center items-center flex-col i5:flex-row border-b border-cuisse-beau pb-1">
						<label htmlFor="formBrand">Marque : </label>
						<input className="bg-cuisse-dark" type="text" name="formBrand" id="formBrand" onChange={(e) => setFormBrand(e.target.value)}/>
					</div>
					<div className="flex justify-center items-center flex-col i5:flex-row border-b border-cuisse-beau pb-1">
						<label htmlFor="formBobinePrice">Prix de la bobine : </label>
						<input className="bg-cuisse-dark" type="number" name="formBobinePrice" id="formBobinePrice" onChange={(e) => setFormBobinePrice(e.target.value)}/>
					</div>
					<div className="flex justify-center items-center flex-col i5:flex-row border-b border-cuisse-beau pb-1">
						<label htmlFor="formBobineWeight">Poid de la bobine en gramme : </label>
						<input className="bg-cuisse-dark" step="100" type="number" name="formBobineWeight" id="formBobineWeight" onChange={(e) => setFormBobineWeight(e.target.value)}/>
					</div>
					<div className="flex justify-center items-center flex-col i5:flex-row border-b border-cuisse-beau pb-1">
						<label htmlFor="formMaterial">Matériaux : </label>
						<input className="bg-cuisse-dark" type="text" name="formMaterial" id="formMaterial" onChange={(e) => setFormMaterial(e.target.value)}/>
					</div>
					<div className="flex justify-center items-center flex-col i5:flex-row border-b border-cuisse-beau pb-1">
						<label htmlFor="formQuality">Qualité : {formQuality}</label>
						<input className="bg-cuisse-dark" type="range" min="0" max="10" name="formQuality" id="formQuality" onChange={(e) => setFormQuality(e.target.value)}/>
					</div>
					<button onClick={handleSubmit} type="button" className="flex-1 mt-0 block md:inline-block appearance-none bg-cuisse-dark text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Ajouter</button>
				</form>	
			</div>
			
		</>
	);
};

export default FilamentsForm;
