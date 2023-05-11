import DevCard from "../components/DevCard";
import DestinationsFilter from "../components/DestinationsFilter";

export default function DestinationsCards({}) {
  return (
    <>
      <div className="mb-9 flex justify-center">
        <h1>Destinations</h1>
      </div>
      <DestinationsFilter />
      <div className=" flex flex-wrap justify-center gap-x-16 gap-y-16">
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />
      </div>
    </>
  );
}
