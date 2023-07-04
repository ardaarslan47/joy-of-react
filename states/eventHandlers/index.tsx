// dont use queyselector with react
const React = 1 // for disabling vscode error

const App = () => {
  const doSomething = (): void => {
    // something
  };
  return <button onClick={doSomething}>Click Me!</button>;
};

// if we need to pass argument
const Button = ({ color }) => {
  const changeTheme = (theme: "light" | "dark") => {
    switch (theme) {
      case "light":
        color = "white";
      case "dark":
        color = "black";
    }
  };
  return (
    <button onClick={() => changeTheme("dark")} style={{ color: color }}>
      Toggle theme
    </button>
  );
};
