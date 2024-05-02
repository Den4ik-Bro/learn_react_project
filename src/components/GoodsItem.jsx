import { useContext } from "react";
import { ShopContext } from "../context";

const GoodsItem = (props) => {

  const {
    mainId,
    displayName,
    displayDescription,
    price,
    granted,
    orders,
  } = props;
  
  const {addToBasket} = useContext(ShopContext)

  const getButtontext = (orders) => {
    if (orders) {
      const findOrder = orders.find((el) => el.id === mainId);
      if (findOrder) {
        return `In your cart ${findOrder.quantity}`;
      }
    }
    return "Buy";
  };

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={granted[0].images.full_background} alt={displayName} />
        {/* <span className="card-title">{displayName}</span> */}
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({ id: mainId, name: displayName, price: price })
          }
        >
          {getButtontext(orders)}
        </button>
        <span className="right">{price.finalPrice}</span>
      </div>
    </div>
  );
};

export { GoodsItem };
