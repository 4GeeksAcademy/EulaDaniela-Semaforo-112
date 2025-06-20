
import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
	const [colorResaltado, setColorResaltado] = useState(null);
	const handleClick = (color) => {
		setColorResaltado(color);
	}

	return (
		<div className="poste-container">
			<div className="poste m-auto "></div>
			<div className="container semaforo" style={{ width: '120px' }}>
				<div className="row justify-content-center">
					<div onClick={() => handleClick("Red")} className={`Red rounded-circle bg-danger col-sm-4 mt-2 ${colorResaltado === "Red" ? "activo" : ""}`} style={{ width: '75px', height: '75px' }}></div>
					<div onClick={() => handleClick("Yellow")} className={`Yellow rounded-circle bg-warning col-sm-4 mt-2 ${colorResaltado === "Yellow" ? "activo" : ""}`} style={{ width: '75px', height: '75px' }}></div>
					<div onClick={() => handleClick("Green")} className={`Green rounded-circle bg-success col-sm-4 mt-2 ${colorResaltado === "Green" ? "activo" : ""}`} style={{ width: '75px', height: '75px' }}></div>
				</div>
			</div>
		</div>




	);
};

export default Home;