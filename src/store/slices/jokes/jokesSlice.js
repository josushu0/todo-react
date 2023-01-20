import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('jokes')) ?? []

export const jokesSlice = createSlice({
	name: 'jokes',
	initialState,
	reducers: {
		create(state, action) {
			const date = new Date()
			const createdAt = `${date.getHours() + 1}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

			state.push({
				taskId: action.payload.id,
				taskName: action.payload.setup,
				taskContent: action.payload.punchline,
				createdAt,
				updatedAt: createdAt,
				completed: false
			})
		},
		update(state, action) {
		},
		remove(state, action) {
		},
		complete(state, action) {
		},
		clearAll(state) {
		}
	}
})

export const { create, update, remove, clearAll, complete } = jokesSlice.actions

export default jokesSlice.reducer
