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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="h-full px-4 overflow-y-auto grid grid-cols-1 auto-rows-min md:grid-cols-3 md:gap-4">
      <h1 className="text-center md:col-span-3">
        {destination.cities ? destination.cities[0].name : null}
      </h1>

      <div className="md:col-span-2 grid grid-cols-2 gap-4">
        <img
          src={destination.cities ? destination.cities[0].picture.image1 : null}
          alt={destination.cities ? destination.cities[0].name + " 1" : null}
          className="w-full max-h-[360px] h-40 md:h-[30vw] object-cover rounded-lg"
        />
        <img
          src={destination.cities ? destination.cities[0].picture.image2 : null}
          alt={destination.cities ? destination.cities[0].name + " 2" : null}
          className="w-full max-h-[360px] h-40 md:h-[30vw] object-cover  rounded-lg"
        />
        <img
          src={destination.cities ? destination.cities[0].picture.image3 : null}
          alt={destination.cities ? destination.cities[0].name + " 3" : null}
          className="w-full max-h-[360px] h-40 md:h-[30vw] object-cover  rounded-lg"
        />
        <img
          src={destination.cities ? destination.cities[0].picture.image4 : null}
          alt={destination.cities ? destination.cities[0].name + " 4" : null}
          className="w-full max-h-[360px] h-40 md:h-[30vw] object-cover  rounded-lg"
        />
      </div>

      <article className="mt-4 md:mt-0 md:row-span-4 md:border-neutral-300 md:border md:p-4 md:rounded-lg md:shadow-lg">
        <h2 className="font-bold mb-2">
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
      </article>

      <article className="mt-4 md:col-span-2">
        <h2 className="font-bold mb-2">
          🎭 Things To Do In{" "}
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
      </article>

      <article className="my-4 md:col-span-2">
        <h2 className="font-bold mb-2">🛎️ Restaurants</h2>
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
      </article>
    </section>
  );
}
