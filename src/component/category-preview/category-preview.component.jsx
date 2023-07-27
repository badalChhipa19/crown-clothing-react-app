import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title}</Title>
        <Preview>
          {products
            .filter((_, i) => i < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
      </h2>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
