let React: any;

function counter() {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(count + 1)}>Counter: {count}</button>;
}

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>You've clicked {count} times</p>
      <button
        onClick={() => {
          const nexCount = count + 1;
          setCount(nexCount);
          console.log(nexCount);
        }}
      >
        Click me!
      </button>
    </>
  );
};
