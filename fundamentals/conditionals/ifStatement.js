// cant use if statement in jsx
// jsx only accepts expressions
// so use statement before return

export default Friend = ({ name, isOnline }) => {
  let prefix;

  if (isOnline) {
    prefix = <div className="green-dot" />;
  }

  return (
    <li className="friend">
      {prefix}
      {name}
    </li>
  );
};
