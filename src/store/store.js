import { configureStore } from '@reduxjs/toolkit'
import jokesReducer from './slices/jokes/jokesSlice'
import userReducer from './slices/user/userSlice'

export default configureStore({
	reducer: {
		jokes: jokesReducer,
		user: userReducer
	},
})

