import { create, update } from "./jokesSlice"

export const getJokes = () => {
	return async (dispatch) => {
		const res = await fetch('https://official-joke-api.appspot.com/jokes/random')
		const data = await res.json()
		dispatch(create(data))
	}
}

export const rerollJoke = (joke) => {
	return async (dispatch) => {
		const res = await fetch('https://official-joke-api.appspot.com/jokes/random')
		const data = await res.json()
		const payload = {
			data,
			joke
		}
		dispatch(update(payload))
	}
}
