import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

function App() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	// === slowFunctionに対しては useMemo 使う===
	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);

	// === オブジェクトの参照固定 ===
	// レンダリングの度に新しい参照が生成される。中身変わってないのに。
	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? 'black' : 'white',
			color: dark ? 'white' : 'black',
		};
	}, [dark]);
	useEffect(() => {
		console.log('Theme Changes');
		// 依存関係がオブジェクトだから、レンダリングの度に新しい参照先生成される
	}, [themeStyles]);

	return (
		<section>
			<input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
			<button onClick={() => setDark((prevDark) => !prevDark)}>ChangeTheme</button>
			<br />
			<div style={themeStyles}>{doubleNumber}</div>
		</section>
	);
}

// わざと遅い関数
const slowFunction = (num) => {
	// for (let i = 0; i <= 10000000000; i++) {}
	return num * 2;
};

export default App;
