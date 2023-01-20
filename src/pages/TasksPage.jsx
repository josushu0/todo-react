import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getJokes } from "../store/slices/jokes/thunks"
import { clearAll } from "../store/slices/jokes/jokesSlice"
import TasksList from "../components/TasksList/List"
import EmptyList from "../components/TasksList/EmptyList"

function TasksPage() {
	const jokes = useSelector((state) => state.jokes)
	const user = useSelector((state) => state.user)
	console.log("User: ", user)
	const dispatch = useDispatch()

	useEffect(() => {
		localStorage.setItem('jokes', JSON.stringify(jokes))
	}, [jokes])

	return (
		<main className="min-h-screen w-screen text-gray-800 grid grid-cols-2 auto-rows-min my-8">
			<h1 className="col-span-2 row-span-1 text-center text-3xl mb-8">{user.name}'s jokes list</h1>
			<section className="col-span-1 row-span-1 flex flex-col ">
				<div className="max-w-xl mx-auto w-full">
					<div className="flex justify-between items-center mb-4">
						<h2 className="inline text-xl">Jokes to tell</h2>
						<button
							onClick={() => dispatch(getJokes())}
							className="shadow border-2 border-blue-500 px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline focus:outline-blue-500/50"
						>
							New
						</button>
					</div>
					{ jokes.length > 0 ?
					<TasksList jokes={jokes} completed={false} />
						:
					<EmptyList />
					}
				</div>
			</section>
			<section className="col-span-1 row-span-1 flex flex-col ">
				<div className="max-w-xl mx-auto w-full">
					<div className="flex justify-between items-center mb-4">
						<h2 className="inline text-xl">Jokes told</h2>
						<button
							onClick={() => dispatch(clearAll())}
							className="shadow border-2 border-red-500 px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline focus:outline-red-500/50"
						>
							Clear
						</button>
					</div>
					<TasksList jokes={jokes} completed={true} />
				</div>
			</section>
		</main>
	)
}

export default TasksPage
