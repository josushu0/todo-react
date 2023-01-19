import { configureStore } from '@reduxjs/toolkit'
import jokesSlice from './slices/jokes/jokesSlice'

export default configureStore({
	reducer: {
		jokes: jokesSlice
	},
})

