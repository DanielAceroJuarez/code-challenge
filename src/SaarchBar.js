const SearchBar = ({ handleChange,terms,handleSubmit }) => (
  <form >
      <input
          value={terms}
          onChange={handleChange}
          type="text"
          id="header-search"
          placeholder="Find your favorite Artist"
          name="s"
      />
      <button type="button" onClick={() => handleSubmit()}>Search</button>
  </form>
);

export default SearchBar;