import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: []
}

const userListSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUserToList(state, action) {
			if (state.users.length < 10) {
				const newUser = action.payload;
				console.log(newUser);
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
		}
	}
})

export const userListActions = userListSlice.actions;

export default userListSlice.reducer;