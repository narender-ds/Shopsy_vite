import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../context/GlobalContext";
import { useForm } from "react-hook-form";
import BreadCrumbs from "../components/layouts/BreadCrumbs";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Login = ({ title }) => {
  useDocumentTitle(title);
  const { setIsLogin, isLogin } = GlobalContext();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur", // "onChange"
  });
  const submitForm = async (data) => {
    const emailCheck = localStorage.getItem("value.email", data.email);
    const passwordCheck = localStorage.getItem("value.password", data.password);

    const checkEmail = JSON.parse(emailCheck);
    const checkPassword = JSON.parse(passwordCheck);

    if (checkEmail === data.email && checkPassword === data.password) {
      setIsLogin(true);
      {
        !isLogin && navigate("/");
      }
      reset();
    } else {
      alert("You are not A Register Member");
    }
  };
  const notify = () => toast.Showerror;
  return (
    <>
      <BreadCrumbs location={"Login"} />

      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://blog.hubspot.com/hs-fs/hubfs/ecommerce-10.jpg?width=595&height=400&name=ecommerce-10.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Login</h2>
                  <form onSubmit={handleSubmit(submitForm)}>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        name="email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email must be valid",
                          },
                        })}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>
                    <span style={{ color: "red" }}>
                      {errors.email?.message}
                    </span>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        name="password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "password is required",
                          },
                          minLength: {
                            value: 8,
                            message: "Minimum 8 characters required",
                          },
                          maxLength: {
                            value: 20,
                            message: "Maximum 20 Characters allowed",
                          },
                        })}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>
                    <span style={{ color: "red" }}>
                      {errors.password?.message}
                    </span>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <Link to="/forget">
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          Forgot password?
                        </label>
                      </Link>
                    </div>
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      onClick={notify}
                    >
                      Sign in
                    </button>
                    {/* Register buttons */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example31"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example31"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <Link to="/register">Don't Have Account ?</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
