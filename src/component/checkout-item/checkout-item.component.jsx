import { useDispatch } from "react-redux";

import {
  addItemToCart,
  clearItemFromCart,
  removeItemToCart,
} from "../../store/cart/cart.reducer";
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
  const { name, imageUrl, quantity, price } = CheckoutItem;

  const clearItemHandler = () => dispatch(clearItemFromCart(CheckoutItem));
  const addItemHandler = () => dispatch(addItemToCart(CheckoutItem));
  const removeItemHandler = () => dispatch(removeItemToCart(CheckoutItem));

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
