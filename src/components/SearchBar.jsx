function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Пошук фільмів..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
