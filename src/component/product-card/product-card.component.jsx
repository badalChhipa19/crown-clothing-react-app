import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import {
  ProductCardContainer,
  Image,
  Footer,
  Name,
  Price,
  ButtonEl,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, price } = product;

  const addToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ButtonEl buttonType="inverted" onClick={addToCart}>
        ADD TO CART
      </ButtonEl>
    </ProductCardContainer>
  );
};

export default ProductCard;
