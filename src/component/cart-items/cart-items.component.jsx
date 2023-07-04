import { ItemName, ItemDetails, CartItemContainer } from "./cart-item.styles";

const CartItems = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className="price">
          {quantity} X {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItems;
