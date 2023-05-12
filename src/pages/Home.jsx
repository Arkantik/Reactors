import axios from "axios";
import { useEffect, useState } from "react";

import infoDestinations from "../data/data";
import filterData from "../helpers/filterData";
import appendData from "../helpers/appendData";
import createMarkers from "../helpers/createMarkers";

import ReactGlobe from "react-globe";
// import markers from "../components/Globe-ts/markers";
import markerRenderer from "../components/Globe-ts/markerRenderer";
// import Details from "../components/Globe-jsx/details";

export default function Home() {
  const API = import.meta.env.VITE_API;

  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [customMarkers, setCustomMarkers] = useState([]);

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

  useEffect(() => {
    // save destinations data to local storage
    if (destinations.length > 0) {
      localStorage.setItem("destinations", JSON.stringify(destinations));
    }
    // create customMarkers from destinations data
    setCustomMarkers(createMarkers(destinations));
  }, [destinations]);

  const options = {
    markerRenderer,
  };

  return (
    <section className="h-full grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr_auto] md:grid-rows-[auto_1fr]">
      <h1 className="text-center md:col-span-2">
        Find your next holidays destination!
      </h1>
      {loading ? <p> Loading...</p> : null}
      {!loading && destinations ? (
        <div className="h-full grid grid-cols-1 md:col-span-2 md:flex md:flex-wrap grid-rows-[2fr_1fr] md:grid-rows-[auto]">
          <div className="flex justify-center items-center md:basis-2/3 md:h-3/5 md:self-center xl:h-4/5 2xl:f-full">
            <ReactGlobe
              globeBackgroundTexture={null}
              ambientLightIntensity="1"
              cameraAutoRotateSpeed="0.01"
              height="90%"
              width="100%"
              // markers={markers}
              markers={customMarkers}
              onClickMarker={(marker) => {
                alert("test!");
                dispatch({ type: "FOCUS", payload: marker });
              }}
              options={options}
            />
          </div>
          <div className="grow flex justify-center items-center md:basis-1/3">
            {/* <Details /> */}
            Location for the Modal to be displayed
          </div>
        </div>
      ) : null}
    </section>
  );
}
