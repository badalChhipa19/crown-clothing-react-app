import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItems from "../cart-items/cart-items.component";

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
  const cartItems = useSelector(selectCartItems);
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
