import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userId: '',
		email: '',
		name: ''
	},
	reducers: {
		setUser(state, action) {
			state.userId = crypto.randomUUID()
			state.email = action.payload.email
			state.name = action.payload.name
		}
	}
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
