import "./SearchBar.css"
export default function SearchBar() {
  return (
    <div>
      <form>
        <label className="searchbar">
          <input type="text" placeholder="recherche" name="search" />
        </label>
      </form>
    </div>
  );
}
