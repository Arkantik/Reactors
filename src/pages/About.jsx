// import { useState, useEffect } from "react";
import DevCard from "../components/DevCard";
import devTeam from "../data/devTeam.json";

export default function About() {
  const developers = devTeam;
  return (
    <>
      <h1 className="text-center">The Reactors Team 🚀 </h1>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        {developers.map((developer) => (
          <li
            key={developer.id}
            className="flex flex-col gap-4 items-center max-w-[250px] rounded-lg drop-shadow-xl bg-slate-400 pb-4 overflow-hidden h-fit"
          >
            <DevCard {...developer} />
          </li>
        ))}
      </ul>
    </>
  );
}
