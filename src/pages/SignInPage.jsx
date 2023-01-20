import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/UserForm/Form"

function SignInPage() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	function signUp(formState) {
		dispatch(setUser(formState))	
		navigate('tasks')	
	}

	return (
		<div className="min-h-screen w-screen grid place-items-center text-gray-800">
			<Form signUp={signUp} />
		</div>	
	)
}

export default SignInPage
