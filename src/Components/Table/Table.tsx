import { useGetCitiesQuery } from '../../services/City.service.ts';

const Table = () => {
	// get the data from the redux toolkit api hook
	const { data, isFetching, error, isError, isSuccess } = useGetCitiesQuery();

	if (isFetching) return <div>loading...</div>;
	if (isError) return <div>error</div>;
	return (
		<div className="relative overflow-x-auto mt-10 px-2 mb-2">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							City Name
						</th>
						<th scope="col" className="px-6 py-3">
							country
						</th>
						<th scope="col" className="px-6 py-3">
							population
						</th>
						<th scope="col" className="px-6 py-3">
							area
						</th>
					</tr>
				</thead>
				<tbody>
					{data?.data &&
						data.data.map((city) => (
							<tr
								key={city.id}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{city.name}
								</th>
								<td className="px-6 py-4">{city.country}</td>
								<td className="px-6 py-4">{city.area}</td>
								<td className="px-6 py-4">{city.population}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
