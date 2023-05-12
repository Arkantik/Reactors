export default function Card({ destination }) {
  return (
    // <div className="group max-w-sm h-[300px] w-[24rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:drop-shadow-lg transition-all ease-in">
    <div className="group max-w-sm h-[250px] w-[20rem] md:h-[300px] md:w-[24rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:drop-shadow-lg transition-all ease-in">
      <div className=" card-image h-[166px] md:h-[200px] overflow-hidden">
        <img
          src={destination.cities[0].picture.image1}
          alt="big ben"
          className="rounded-t-lg group-hover:scale-105 transition-all ease-in"
        />
      </div>
      <div className="p-2.5 md:p-5 h-[125px] md:h-[150px]">
        <h5 className="text-xl mb-1 md:mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {destination.cities[0].name}
        </h5>

        <p className="mb-1 md:mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
          {destination.name.common}
        </p>
      </div>
    </div>
  );
}
