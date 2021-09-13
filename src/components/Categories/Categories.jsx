import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories as httpGetCategories } from "../../httpService/categories";
import { CategoriesActions } from "../../store/Categories";
import { Link } from "react-router-dom";

const Categories = () => {
  const api = process.env.REACT_APP;
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Categories.categories);

  const getCategories = async () => {
    const response = await httpGetCategories();
    dispatch(CategoriesActions.onChangeCategories({ data: response }));
  };

  useEffect(() => {
    getCategories();
  }, []);
  
  return (
    <main>
      <div className="b-overlay-wrap position-relative">
        <div className="categories-page w-100">
          <h1 className="categories-title">Categories</h1>
          <div className="categories-container">
            {categories.map((item, index) => {
                return (
                    <Link
                    key={index}
                        to={"/categoryDetails/"+item.id}
                        className="category d-flex align-items-end justify-content-center"
                        style={{ backgroundImage: `url(${ api + item.image })` }}
                    >
                        <div className="category-title">{item.name}</div>
                    </Link>
                );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Categories;
