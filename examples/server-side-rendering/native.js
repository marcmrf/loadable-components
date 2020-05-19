import React, { useState } from 'react'

export default () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<button onClick={() => console.log('click')}>press me</button>
			<div onClick={() => setCounter(counter + 1)}>
				click me too! {counter}
			</div>
		</div>
	);
};

export const pepe = 'lelelel';