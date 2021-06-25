import React from "react";
import { useGlobalContext } from "./context";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id)}>
          <AiOutlinePlusCircle fontSize="1.2rem" />
        </button>

        {/* amount */}
        <p className="amount">{amount}</p>

        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease(id)}>
          <AiOutlineMinusCircle fontSize="1.2rem" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
