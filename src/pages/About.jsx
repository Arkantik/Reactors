// import { useState, useEffect } from "react";
import DevCard from "../components/DevCard";
import devTeam from "../data/devTeam.json";

import Background from "../../public/assets/images/background-1.png";

export default function About() {
	const developers = devTeam;

	return (
		<section
			className="h-full bg-cover bg-no-repeat px-4"
			style={{ backgroundImage: `url(${Background})` }}>
			<div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] overflow-y-auto">
				<h1 className="text-center">The Reactors Team 🚀 </h1>
				<ul className="mb- flex flex-wrap justify-center gap-[3vw] self-center">
					{developers.map((developer) => (
						<li
							key={developer.id}
							className="flex h-fit w-[200px] max-w-[250px] flex-col items-center gap-4 overflow-hidden rounded-lg bg-neutral-50/30 pb-4 drop-shadow-xl backdrop-blur-md md:w-[250px]">
							<DevCard {...developer} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
