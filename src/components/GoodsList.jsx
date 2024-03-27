import { GoodsItem } from "./GoodsItem";

const GoodsList = (props) => {
  const { goods = [], addToBasket, orders } = props;

  if (!goods.length) {
    return <h3>Nothing items</h3>;
  }
  const filteringGoods = goods.filter(
    (el) => el.granted[0].images?.full_background
  );

  return (
    <div className="goods">
      {filteringGoods.map((item) => (
        <GoodsItem
          key={item.id}
          {...item}
          addToBasket={addToBasket}
          orders={orders}
        />
      ))}
    </div>
  );
};

export { GoodsList };
