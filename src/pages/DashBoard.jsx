import Instagram from "../components/staticPages/Instagram.jsx";
import MainProducts from "../components/products/MainProducts.jsx";
import DealOfferBanner from "../components/staticPages/miscellaneous/DealOfferBanner.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.jsx";
const DashBoard = ({title}) => {
  useDocumentTitle(title)
  return (
    <>
      {/* <Banner /> */}
      <DealOfferBanner />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  Best Sellers
                </li>
                <li data-filter=".new-arrivals">New Arrivals</li>
                <li data-filter=".hot-sales">Hot Sales</li>
              </ul>
            </div>
          </div>
          <MainProducts />
        </div>
        <Instagram />
      </section>
    </>
  );
};

export default DashBoard;
