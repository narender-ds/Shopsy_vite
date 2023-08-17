import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategory, getCategoryData } from "../redux/Actions/ProductsAction";
import useDocumentTitle from "../hooks/useDocumentTitle";
const Category = ({ title }) => {
  useDocumentTitle(title);
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <section>
      <div className="container pt-5">
        <nav className="row gy-4">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              {category?.map((item, index) => {
                return (
                  <div className="col-3" key={index}>
                    <Link
                      to={"/searchedProduct"}
                      className="text-center d-flex flex-column justify-content-center"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary mx-auto p-3 mb-2"
                        data-mdb-ripple-color="dark"
                        onClick={() => dispatch(getCategoryData(item))}
                      >
                        <i className="fas fa-couch fa-xl fa-fw" />
                      </button>
                      <div className="text-dark">{item}</div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Category;
