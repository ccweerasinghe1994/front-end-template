import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.ts';
import { cityApi } from '../services/City.service.ts';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[cityApi.reducerPath]: cityApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(cityApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
