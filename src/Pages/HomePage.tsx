import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { increment } from '../features/counter/counterSlice.ts';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const value = useAppSelector((state) => state.counter.value);
	return (
		<div>
			<h1>{value}</h1>
			<button onClick={() => dispatch(increment())}>count up</button>
		</div>
	);
};

export default HomePage;
