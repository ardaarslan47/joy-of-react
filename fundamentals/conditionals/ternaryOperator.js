export default Friend = ({ name, isOnline }) => {
  return (
    <li className="friend">
      {isOnline ? <div className="green-dot" /> : null}
      {name}
    </li>
  );
};
