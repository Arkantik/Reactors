import axios from "axios";
import ReactGlobe from "react-globe";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import infoDestinations from "../data/data";
import filterData from "../helpers/filterData";
import appendData from "../helpers/appendData";
import createMarkers from "../helpers/createMarkers";

import Modal from "../components/Modal";
import markerRenderer from "../components/Globe-ts/markerRenderer";

export default function Home() {
  /**
   * CONSTANTS
   */
  const API = import.meta.env.VITE_API;
  const navigate = useNavigate();
  const options = {
    markerRenderer,
  };
  /**
   * STATES
   */
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [customMarkers, setCustomMarkers] = useState([]);
  const [currentDestination, setCurrentDestination] = useState({});

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

  /**
   * BEHAVIORS
   */
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleConfirmModal = () => {
    // redirect to the appropriate page
    navigate(`/destinations/${currentDestination.id}`);
    // close the modal
    handleCloseModal();
  };
  const handleClickMarker = (marker) => {
    if (destinations)
      setCurrentDestination(destinations.find((el) => el.id === marker.id));
  };

  /**
   * RENDER
   */
  return (
    <section className="grid h-full grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-cols-2 md:grid-rows-[auto_1fr]">
      <h1 className="text-center md:col-span-2">
        Find your next holidays destination!
      </h1>

      {loading ? <p> Loading...</p> : null}

      {!loading && destinations ? (
        <div className="grid h-full grid-cols-1 grid-rows-[2fr_1fr] md:col-span-2 md:flex md:grid-rows-[auto] md:flex-wrap">
          <div className="flex items-center justify-center md:h-3/5 md:basis-2/3 md:self-center xl:h-4/5 2xl:h-full">
            <ReactGlobe
              globeBackgroundTexture={null}
              ambientLightIntensity="1"
              cameraAutoRotateSpeed="0.01"
              height="90%"
              width="100%"
              markers={customMarkers}
              onClickMarker={(marker) => {
                handleClickMarker(marker);
                handleOpenModal();
                dispatch({ type: "FOCUS", payload: marker });
              }}
              options={options}
            />
          </div>

          {currentDestination.name ? (
            <div className="relative flex grow items-center justify-center md:basis-1/3">
              <Modal
                open={isModalOpen}
                label="Modal"
                overlayCSS="modal__overlay"
                contentCSS="modal__content"
                closeModal={handleCloseModal}
              >
                <h2>{currentDestination.capital}</h2>
                <p>
                  {currentDestination.flag}
                  {currentDestination.name.common} ({currentDestination.cioc})
                </p>
                <p>
                  {currentDestination.region} | {currentDestination.subregion}
                </p>
                <p>
                  lat:
                  {currentDestination.latlng[0]} | long:
                  {currentDestination.latlng[1]}
                </p>
                <button
                  type="button"
                  className="mt-2 rounded-full border px-4 py-2 text-sm"
                  onClick={handleConfirmModal}
                >
                  See More
                </button>
                <button
                  type="button"
                  className="absolute right-2 top-2"
                  onClick={handleCloseModal}
                >
                  ❌
                </button>
              </Modal>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
