import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../components/Card";
import FilterBtn from "../components/FilterBtn";
import SearchBar from "../components/SearchBar";

import filterData from "../helpers/filterData";
import infoDestinations from "../data/data";
import appendData from "../helpers/appendData";

export default function Destinations() {
	const [destinations, setDestinations] = useState([]);
	const [currentDestinations, setCurrentDestinations] = useState([]);
	const [originalDestinations, setOriginalDestinations] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("destinations")) {
			const localDestinations = JSON.parse(
				localStorage.getItem("destinations")
			);
			setDestinations(localDestinations);
			setOriginalDestinations(localDestinations);
		} else {
			const API = import.meta.env.VITE_API;

			const controller = new AbortController();
			const { signal } = controller;
			let filteredCountries = [],
				updatedCountries = [];
			// 1. fetch raw countries data from API (custom hook)
			axios
				.get(API + "/all", { signal })
				.then((res) => {
					//2. filter data to only retain countries matching the list of desired destinations
					filteredCountries = filterData(res.data, infoDestinations, "country");
					// 3. add supplementary info and id to filtered API data
					updatedCountries = appendData(
						filteredCountries,
						infoDestinations,
						"cities"
					);
					// 4. store filtered and updated data into a state
					setDestinations(updatedCountries);
					setOriginalDestinations(updatedCountries);
				})
				.catch((err) => {
					console.error(`Error when retrieving data from API: ${err.message}`);
				});

			return function cleanUp() {
				controller.abort();
			};
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}
	}, []);

	useEffect(() => {
		if (destinations.length > 0) {
			localStorage.setItem("destinations", JSON.stringify(destinations));
			setCurrentDestinations(destinations);
		}
	}, [destinations]);

	const filterDestinations = (checks, regions) => {
		// filter checked regions
		const checkedRegions = regions.filter((region, index) => checks[index]);
		if (checkedRegions.length > 0) {
			// clone the current state
			const clonedDestinations = [...destinations];
			// filter only destinations with checked boxes
			const filteredDestinations = clonedDestinations.filter((el) =>
				checkedRegions.includes(el.region)
			);
			// update the state
			setCurrentDestinations(filteredDestinations);
		} else {
			setCurrentDestinations(destinations);
		}
	};

	const handleSearch = (e) => {
		const search = e.target.value.toLowerCase();
		const filteredDestinations = originalDestinations.filter((destination) => {
			const lowerCaseName = destination.cities[0].name.toLowerCase();
			return lowerCaseName.includes(search);
		});
		setDestinations(filteredDestinations);
	};

	return (
		<section className="mb-10 flex h-full flex-col px-4">
			<h1 className="flex justify-center">Destinations</h1>
			<div className="mb-8 flex items-center justify-center gap-4">
				<SearchBar handleSearch={handleSearch} />
				<FilterBtn filterDestinations={filterDestinations} />
			</div>
			<ul className="flex flex-wrap justify-center gap-16 overflow-y-auto">
				{currentDestinations.map((destination, index) => {
					return (
						<li key={index}>
							<NavLink to={`/holifun/destinations/${destination.id}`}>
								<Card destination={destination} />
							</NavLink>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
