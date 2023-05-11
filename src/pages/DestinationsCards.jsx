import Card from "../components/Card";
import FilterBtn from "../components/FilterBtn";
import SearchBar from "../components/SearchBar";

export default function DestinationsCards({}) {
  return (
		<section>
      <div className="mb-9 flex justify-center">
        <h1>Destinations</h1>
      </div>
    			<div className="flex gap-4 justify-center items-center">
			<SearchBar />
			<FilterBtn />
			</div>
      <div className=" flex flex-wrap justify-center gap-x-16 gap-y-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
		</section>
  );
}