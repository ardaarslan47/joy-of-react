let React: any;

function App() {
  const [value, setValue] = React.useState("no");
  const eventHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <label htmlFor="agreed-yes">Yes</label>{" "}
      <input
        type="radio"
        name="agree-to-terms"
        id="agreed-yes"
        value="yes"
        checked={value === "yes"}
        onChange={(event) => {
          eventHandler(event);
        }}
      />
      <label htmlFor="agreed-no"></label>{" "}
      <input
        type="radio"
        name="agree-to-terms"
        id="agreed-no"
        value="no"
        checked={value === "no"}
        onChange={(event) => {
          eventHandler(event);
        }}
      />
    </form>
  );
}