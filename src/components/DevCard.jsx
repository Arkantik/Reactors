export default function DevCard({ firstname, lastname, img }) {
  return (
    <>
      <img
        src={img}
        alt={firstname.toLowerCase()}
        className="h-[280px] object-cover"
      />
      <h2>
        {firstname} {lastname}
      </h2>
    </>
  );
}
