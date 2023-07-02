import { useContext } from "react";
import { useNavigate } from "react-router";

import Button from "../button/button.component";
import CartItems from "../cart-items/cart-items.component";
import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("./checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>Go To Cart</Button>
    </div>
  );
};

export default CartDropdown;
