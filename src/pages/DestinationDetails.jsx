import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function DestinationDetails() {
	const [destination, setDestination] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const destinations = JSON.parse(localStorage.getItem("destinations"));
		const filteredDestination = destinations.filter(
			(destination) => destination.id == id
		);
		console.log(filteredDestination);
		setDestination(filteredDestination[0]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="grid h-full auto-rows-min grid-cols-1 overflow-y-auto px-4 md:grid-cols-3 md:gap-4">
			<h1 className="text-center md:col-span-3">
				{destination.cities ? destination.cities[0].name : null}
			</h1>

			<div className="grid grid-cols-2 gap-4 md:col-span-2">
				<img
					src={destination.cities ? destination.cities[0].picture.image1 : null}
					alt={destination.cities ? destination.cities[0].name + " 1" : null}
					className="h-40 max-h-[360px] w-full rounded-lg object-cover md:h-[30vw]"
				/>
				<img
					src={destination.cities ? destination.cities[0].picture.image2 : null}
					alt={destination.cities ? destination.cities[0].name + " 2" : null}
					className="h-40 max-h-[360px] w-full rounded-lg object-cover md:h-[30vw]"
				/>
				<img
					src={destination.cities ? destination.cities[0].picture.image3 : null}
					alt={destination.cities ? destination.cities[0].name + " 3" : null}
					className="h-40 max-h-[360px] w-full rounded-lg object-cover md:h-[30vw]"
				/>
				<img
					src={destination.cities ? destination.cities[0].picture.image4 : null}
					alt={destination.cities ? destination.cities[0].name + " 4" : null}
					className="h-40 max-h-[360px] w-full rounded-lg object-cover md:h-[30vw]"
				/>
			</div>

			<article className="mt-4 md:row-span-4 md:mt-0 md:rounded-lg md:border md:border-neutral-300 md:p-4 md:shadow-lg">
				<h2 className="mb-2 font-bold">
					{destination.name ? destination.name.common : null}
				</h2>
				<img
					src={destination.cities ? destination.cities[0].flag : null}
					alt="flag"
					className="mb-8"
				/>
				<p
					className="text-gray-700"
					dangerouslySetInnerHTML={{
						__html: destination.cities
							? destination.cities[0].description
							: null,
					}}
				/>
			</article>

			<article className="mt-4 md:col-span-2">
				<h2 className="mb-2 font-bold">
					🎭 Things To Do In{" "}
					{destination.cities ? destination.cities[0].name : null}
				</h2>
				<ul className="list-disc pl-4">
					<li>
						{destination.cities ? destination.cities[0].visit.place1 : null}
					</li>
					<li>
						{destination.cities ? destination.cities[0].visit.place2 : null}
					</li>
					<li>
						{destination.cities ? destination.cities[0].visit.place3 : null}
					</li>
				</ul>
			</article>

			<article className="my-4 md:col-span-2">
				<h2 className="mb-2 font-bold">🛎️ Restaurants</h2>
				<ul className="list-disc pl-4">
					<li>
						{destination.cities
							? destination.cities[0].restaurant.restaurant1
							: null}
					</li>
					<li>
						{destination.cities
							? destination.cities[0].restaurant.restaurant2
							: null}
					</li>
					<li>
						{destination.cities
							? destination.cities[0].restaurant.restaurant3
							: null}
					</li>
				</ul>
			</article>
		</section>
	);
}
