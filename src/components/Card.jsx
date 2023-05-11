export default function Card({ destination }) {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style={{ height: "300px", width: "24rem" }}
    >
      <div
        className="card-image"
        style={{ height: "200px", overflow: "hidden" }}
      >
        <img
          className="rounded-t-lg"
          src={destination.cities[0].picture.image1}
          alt="big ben"
        />
      </div>
      <div className="p-5" style={{ height: "150px" }}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {destination.cities[0].name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {destination.name.common}
        </p>
      </div>
    </div>
  );
}
