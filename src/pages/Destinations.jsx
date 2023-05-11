import Card from "../components/Card";
import FilterBtn from "../components/FilterBtn";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";

export default function Destinations() {
  const destinations = JSON.parse(localStorage.getItem("destinations"));
  return (
    <section className="mb-10">
      <h1 className="mb-2 flex justify-center">Destinations</h1>
      <div className="flex gap-4 justify-center items-center mb-2">
        <SearchBar />
        <FilterBtn />
      </div>

      <ul className="flex flex-wrap justify-center gap-8">
        {destinations.map((destination, index) => {
          return (
            <li key={index}>
              <Card destination={destination} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
