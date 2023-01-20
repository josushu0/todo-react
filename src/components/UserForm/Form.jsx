import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";

export function Form() {
	const [formState, setFormState] = useState({
		email: '',
		name: ''
	})
	const navigate = useNavigate()
	
	function handleSubmit(e) {
		e.preventDefault()
		console.log({
			...formState,
			userId: crypto.randomUUID()
		})
		navigate('/tasks')
	}
	
	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 w-full max-w-sm">
			<img src="./favicon.svg" className="h-20"/>
			<h1 className="text-2xl font-bold mb-4">Pocket Jokes</h1>
			<Input type="email" name="email" label="Email" value={formState} setValue={setFormState}/>
			<Input type="text" name="name" label="Name" value={formState} setValue={setFormState}/>
			<button
				type="submit"
				className="shadow w-full border-2 border-blue-500 px-3 py-2 mt-1 rounded-md transition-colors hover:bg-blue-500 hover:text-white focus:outline focus:outline-blue-500/50"
			>
				Sign In
			</button>
		</form>
	)
}
