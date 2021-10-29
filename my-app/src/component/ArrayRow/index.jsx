import React from 'react';

import './styles.css';


const ArrayRow = props => (
	<React.Fragment>
		<tr className="hover:bg-cuisse">
			<td className="brand tracking-tighter ipho:tracking-normal px-0 tbl:px-1 sm:px-3 text-center ">{props.brand}</td>
			<td className="price tracking-tighter ipho:tracking-normal px-0 tbl:px-1 sm:px-3 text-center ">{props.price}</td>
			<td className="bobine_price tracking-tighter ipho:tracking-normal px-0 tbl:px-1 sm:px-3 text-center ">{props.bobine_price}</td>
			<td className="material tracking-tighter ipho:tracking-normal px-0 tbl:px-1 sm:px-3 text-center ">{props.material}</td>
			<td className="bobine_weight tracking-tighter ipho:tracking-normal px-0 tbl:px-1 sm:px-3 text-center ">{props.bobine_weight}</td>
			<td className="quality diagonal-fractions tracking-tighter ipho:tracking-normal px-0 tbl:px-1 sm:px-3 text-center ">{props.quality}/10</td>
	 </tr>
	</React.Fragment>
);

export default ArrayRow;
