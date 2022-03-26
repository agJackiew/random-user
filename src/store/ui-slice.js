import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { isAdded: false, notification: null };

const uiSlice = createSlice({
	name: 'ui',
	initialState: initialUiState,
	reducers: {
		toggleAdded(state) {
			state.isAdded = !state.isAdded;
		},
		setAddedTrue(state) {
			state.isAdded = true;
		},
		setAddedFalse(state) {
			state.isAdded = false;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message
			}
		}
	}
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;