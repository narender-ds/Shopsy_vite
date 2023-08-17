import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getCategoryData,
  getProduct,
  getProductDetail,
} from "../redux/Actions/ProductsAction";
import { addToCart, addToWishList } from "../redux/Actions/CartAction";
import Loading from "../utils/skeleton/Loading";
import useDocumentTitle from "../hooks/useDocumentTitle";
const Shop = ({title}) => {
useDocumentTitle(title)

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productData.category);
  const { products, loading } = useSelector((state) => state.productData);
  const [showMore, setShowMore] = useState(5);
  useEffect(() => {
    dispatch(getProduct(10));
    dispatch(getCategory());
  }, [dispatch]);
  const showMoreCategory = () => {
    setShowMore((prev) => prev + 5);
  };
  if (loading) {
    return <Loading />;
  }
  const onSelect = (event) => {
    const value = event.target.value;
    dispatch(getProduct(value))
  };
  return (
    <>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="breadcrumb__links">
              <Link to="/">Home</Link>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid mb-3">
        <div className="row"></div>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-header">Categories</div>
              {categories?.slice(0, showMore).map((categoryData,index) => {
                return (
                    <div
                      className="list-group list-group-flush"
                      key={index}
                    >
                      <Link
                        to="#"
                        className="list-group-item list-group-item-action"
                        onClick={() => dispatch(getCategoryData(categoryData))}
                      >
                        {categoryData}
                      </Link>
                    </div>
                );
              })}
              <button onClick={showMoreCategory}>show More</button>
            </div>
            <div className="card">
              <div className="card-header">Filter</div>
              <div className="card-body p-1">
                <div className="card border-0 b-3">
                  <div
                    className="card-header p-2 bg-white"
                    data-toggle="collapse"
                    data-target="#collapseExample2"
                    aria-expanded="false"
                  >
                    <p className="m-0 h6">Size</p>
                  </div>
                  <div
                    className="card-body p-0 collapse show"
                    id="collapseExample2"
                  >
                    <ul
                      className="list-group list-group-flush"
                      style={{ height: 200, overflow: "auto" }}
                    >
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            XXS
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            XS
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            S
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            M
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            L
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            XL
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            XXL
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 b-3">
                  <div
                    className="card-header p-2 bg-white"
                    data-toggle="collapse"
                    data-target="#collapseExample3"
                    aria-expanded="false"
                  >
                    <p className="m-0 h6">Color</p>
                  </div>
                  <div
                    className="card-body p-0 collapse show"
                    id="collapseExample3"
                  >
                    <ul
                      className="list-group list-group-flush"
                      style={{ height: 200, overflow: "auto" }}
                    >
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox w-100">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#E52B50" }}
                            />
                            <span>Amaranth</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox w-100">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#FFBF00" }}
                            />
                            <span>Amber</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#007FFF" }}
                            />
                            <span>Azure</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#007BA7" }}
                            />
                            <span>Cerulean</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#B87333" }}
                            />
                            <span>Copper</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#DC143C" }}
                            />
                            <span>Crimson</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#008000" }}
                            />
                            <span>Green</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#808080" }}
                            />
                            <span>Gray</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#FFD700" }}
                            />
                            <span>Gold</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#D1E231" }}
                            />
                            <span>Pear</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#800080" }}
                            />
                            <span>Purple</span>
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item p-2 d-flex justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            <div
                              className="float-left p-2 mt-1 mr-1"
                              style={{ backgroundColor: "#C0C0C0" }}
                            />
                            <span>Silver</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 b-3">
                  <div
                    className="card-header p-2 bg-white"
                    data-toggle="collapse"
                    data-target="#collapseExample4"
                    aria-expanded="false"
                  >
                    <p className="m-0 h6">Price</p>
                  </div>
                  <div
                    className="card-body p collapse show"
                    id="collapseExample4"
                  >
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Min</label>
                        <input
                          className="form-control"
                          placeholder="$0"
                          type="number"
                        />
                      </div>
                      <div className="form-group text-right col-md-6">
                        <label>Max</label>
                        <input
                          className="form-control"
                          placeholder="$1,0000"
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-block btn-primary">
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-5">
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-secondary active"
                      >
                        <i className="fas fa-th" />
                      </button>
                      <button type="button" className="btn btn-secondary">
                        <i className="fa fa-th-list" />
                      </button>
                      <button type="button" className="btn btn-secondary">
                        <i className="fa fa-sync-alt" />
                        <span>Product Compare (0)</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Sort By:</span>
                      </div>
                      <select className="form-control" id="" name="">
                        <option value="">Default</option>
                        <option value="">Name (A - Z)</option>
                        <option value="">Name (Z - A)</option>
                        <option value="">Price (Low &gt; High)</option>
                        <option value="">Price (High &gt; Low)</option>
                        <option value="">Rating (Highest)</option>
                        <option value="">Rating (Lowest)</option>
                        <option value="">Model (A - Z)</option>
                        <option value="">Model (Z - A)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Show:</span>
                      </div>
                      <select className="form-control" id="" onChange={onSelect} name="">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  {products &&
                    products?.products?.map((item,index) => {
                      return (
                          <div className="col-md-4 mb-4" key={index}>
                            <div className="card">
                              <Link to="/product-Detail">
                                <img
                                  className="card-img-top"
                                  style={{ height: "159px", width: "" }}
                                  src={item.thumbnail}
                                  onClick={() =>
                                    dispatch(getProductDetail(item.id))
                                  }
                                  alt=""
                                />
                              </Link>
                              <div className="card-body">
                                <p className="h6">
                                  <small className="text-muted">
                                    {item.brand}
                                  </small>
                                  <br />
                                  {item.title}
                                </p>
                                {item.rating <= 4.5 ? (
                                  <p className="m-0">
                                    <i className="fa-xs fa fa-star" />
                                    <i className="fa-xs fa fa-star" />
                                    <i className="fa-xs fa fa-star" />
                                    <i className="fa-xs fa fa-star" />
                                    <i className="fa fa-star-o" />
                                  </p>
                                ) : (
                                  <p className="m-0">
                                    <i className="fa-xs fa fa-star" />
                                    <i className="fa-xs fa fa-star" />
                                    <i className="fa-xs fa fa-star" />
                                    <i className="fa-xs fa fa-star" />
                                    <i className="fa-xs fa fa-star" />
                                  </p>
                                )}
                                <p className="h5 m-0">${item.price}</p>
                              </div>
                              <div className="card-footer p-0">
                                <div className="btn-group" role="group">
                                  <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() => {
                                      dispatch(addToCart(item));
                                    }}
                                  >
                                    <span>Add Cart</span>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-light"
                                  >
                                    <i className="fa fa-shopping-cart" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() => {
                                      dispatch(addToWishList(item));
                                    }}
                                  >
                                    <i className="fa fa-heart" />
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-light"
                                  >
                                    <i className="fa fa-exchange" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                      );
                    })}
                </div>
              </div>
              <div className="card-footer p-3">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="pagination m-0">
                      <li className="page-item disabled">
                        <Link
                          className="page-link"
                          to="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <p className="text-right mb-0 mt-1">
                      Showing 1 to 12 of 12 (1 Pages)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
