import CartTable, { Solution } from "./CartTable";
import items from "./items";

export default App = () => {
  return (
    <>
      <h2>Shopping cart</h2>
      {items
        .filter((item) => item.inStock)
        .map((item) => (
          <CartTable item={item} />
        ))}
      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
      {items
        .filter((item) => !item.inStock)
        .map((item) => (
          <CartTable item={item} />
        ))}
    </>
  );
};

const SolutionApp = () => {
  return (
    <>
      <h2>Shopping cart</h2>
      <Solution items={items.filter((item) => item.inStock)} />
      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
      <Solution items={items.filter((item) => !item.inStock)} />
    </>
  );
};
