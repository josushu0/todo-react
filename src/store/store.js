import { configureStore } from '@reduxjs/toolkit'
import jokesReducer from './slices/jokes/jokesSlice'

export default configureStore({
	reducer: {
		jokes: jokesReducer
	},
})

