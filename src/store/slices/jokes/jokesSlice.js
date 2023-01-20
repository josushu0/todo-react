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
			const date = new Date()
			const updatedAt = `${date.getHours() + 1}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

			const newJoke = {
				taskId: action.payload.data.id,
				taskName: action.payload.data.setup,
				taskContent: action.payload.data.punchline,
				createdAt: action.payload.joke.createdAt,
				updatedAt,
				completed: action.payload.joke.completed
			}

			state = state.map((joke) => {
				if(JSON.stringify(joke) === JSON.stringify(action.payload.joke)) {
					return newJoke
				}
				return joke
			})
			return state
		},
		remove(state, action) {
			state = state.filter((joke) => JSON.stringify(joke) !== JSON.stringify(action.payload))
			return state
		},
		complete(state, action) {
		},
		clearAll(state) {
		}
	}
})

export const { create, update, remove, clearAll, complete } = jokesSlice.actions

export default jokesSlice.reducer
