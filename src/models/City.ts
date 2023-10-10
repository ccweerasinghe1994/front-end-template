import z from 'zod';

export const CitySchema = z.object({
	id: z.optional(z.string()),
	name: z.string(),
	country: z.string(),
	area: z.coerce.number(),
	population: z.coerce.number(),
});

export type TCitySchema = z.infer<typeof CitySchema>;
