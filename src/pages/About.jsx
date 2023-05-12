// import { useState, useEffect } from "react";
import DevCard from "../components/DevCard";
import devTeam from "../data/devTeam.json";

export default function About() {
  const developers = devTeam;

  return (
    <section className="h-full bg-cover bg-no-repeat bg-[url('/assets/images/background-about.png')] px-4">
      <div className="h-full overflow-y-auto grid grid-cols-1 grid-rows-[auto_1fr]">
        <h1 className="text-center">The Reactors Team 🚀 </h1>
        <ul className="flex flex-wrap gap-[3vw] justify-center mb- self-center">
          {developers.map((developer) => (
            <li
              key={developer.id}
              className="w-[200px] md:w-[250px] flex flex-col gap-4 items-center max-w-[250px] rounded-lg drop-shadow-xl bg-neutral-50/30 backdrop-blur-md pb-4 overflow-hidden h-fit"
            >
              <DevCard {...developer} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
