import React from "react";
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUser } from '../redux/action/index'

export default function SignupForm() {

  const navigate = useNavigate();
  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .max(40)
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required")
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={SignUpSchema}
            onSubmit={async (values) => {
              console.log(values);
              alert("Form is validated! Submitting the form...");
              // creates entity
              await createUser(values);
              navigate("/chatbot", { state: { data: values } })
            }}
          >
            {({ touched, errors, isSubmitting, values }) =>
              !isSubmitting ? (
                <div>
                  <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                      <h1 className="mt-5">Signup Form</h1>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name">name</label>
                      <Field
                        type="name"
                        name="name"
                        placeholder="Enter name"
                        autoComplete="off"
                        className={`mt-2 form-control
          ${touched.name && errors.name ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        className={`mt-2 form-control
          ${touched.email && errors.email ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="mt-3">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className={`mt-2 form-control
          ${touched.password && errors.password
                            ? "is-invalid"
                            : ""
                          }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              ) : (
                <div>
                  <h1 className="p-3 mt-5">Form Submitted</h1>

                  <div className="alert alert-success mt-3">
                    Thank for your connecting with us. Here's what we got from
                    you !
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">Name: {values.name}</li>
                    {/* <li className="list-group-item">
                      Password: {values.password}
                    </li> */}
                  </ul>
                </div>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  );
}