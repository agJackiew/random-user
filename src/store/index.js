import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user-slice';
import usersListReducer from './userList-slice';

const store = configureStore({
	reducer: {
		user: userReducer,
		usersList: usersListReducer
	}
});

export default store;	