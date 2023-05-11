export default function SearchBar() {
    const [recherche, setRecherche] = useState("");

  function onChange(e) {
    setRecherche(e.target.value);
  }
  const navigate = useNavigate();

  function onSearch(e) {
    e.preventDefault(); /** Evite le rechargement de la page */
    navigate(`/search/${recherche}`);
  }

  return (
     <div>
        <form onSubmit={onSearch}>
        <label className="searchbar">
          <input
            type="text"
            placeholder=""
            name="search"
            onChange={onChange}
            value={recherche}
          />
        </label>
      </form>
     </div>
  )
}