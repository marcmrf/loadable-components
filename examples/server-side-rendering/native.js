import React, { useState } from 'react'

export default () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<button onClick={() => console.log('yeaaaaah')}>press me</button>
			<div onClick={() => setCounter(counter + 1)}>
				wololoooooo {counter}
			</div>
		</div>
	);
};

export const pepe = 'lelelel';