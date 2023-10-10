import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CitySchema, TCitySchema } from '../../models/City.ts';
import { useEffect } from 'react';
import { useAddCityMutation } from '../../services/City.service.ts';

const CityForm = () => {
	const [addCity, cityResults] = useAddCityMutation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm<TCitySchema>({
		resolver: zodResolver(CitySchema),
	});
	const onSubmit: SubmitHandler<TCitySchema> = (data) => {
		try {
			CitySchema.parse(data);
			void addCity(data);
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e);
				throw new Error(e.message);
			}
		}
	};
	console.log(errors);
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				name: '',
				country: '',
				population: 0,
				area: 0,
			});
		}
	}, [isSubmitSuccessful, reset]);
	const loadingContent = (
		<>
			<svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
			Processing...
		</>
	);
	return (
		<form
			className="mt-8 mx-auto border-lime-100 border-x-2 border-y-4 max-w-screen-sm p-8 rounded-md grid grid-cols-4 gap-x-1 gap-y-4 text-2xl"
			onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="city">city</label>
			<input
				className="col-span-3"
				type="text"
				id="name"
				{...register('name')}
			/>
			{errors?.name && (
				<p className="bg-yellow-100 text-red-500 italic col-span-4">
					{errors.name?.message}
				</p>
			)}
			<label htmlFor="country">country</label>
			<input
				className="col-span-3"
				type="text"
				id="country"
				{...register('country')}
			/>
			{errors?.country && (
				<p className="bg-yellow-100 text-red-500 italic col-span-4">
					{errors.country?.message}
				</p>
			)}
			<label htmlFor="population">population</label>
			<input
				className="col-span-3"
				type="number"
				id="population"
				{...register('population')}
			/>
			{errors?.population && (
				<p className="bg-yellow-100 text-red-500 italic col-span-4">
					{errors.population?.message}
				</p>
			)}
			<label htmlFor="area">area</label>
			<input
				className="col-span-3"
				type="number"
				id="area"
				{...register('area')}
			/>
			{errors?.area && (
				<p className="bg-yellow-100 text-red-500 italic col-span-4">
					{errors.area?.message}
				</p>
			)}
			<button
				className="col-span-4 bg-blue-300 rounded-lg py-2 mt-6"
				type="submit">
				{cityResults.isLoading ? loadingContent : 'submit'}
			</button>
			<button
				onClick={() => reset()}
				className={'col-span-4 bg-blue-300 rounded-lg py-2 mt-6 animate-pulse'}
				type="reset">
				reset
			</button>
		</form>
	);
};

export default CityForm;
