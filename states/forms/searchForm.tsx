let React: any;

const SearchForm = () => {
  // if React.useState() react assume this is uncontrolled value
  // use this instead Ract.useState('')
  const [searchTerm, setSearchTerm] = React.useState("something");

  return (
    <>
      <form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>

      <p>Search term: {searchTerm}</p>

      <button onClick={() => setSearchTerm(Math.random())}>Click me</button>
    </>
  );
};
