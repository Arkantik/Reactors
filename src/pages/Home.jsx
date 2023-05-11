import { useState } from "react";
import useFetch from "../helpers/useFetch";
import infoDestinations from "../data/data";

export default function Home() {
  const API = import.meta.env.VITE_API;
  const [destinations, setDestinations] = useState([]);

  // 1. fetch data from API (custom hook)
  const { data, loading } = useFetch(API + "/all");
  if (!loading) console.log(data);

  // 2. filter data to retain only desired destinations
  console.log(infoDestinations);

  //get country name
  console.log(infoDestinations[0].name.common);
  //get city name
  console.log(infoDestinations[0].cities[0].cityName);

  return (
    <section>
      <h1>Welcome home</h1>
      {loading ? <p> Loading...</p> : null}
      {!loading && data ? <div> 3D Globe </div> : null}
    </section>
  );
}
