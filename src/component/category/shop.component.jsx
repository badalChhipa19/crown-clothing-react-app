import { useSelector } from "react-redux";

import CategoryPreview from "../category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selectors";

const Shop = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          title={title}
          product={categoriesMap[title]}
          key={title}
        />
      ))}
    </div>
  );
};

export default Shop;
