import { useSelector } from "react-redux"

function NavBar({logOut}) {
	const user = useSelector((state) => state.user)

	function handleLogout() {
		logOut()
	}

	return (
		<div className="col-span-2 row-span-1 mb-8 bg-blue-400 text-white shadow">
			<div className="mx-4 my-3 flex justify-between items-center">
				<div className="flex items-center gap-2 text-lg">
					<img src="./favicon.svg" />
					<h1>Pocket Jokes</h1>
				</div>
				<div className="flex items-center gap-2">
					<h1 className="text-xl capitalize">{user.name || "User"}</h1>
					<button onClick={() => handleLogout()}
						className="flex items-center justify-center rounded-full bg-blue-700 h-10 w-10 shadow hover:bg-blue-600 focus:outline focus:outline-blue-700/50">
						<span className="sr-only">Logout</span>
						<svg
							xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-5 fill-white">
							<g id="feLogout0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
								<g id="feLogout1" fill="currentColor">
									<path id="feLogout2" d="M3 5c0-1.1.9-2 2-2h8v2H5v14h8v2H5c-1.1 0-2-.9-2-2V5Zm14.176 6L14.64 8.464l1.414-1.414l4.95 4.95l-4.95 4.95l-1.414-1.414L17.176 13H10.59v-2h6.586Z"/>
								</g>
							</g>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

export default NavBar
