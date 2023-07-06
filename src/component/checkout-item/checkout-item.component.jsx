import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  clearItemFromCart,
  removeItemToCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  CheckoutItemContainer,
  ImageContainer,
  Discreiption,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ CheckoutItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, quantity, price } = CheckoutItem;

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, CheckoutItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, CheckoutItem));
  const removeItemHandler = () =>
    dispatch(removeItemToCart(cartItems, CheckoutItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Discreiption>{name}</Discreiption>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Discreiption>{price}</Discreiption>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
