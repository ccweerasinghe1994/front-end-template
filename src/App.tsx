import './App.css';

function App() {
	return (
		<div
			className={
				'flex justify-between text-2xl pt-3 px-3 text-gray-600 pb-5 bg-amber-100'
			}>
			<h1 className={'font-primary'}>App Name</h1>
			<ul className={'flex gap-5 text-2xl font-secondary font-bold'}>
				<li className={'border-2 border-amber-300 rounded px-5'}>Home</li>
				<li className={'border-2 border-amber-300 rounded px-5'}>About</li>
				<li className={'border-2 px-5 border-amber-300 rounded'}>Contact</li>
			</ul>
			<button className={'bg-amber-300 px-6 font-secondary'}>Login</button>
		</div>
	);
}

export default App;
