import { useForm } from "react-hook-form";
import { FaTwitter, FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/layouts/BreadCrumbs";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Register = ({ title }) => {
  useDocumentTitle(title);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const navigate = useNavigate();

  const submitForm = async (value) => {
    reset();
    if (value) {
      localStorage.setItem("value.email", JSON.stringify(value.email));
      localStorage.setItem("value.password", JSON.stringify(value.password));

      navigate("/login");
    }
  };
  return (
    <>
      <BreadCrumbs location={"Register"} />

      <section className="text-center" style={{ backgroundColor: "#EEfAE6" }}>
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
            height: 300,
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form onSubmit={handleSubmit(submitForm)}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          name="firstname"
                          {...register("firstname", {
                            required: {
                              value: true,
                              message: "FirstName is required",
                            },
                            minLength: {
                              value: 2,
                              message: "Minimum 2 Characters required",
                            },
                          })}
                        />

                        <span style={{ color: "red" }}>
                          {errors.firstname?.message}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          name="lastname"
                          {...register("lastname", {
                            required: {
                              value: true,
                              message: "LastName is required",
                            },
                            minLength: {
                              value: 2,
                              message: "Minimum 2 Characters required",
                            },
                          })}
                        />

                        <span style={{ color: "red" }}>
                          {errors.lastname?.message}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
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

                    <span style={{ color: "red" }}>
                      {errors.email?.message}
                    </span>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
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
                    />{" "}
                    <span style={{ color: "red" }}>
                      {errors.password?.message}
                    </span>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="Confirm_password"
                    />{" "}
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    {/* <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example33"
                        defaultChecked=""
                      /> */}
                    <Link to="/">
                      <label
                        style={{ marginBottom: "10px" }}
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Already Have An Account ?
                      </label>
                    </Link>
                  </div>
                  {/* Submit button */}

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    // onClick={Validations}
                  >
                    Sign up
                  </button>

                  {/* Register buttons */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaFacebook />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGoogle />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaTwitter />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGithub />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
