import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { selectCategoriesMap } from "../../store/categories/categories.selectors";
import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          title={title}
          product={categoriesMap[title]}
          key={title}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
