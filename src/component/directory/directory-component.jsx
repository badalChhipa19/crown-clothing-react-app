import Category from "./../category-item/category-item.component";

import "./directory.style.scss";

const directory = ({ category }) => {
  return (
    <div className="dictory-container">
      {category.map((cat) => {
        return <Category key={cat.id} category={cat} />;
      })}
    </div>
  );
};

export default directory;
