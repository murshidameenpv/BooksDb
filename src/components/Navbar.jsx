
/* eslint-disable react/prop-types */
const Navbar = ({ booksData, query, setQuery }) => {
  return (
    <nav className="bg-fuchsia-800 flex px-2 py-3 space-x-2 justify-between items-center">
      <div className="font-bold text-white">Books DB</div>
      <input
        type="text"
        value={query}
        onInput={(e)=>setQuery(e.target.value)}
        placeholder="Search Books..."
        className="rounded-sm border-none px-3 focus:outline-none py-1"
      />
      <div>Found {booksData.length} Results</div>
    </nav>
  );
};

export default Navbar;
