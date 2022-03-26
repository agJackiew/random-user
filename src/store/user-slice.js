import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		id: '',
		firstName: '',
		lastName: '',
		nationality: '',
		regDate: '',
		image: null,
		address: {
			street: '',
			city: '',
			state: '',
			postcode: '',
			country: ''
		}
	}
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUser(state, action) {
			state.user.id = action.payload.id
			state.user.firstName = action.payload.firstName;
			state.user.lastName = action.payload.lastName;
			state.user.nationality = action.payload.nationality;
			state.user.regDate = action.payload.regDate;
			state.user.image = action.payload.image;
			state.user.address = {
				street: action.payload.address.street,
				city: action.payload.address.city,
				state: action.payload.address.state,
				postcode: action.payload.address.postcode,
				country: action.payload.address.country
			}
		}
	} 
})
	
export const userActions = userSlice.actions;

export default userSlice.reducer;