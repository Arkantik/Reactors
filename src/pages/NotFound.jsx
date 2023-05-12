import { NavLink } from "react-router-dom";

import Background from "../../public/assets/images/background-404.jpg";

export default function NotFound() {
	return (
		<section
			className="flex h-full flex-col items-center justify-center gap-6 bg-cover bg-no-repeat text-center"
			style={{ backgroundImage: `url(${Background})` }}>
			<div className="flex items-center gap-4">
				<p className="text-9xl">4</p>
				<div className="wrapper max-h-[150px] max-w-[150px]">
					<img
						src="/assets/images/cocktail.png"
						alt="cocktail"
						className="inline-block max-w-full object-cover"
					/>
				</div>
				<p className="text-9xl">4</p>
			</div>
			<p className="text-xl md:text-2xl">Oops... Already on vacations ⛱️ </p>
			<p className="text-xl md:text-2xl">What about you?</p>
			<NavLink
				className="mx-auto flex w-fit rounded-full border-2 border-none bg-cyan-500 px-12 py-3 text-lg text-neutral-50"
				to="/">
				Find A Destination
			</NavLink>
		</section>
	);
}
