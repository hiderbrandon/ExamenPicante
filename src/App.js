import React from 'react';
import Encabezado from './Encabezado';
import ComponenteHijo from './ComponenteHijo';
import './estilos.css';
import { picante } from './hooks/picante';

const App = () => {

	let arreglo = [9, 8, 4, 5, 6, 7, 1, 9];
	let arregloRangos = picante(arreglo)


	return (
		<div className="grid">
			<Encabezado />
			{arregloRangos.map(comp => <ComponenteHijo key={comp.toString()} texto={comp} />)}

		</div>
	);
}

export default App;