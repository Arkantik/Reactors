export default function SearchBar() {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter your destination..."
        name="search"
        className="px-4 min-w-[300px] bg-neutral-200 rounded-md py-2 border-neutral-400 border"
      />
    </form>
  );
}
