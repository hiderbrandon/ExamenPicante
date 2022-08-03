import React from 'react';

const ComponenteHijo = ({texto}) => {
	console.log(`${texto} Renderizado`);
	return (
		<div className="caja">
			<p>{texto}</p>
		</div>
	);
}
 
export default React.memo(ComponenteHijo);