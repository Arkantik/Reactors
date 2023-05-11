import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="h-full bg-cover bg-no-repeat bg-[url('/assets/images/background-404.jpg')] flex flex-col justify-center items-center gap-6 text-center">
      <div className="flex items-center gap-4">
        <p className="text-9xl">4</p>
        <div className="wrapper max-w-[150px] max-h-[150px]">
          <img
            src="/assets/images/cocktail.png"
            alt="cocktail"
            className="inline-block max-w-full object-cover"
          />
        </div>
        <p className="text-9xl">4</p>
      </div>
      <p className="md:text-2xl text-xl">Oops... Already on Vacations!</p>
      <p className="md:text-2xl text-xl">Maybe You Should Plan For Some Too?</p>
      <NavLink
        className="mx-auto flex w-fit rounded-full border-2 border-none bg-cyan-500 px-12 py-3 text-lg text-neutral-50"
        to="/"
      >
        Find My Next Trip
      </NavLink>
    </section>
  );
}
