import { useParams } from "react-router";
import { useEffect, useState } from "react";
export default function DestinationDetails() {
  const [destination, setDestination] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const destinations = JSON.parse(localStorage.getItem("destinations"));
    const filteredDestination = destinations.filter(
      (destination) => destination.id == id
    );
    setDestination(filteredDestination[0]);
  }, []);

  useEffect(() => console.log(destination), [destination]);

  return (
    <div className="container mx-auto px-4 py-8 md:flex flex-wrap">
      <h1 className="text-4xl font-bold mb-8">
        {destination.cities ? destination.cities[0].name : null}
      </h1>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <img
          src={destination.cities ? destination.cities[0].picture.image1 : null}
          alt={destination.cities ? destination.cities[0].name + " 1" : null}
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src={destination.cities ? destination.cities[0].picture.image2 : null}
          alt={destination.cities ? destination.cities[0].name + " 2" : null}
          className="w-full h-64 object-cover  rounded-lg"
        />
        <img
          src={destination.cities ? destination.cities[0].picture.image3 : null}
          alt={destination.cities ? destination.cities[0].name + " 3" : null}
          className="w-full h-64 object-cover  rounded-lg"
        />
        <img
          src={destination.cities ? destination.cities[0].picture.image4 : null}
          alt={destination.cities ? destination.cities[0].name + " 4" : null}
          className="w-full h-64 object-cover  rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-2">
            {destination.name ? destination.name.common : null}
          </h2>
          <p className="text-gray-700">
            The United Kingdom is a country located off the northwest coast of
            mainland Europe. It is made up of England, Scotland, Wales and
            Northern Ireland. London is the capital city of the United Kingdom.
          </p>{" "}
          <p className="text-gray-700 mt-4">
            The recommended time to visit London is between September and
            November.
          </p>
        </div>
        <div className="w-2/3 flex flex-col items-end">
          <h2 className="text-xl font-bold mb-2">
            Things to do in{" "}
            {destination.cities ? destination.cities[0].name : null}
          </h2>
          <ul className="list-disc pl-4">
            <li>
              {destination.cities ? destination.cities[0].visit.place1 : null}
            </li>
            <li>
              {destination.cities ? destination.cities[0].visit.place2 : null}
            </li>
            <li>
              {destination.cities ? destination.cities[0].visit.place3 : null}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Restaurants</h2>
        <ul className="list-disc pl-4">
          <li>
            {destination.cities
              ? destination.cities[0].restaurant.restaurant1
              : null}
          </li>
          <li>
            {destination.cities
              ? destination.cities[0].restaurant.restaurant2
              : null}
          </li>
          <li>
            {destination.cities
              ? destination.cities[0].restaurant.restaurant3
              : null}
          </li>
        </ul>
      </div>
    </div>
  );
}
