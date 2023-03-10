import { useState } from "react";
import { Input } from "./Input";

export function Form({signUp}) {
	const [formState, setFormState] = useState({
		email: '',
		name: ''
	})
	
	function handleSubmit(e) {
		e.preventDefault()
		signUp(formState)
	}
	
	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 w-full max-w-sm px-4 sm:px-0">
			<img src="./favicon.svg" className="h-20"/>
			<h1 className="text-2xl font-bold mb-4">Pocket Jokes</h1>
			<Input type="email" name="email" label="Email" value={formState} setValue={setFormState}/>
			<Input type="text" name="name" label="Name" value={formState} setValue={setFormState}/>
			<button
				type="submit"
				className="shadow w-full border-2 px-3 py-2 mt-1 rounded-md transition-colors bg-blue-500 text-white hover:bg-blue-600  focus:outline focus:outline-blue-500/50"
			>
				Sign In
			</button>
		</form>
	)
}
