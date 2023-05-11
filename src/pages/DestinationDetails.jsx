export default function DestinationDetails() {
  return (
    <div className="container mx-auto px-4 py-8 md:flex flex-wrap">
      <h1 className="text-4xl font-bold mb-8">London</h1>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <img
          src="https://images.pexels.com/photos/2214035/pexels-photo-2214035.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="London 1"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://images.pexels.com/photos/813362/pexels-photo-813362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="London 2"
          className="w-full h-64 object-cover  rounded-lg"
        />
        <img
          src="https://images.pexels.com/photos/230794/pexels-photo-230794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="London 3"
          className="w-full h-64 object-cover  rounded-lg"
        />
        <img
          src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="London 4"
          className="w-full h-64 object-cover  rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-2">United Kingdom</h2>
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
          <h2 className="text-xl font-bold mb-2">Things to do in London</h2>
          <ul className="list-disc pl-4">
            <li>Buckingham Palace</li>
            <li>The London Eye</li>
            <li>Westminster Abbey</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Restaurants</h2>
        <ul className="list-disc pl-4">
          <li>Café Cecilia - 32 Andrews Rd, London E8 4RL</li>
          <li>Quo Vadis - 26-29 Dean Street, London W1D 3LL</li>
          <li>St John Marylebone - 98 Marylebone Ln, London W1U 2QA</li>
        </ul>
      </div>
    </div>
  );
}
