import { useState, useEffect } from "react";

// assets
import filterBtn from "/assets/icons/filter.svg";

export default function FilterBtn({ cards, setFilteredCards }) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState([]);

  useEffect(() => {
    if (cards) {
      const filtered = cards.filter((card) => {
        if (checkedFilter.length === 0) {
          return true;
        }
        return checkedFilter.includes(card.region);
      });
      setFilteredCards(filtered);
    }
  }, [checkedFilter, cards, setFilteredCards]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (e) => {
    const region = e.target.value;
    if (checkedFilter.includes(region)) {
      setCheckedFilter(checkedFilter.filter((h) => h !== region));
    } else {
      setCheckedFilter([...checkedFilter, region]);
    }
  };

  return (
    <div className="flex justify-end relative">
      <button
        type="button"
        className="text-gray-800 font-semibold py-1 rounded items-center z-1"
        onClick={handleToggle}
      >
        <img src={filterBtn} alt="filter button" />
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 top-10 z-10 w-48 py-2 rounded-md shadow-md`}
      >
        <li className="px-4 py-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Africa"
              checked={checkedFilter.includes("Africa")}
              onChange={handleFilterChange}
            />
            <span className="ml-2">Africa</span>
          </label>
        </li>
        <li className="px-4 py-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Americas"
              checked={checkedFilter.includes("Americas")}
              onChange={handleFilterChange}
            />
            <span className="ml-2">Americas</span>
          </label>
        </li>
        <li className="px-4 py-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Asia"
              checked={checkedFilter.includes("Asia")}
              onChange={handleFilterChange}
            />
            <span className="ml-2">Asia</span>
          </label>
        </li>
        <li className="px-4 py-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Europe"
              checked={checkedFilter.includes("Europe")}
              onChange={handleFilterChange}
            />
            <span className="ml-2">Europe</span>
          </label>
        </li>
        <li className="px-4 py-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Oceania"
              checked={checkedFilter.includes("Oceania")}
              onChange={handleFilterChange}
            />
            <span className="ml-2">Oceania</span>
          </label>
        </li>
      </ul>
    </div>
  );
}
