import { createSlice } from '@reduxjs/toolkit';

	const stored = localStorage.getItem('storedUsers');
	const storedValue = JSON.parse(stored);

const initialState = {
	users: storedValue || []
}

const userListSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUserToList(state, action) {
			if (state.users.length < 10) {
				const newUser = action.payload;
				const existingUser = state.users.find(item => item.id === newUser.id);
				if (!existingUser) {
					state.users.push(newUser)
				}
				else {	
					console.log('user exists')
				}
			}
			else {
				const newUser = action.payload;
				const existingUser = state.users.find(item => item.id === newUser.id);
				if (!existingUser) {
					state.users.push(newUser)
				}
				else {
					console.log('user exists')
				};
				state.users.shift();
			}
		},
		removeUserFromList(state, action) {
			const id = action.payload;
			state.users = state.users.filter(item => item.id !== id);
		},
		removeAllUsers(state, action) {
			state.users.length = 0;
		}
	}
})

export const userListActions = userListSlice.actions;

export default userListSlice.reducer;