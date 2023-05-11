import axios from "axios";

import { useEffect, useState } from "react";

import infoDestinations from "../data/data";
import filterData from "../helpers/filterData";
import appendData from "../helpers/appendData";

export default function Home() {
  const API = import.meta.env.VITE_API;

  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
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
      })
      .finally(() => setLoading(false));

    return function cleanUp() {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h1>Welcome Home</h1>
      {loading ? <p> Loading...</p> : null}
      {!loading && destinations ? <div> 3D Globe </div> : null}
    </section>
  );
}
