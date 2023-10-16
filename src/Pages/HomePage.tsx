import CityForm from '../Components/CityForm/CityForm.tsx';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { increment } from '../features/counter/counterSlice.ts';
import Table from '../Components/Table/Table.tsx';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const value = useAppSelector((state) => state.counter.value);

	return (
		<div>
			<h1>{value}</h1>
			<button onClick={() => dispatch(increment())}>count up</button>
			<br />
			<h1 className="text-center text-3xl">create a city record</h1>
			<CityForm />
			<Table />
		</div>
	);
};

export default HomePage;
