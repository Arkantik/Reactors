import { useState, useEffect } from "react";

import Label from "./Label";

import filterBtn from "/assets/icons/filter.svg";

export default function FilterBtn({ filterDestinations }) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState([]);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    setCheckedFilter(Array(regions.length).fill(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // pass values back to the parent to filter the locations to be displayed
    filterDestinations(checkedFilter, regions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedFilter]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (region, isRegionChecked) => {
    // clone current state
    const clonedCheckedFilter = [...checkedFilter];
    // modify the copy
    const updatedCheckedFiltrer = clonedCheckedFilter.map((el, index) =>
      index === regions.indexOf(region) ? isRegionChecked : el
    );
    // update the state
    setCheckedFilter(updatedCheckedFiltrer);
  };

  return (
    <div className="relative flex justify-end">
      <button
        type="button"
        className="z-1 items-center rounded py-1 font-semibold text-gray-800"
        onClick={handleToggle}
      >
        <img src={filterBtn} alt="filter button" />
      </button>
      <ul
        className={`${
          isOpen ? "block md:flex md:items-center" : "hidden"
        } absolute right-0 top-0 z-10 translate-y-12 rounded-md bg-neutral-500/60 py-2 text-neutral-50 shadow-md backdrop-blur-md md:bottom-0 md:left-0 md:right-full md:w-fit md:translate-x-12 md:translate-y-0 md:text-neutral-900`}
      >
        {regions.map((region, index) => (
          <li key={index} className="px-4 py-2">
            <Label region={region} handleFilterChange={handleFilterChange} />
          </li>
        ))}
      </ul>
    </div>
  );
}
