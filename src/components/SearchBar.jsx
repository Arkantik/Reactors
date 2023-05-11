// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <form>
      <label className="searchbar">
        <input type="text" placeholder="Destinations" name="search" />
      </label>
    </form>
  );
}
