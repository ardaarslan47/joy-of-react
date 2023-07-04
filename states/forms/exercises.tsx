let React;
let data;

function App() {
  const [country, setCountry] = React.useState("");
  const values = Object.values(data);

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select id="country" name="country">
          <option value="0">--Select Country--</option>
          {values.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </select>
      </fieldset>

      <p className="country-display">Selected country: {country}</p>

      <button>Submit</button>
    </form>
  );
}

function App2() {
  const [colors, setColors] = React.useState([
    "#FFD500",
    "#FF0040",
    "#FF0040",
    "#FF0040",
    "#FF0040",
  ]);

  const [numOfVisible, setNumOfVisible] = React.useState(2);
  const visibleColors = colors.slice(0, numOfVisible)

  const colorStops = visibleColors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  const changeColorNumber = (method: 'add' | 'remove') => {
    const nextColor = [...colors];
    switch (method) {
      case "add":
        setNumOfVisible(numOfVisible + 1);
        break;
      case "remove":
        setNumOfVisible(numOfVisible - 1);
        break;
    }

    setColors(nextColor);
  };

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={() => numOfVisible > 2 && changeColorNumber("remove")}>
          Remove color
        </button>
        <button onClick={() => numOfVisible < 5 && changeColorNumber("add")}>
          Add color
        </button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {visibleColors.map((color: string, index: number) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(e) => {
                    const nextColor = [...colors];
                    nextColor[index] = e.target.value;

                    setColors(nextColor);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
