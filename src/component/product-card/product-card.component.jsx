import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  ProductCardContainer,
  Image,
  Footer,
  Name,
  Price,
  ButtonEl,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
  };

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
