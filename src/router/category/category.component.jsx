import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selectors";
import ProductCard from "../../component/product-card/product-card.component";
import Spinner from "../../component/spinner/spinner.component";

import { CategoriesTitle, CategoryConatiner } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoriesTitle>{category.toUpperCase()}</CategoriesTitle>
      {categoriesLoading ? (
        <Spinner />
      ) : (
        <CategoryConatiner>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryConatiner>
      )}
    </>
  );
};

export default Category;
