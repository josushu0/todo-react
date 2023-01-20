import { complete, remove } from "../../store/slices/jokes/jokesSlice"
import { rerollJoke } from "../../store/slices/jokes/thunks"
import { useDispatch } from "react-redux"

function TasksPage({jokes, completed}) {
	const dispatch = useDispatch()

	return (
		<div className="flex-grow flex flex-col gap-2">
			{jokes.map((joke) =>
				(completed ? joke.completed : !joke.completed) &&
				<div key={joke.taskId} className="flex gap-4 justify-between items-center border-2 border-gray-300 rounded px-3 py-2 shadow">
					<input onChange={() => dispatch(complete(joke))} type="checkbox" checked={joke.completed} />
					<div className="flex-grow">
						<h3 className={joke.completed ? "line-through" : ""}>{joke.taskName}</h3>
						<p className={joke.completed ? "line-through" : ""}>{joke.taskContent}</p>
						<div className="flex justify-between text-xs mt-2">
							<span>Created: {joke.createdAt}</span>
							<span>Updated: {joke.updatedAt}</span>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						{!completed &&
							<button
								onClick={() => dispatch(rerollJoke(joke))}
								className="shadow border-2 border-blue-500 px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline focus:outline-blue-500/50"
							>
								Reroll
							</button>
						}
						<button
							onClick={() => dispatch(remove(joke))}
							className="shadow border-2 border-red-500 px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline focus:outline-red-500/50"
						>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default TasksPage
