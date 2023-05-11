import Card from "../components/Card";
import FilterBtn from "../components/FilterBtn";
import SearchBar from "../components/SearchBar";

export default function DestinationsCards() {
	return (
		<section>
			<div className="flex gap-4 justify-center items-center">
			<SearchBar />
			<FilterBtn />
			</div>
			<Card />
		</section>
	);
}
