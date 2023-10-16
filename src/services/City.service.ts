// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCitySchema } from '../models/City.ts';
import { TResponse } from './types.ts';

// Define a service using a base URL and expected endpoints
export const cityApi = createApi({
	reducerPath: 'cityApi',
	tagTypes: ['City'],
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
	endpoints: (build) => ({
		addCity: build.mutation<TCitySchema, Partial<TCitySchema>>({
			query: (body) => ({
				url: '/city',
				method: 'POST',
				body,
			}),
		}),
		getCities: build.query<TResponse<TCitySchema>, void>({
			query: () => '/city',
			transformResponse: (baseQueryReturnValue: { data: TCitySchema[] }) =>
				baseQueryReturnValue.data,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddCityMutation, useGetCitiesQuery } = cityApi;
