import { Link } from "react-router-dom";

const BreadCrumbs = ({ location }) => {
  return (
    <>
      {/* <section className="breadcrumb-option">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb__text">
          <h4>Shop</h4>
          <div className="breadcrumb__links">
           <Link href="./index.html">Home</Link>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="breadcrumb__links">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCrumbs;
