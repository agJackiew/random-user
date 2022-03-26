import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user-slice';
import usersListReducer from './userList-slice';
import uiReducer from './ui-slice';

const store = configureStore({
	reducer: {
		user: userReducer,
		usersList: usersListReducer,
		ui: uiReducer
	}
});

export default store;	