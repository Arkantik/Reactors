import Card from "../components/Card";
import FilterBtn from "../components/FilterBtn";
import SearchBar from "../components/SearchBar";

export default function DestinationsCards() {
  return (
    <section>
      <h1 className="mb-2 flex justify-center">Destinations</h1>
      <div className="flex gap-4 justify-center items-center mb-2">
        <SearchBar />
        <FilterBtn />
      </div>
      <ul className=" flex flex-wrap justify-center gap-8">
        {[...Array(7)].map((destination, index) => (
          <li key={index}>
            <Card />
          </li>
        ))}
      </ul>
    </section>
  );
}
