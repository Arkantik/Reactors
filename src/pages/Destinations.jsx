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

  useEffect(() => {
    if (localStorage.getItem("destinations")) {
      const localDestinations = JSON.parse(
        localStorage.getItem("destinations")
      );
      setDestinations(localDestinations);
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
    }
  }, [destinations]);

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
              <NavLink to={`/destinations/${destination.id}`}>
                <Card destination={destination} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
