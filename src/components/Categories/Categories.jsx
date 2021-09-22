import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories as httpGetCategories } from "../../httpService/categories";
import { CategoriesActions } from "../../store/Categories";
import { Link } from "react-router-dom";
import Empty from "../UIs/Empty";

const Categories = () => {
  const api = process.env.REACT_APP_API;
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Categories.categories);
  useEffect(() => {
    async function fetch() {
      dispatch(
        CategoriesActions.onChangeCategories({
          data: await httpGetCategories(),
        })
      );
    }
    fetch();
  }, [dispatch]);

  return (
    <main>
      <div className="b-overlay-wrap position-relative">
        <div className="categories-page w-100">
          {categories && categories.length > 0 ? (
            <React.Fragment>
              <h1 className="categories-title">Categories</h1>
              <div className="categories-container">
                {categories.map((item, index) => {
                  console.log(api+ item.image)
                  return (
                    <Link
                      key={index}
                      to={`/categoryDetails/${item.id}/${item.name}`}
                      className="category d-flex align-items-end justify-content-center"
                      style={{ backgroundImage: `url(${api + item.image})` }}
                    >
                      <div className="category-title">{item.name}</div>
                    </Link>
                  );
                })}
              </div>
            </React.Fragment>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </main>
  );
};

export default Categories;
