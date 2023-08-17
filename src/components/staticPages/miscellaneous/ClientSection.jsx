import client1 from "../../../assets/images/clients/client-1.png"
import client2 from "../../../assets/images/clients/client-2.png"
import client3 from "../../../assets/images/clients/client-3.png"
import client4 from "../../../assets/images/clients/client-4.png"
import client5 from "../../../assets/images/clients/client-5.png"
import client6 from "../../../assets/images/clients/client-6.png"
import client7 from "../../../assets/images/clients/client-7.png"
import client8 from "../../../assets/images/clients/client-8.png"
import { Link } from 'react-router-dom'
const ClientSection=()=> {
  return (
    <>
    <section className="clients spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <span>Partner</span>
          <h2>Happy Clients</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <Link to="#" className="client__item">
          <img src={client1} alt="" />
        </Link>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <Link to="#" className="client__item">
          <img src={client2} alt="" />
        </Link>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <Link to="#" className="client__item">
          <img src={client3} alt="" />
        </Link>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <Link to="#" className="client__item">
          <img src={client4} alt="" />
        </Link>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <Link to="#" className="client__item">
          <img src={client5} alt="" />
        </Link>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <Link to="#" className="client__item">
          <img src={client6} alt="" />
        </Link>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <Link to="#" className="client__item">
          <img src={client7} alt="" />
        </Link>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-4 col-6">
        <Link to="#" className="client__item">
          <img src={client8} alt="" />
        </Link>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ClientSection