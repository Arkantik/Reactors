export default function DevCard({ firstname, img }) {
  return (
    <>
      <img
        src={img}
        alt={firstname.toLowerCase()}
        className="h-[224px] md:h-[280px] object-cover w-full"
      />
      <h2>{firstname}</h2>
    </>
  );
}
