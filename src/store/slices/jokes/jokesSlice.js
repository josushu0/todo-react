import { createSlice } from '@reduxjs/toolkit'

export const jokesSlice = createSlice({
	name: 'jokes',
	initialState: {},
	reducers: {
		create: (state) => {},
		update: (state) => {},
		remove: (state) => {}
	}
})

export const { create, update, remove } = jokesSlice.actions

export default jokesSlice.reducer
