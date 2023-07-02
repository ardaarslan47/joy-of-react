function HelloWorld({ color = blue }) {
  return (
    <h1
      style={{
        textAlign: "center",
        color: color,
      }}
    >
      Hello World!!!
    </h1>
  );
}

const root = createRoot();
root.render(<HelloWorld color="red" />);

function RedButton({ children }) {
  return (
    <button
      style={{
        color: "white",
        backgroundColor: "red",
      }}
    >
      {children}
    </button>
  );
}

root.render(
    <RedButton>
        Dont Click
    </RedButton>
)
