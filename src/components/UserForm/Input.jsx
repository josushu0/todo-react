export function Input({ type, name, label, value, setValue }) {
	function onInputChange({target}) {
		setValue({
			...value,
			[target.name]: target.value
		})
	}

	return (
		<div className="w-full">
			<label htmlFor={name} className="block">{label}</label>
			<input
				type={type}
				name={name}
				id={name}
				onChange={onInputChange}
				autoComplete="off"
				required
				className="shadow border-gray-300 rounded-md w-full border-2 px-3 py-2 outline-blue-500/50 outline-2 focus:outline focus:border-blue-400"
			/>
		</div>
	)
}
