export default CartTable = ({ item }) => {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr className="cart-row">
          <td>
            <img
              className="product-thumb"
              src={item.imageSrc}
              alt={item.imageAlt}
            />
          </td>
          <td>{item.title}</td>
          <td>${item.price}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const Solution = ({ items }) => {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ imageSrc, imageAlt, title, price, id }) => (
          <tr key={id} className="cart-row">
            <td>
              <img className="product-thumb" src={imageSrc} alt={imageAlt} />
            </td>
            <td>{title}</td>
            <td>${price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
