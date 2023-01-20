import SadFace from "../../assets/SadFace.svg"

function EmptyList() {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-4 mt-10">
			<img src={ SadFace } className="h-20" />
			<p className="">Get new Jokes by pressing the New button</p>
		</div>
	)
}

export default EmptyList
