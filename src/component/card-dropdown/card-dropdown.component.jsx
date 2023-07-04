import { useContext } from "react";
import { useNavigate } from "react-router";

import Button from "../button/button.component";
import CartItems from "../cart-items/cart-items.component";
import { CartContext } from "../../context/cart.context";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItem,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItem>
        {cartItems.length ? (
          cartItems.map((item) => <CartItems key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItem>
      <Button onClick={goToCheckOutHandler}>Go To Cart</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
