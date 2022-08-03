import React from 'react';
import Encabezado from './Encabezado';
import ComponenteHijo from './ComponenteHijo';
import './estilos.css';

const App = () => {

	let arreglo = [9,8,4,5,6,7,1,9]
	

	return (
		<div className="grid">
			<Encabezado/>
			
			<ComponenteHijo texto={arreglo[0]} />
			<ComponenteHijo texto={arreglo[1]} />
			<ComponenteHijo texto={arreglo[2]} />
			<ComponenteHijo texto={arreglo[3]} />
			<ComponenteHijo texto={arreglo[4]} />
			<ComponenteHijo texto={arreglo[5]} />
			<ComponenteHijo texto={arreglo[6]} />
			<ComponenteHijo texto={arreglo[7]} />
			
		</div>
	);
}
 
export default App;