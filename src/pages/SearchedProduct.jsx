import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/Actions/CartAction";
import useDocumentTitle from "../hooks/useDocumentTitle";

const SearchedProduct = ({ title }) => {
  useDocumentTitle(title);
  const dispatch = useDispatch();
  const SearchItem = useSelector((state) => state?.productData?.products);
  return (
    <section className="product spad">
      <div className="container">
        <div className="card-body">
          <div className="row">
            {SearchItem?.products?.length > 0 ? (
              SearchItem?.products?.map((item) => {
                return (
                  <>
                    <div className="col-md-3 mb-3" key={item.id}>
                      <div className="card">
                        <Link to="/product-Detail" state={{ data: item }}>
                          <img
                            className="card-img-top"
                            style={{ height: "160px", width: "" }}
                            src={item.thumbnail}
                            alt=""
                          />
                        </Link>
                        <div className="card-body">
                          <p className="h6">
                            <small className="text-muted">{item.brand}</small>
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
                            <button type="button" className="btn btn-light">
                              <i
                                style={{ color: "#EC473F" }}
                                className="fa fa-shopping-cart"
                              />
                            </button>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                // dispatch(addToWishList(item));
                              }}
                            >
                              <i
                                style={{ color: "#EC473F" }}
                                className="fa fa-heart"
                              />
                            </button>
                            <button type="button" className="btn btn-light">
                              <i
                                style={{ color: "#EC473F" }}
                                className="fa fa-exchange"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div style={{ marginLeft: "380px" }}>
                <h1>No Results Found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchedProduct;
