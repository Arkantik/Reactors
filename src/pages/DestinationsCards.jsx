


import Card from "../components/Card";


export default function DestinationsCards({}) {
  return (
    <>
      <div className="mb-9 flex justify-center">
        <h1>Destinations</h1>
      </div>
      <div className=" flex flex-wrap justify-center gap-x-16 gap-y-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}