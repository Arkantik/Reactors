export default function SearchBar({ handleSearch }) {
	return (
		<div className="relative flex items-center">
			<input
				onChange={handleSearch}
				type="search"
				placeholder="Enter your destination..."
				className="min-w-[300px] rounded-md border border-neutral-400 bg-neutral-200 px-4 py-2 pl-9 pr-4 outline-none"
			/>
			<img
				src="../assets/icons/glass.svg"
				className="absolute pl-2"
				alt="loupe"
			/>
		</div>
	);
}
