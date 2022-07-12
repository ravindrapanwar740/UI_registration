import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import {useNavigate} from "react-router-dom"


export default function SignIn() {
    const navigate = useNavigate();
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
        password: Yup.string()
            .min(3, "Password must be 3 characters at minimum")
            .required("Password is required"),
        });
	return (
	<div className="container">
		<div className="row">
		<div className="col-lg-12">
			<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={LoginSchema}
			onSubmit={(values) => {
				console.log(values);
				alert("Form is validated! Submitting the form...");
				fetch("http://localhost:8080/user/")
				.then(res=>res.json())
				.then((data=>{
					console.log(data,"all data")
					data.map((dt)=>{
						console.log(dt,"---===========")
						if(dt.email!==values.email){
							alert("Not Match data")
						}
						else{
							alert("Welcome")
						}
						return null;
					})
				}))
			}}
			>
			{({ touched, errors, isSubmitting, values }) =>
				!isSubmitting ? (
				<div>
					<div className="row mb-5">
					<div className="col-lg-12 text-center">
						<h1 className="mt-5">Login Form</h1>
					</div>
					</div>
					<Form>
					<div className="form-group">
						<label htmlFor="email">Email</label>
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
						${
							touched.password && errors.password
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

                    <button
						type="submit"
						className="btn btn-primary btn-block mt-4"
                        onClick={()=>navigate("/signUp")}
					>
						Sign up
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
					<li className="list-group-item">Email: {values.email}</li>
					<li className="list-group-item">
						Password: {values.password}
					</li>
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





// import React from 'react'
// import { useState } from 'react';
// import {useNavigate} from "react-router-dom"


// export default function SignIn() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     // States for checking the errors
//     const [submitted, setSubmitted] = useState(false);
//     const [error, setError] = useState(false);
//     const navigate = useNavigate();

//     // Handling the name change
//     const handleName = (e) => {
//       setSubmitted(false);
//     };
  
//     // Handling the email change
//     const handleEmail = (e) => {
//       setEmail(e.target.value);
//       setSubmitted(false);
//     };
  
//     // Handling the password change
//     const handlePassword = (e) => {
//       setPassword(e.target.value);
//       setSubmitted(false);
//     };
  
//     // Handling the form submission
//     const handleSubmit = (e) => {
//       const userData = {
//         email: email,
//         password: password
//       }
//       console.log(userData, "---------------------------")
//       e.preventDefault();
//       if ( email === '' || password === '') {
//         setError(true);
//       } else {
//         setSubmitted(true);
//         setError(false);
//       }
//     };
  
//     // Showing success message
//     // const successMessage = () => {
//     //   return (
//     //     <div
//     //       className="success"
//     //       style={{
//     //         display: submitted ? '' : 'none',
//     //       }}>
//     //       <h1>User SignIn successfully registered!!</h1>
//     //     </div>
//     //   );
//     // };
  
//     // Showing error message if error is true
//     const errorMessage = () => {
//       return (
//         <div
//           className="error"
//           style={{
//             display: error ? '' : 'none',
//           }}>
//           <h1>Please enter all the fields</h1>
//         </div>
//       );
//     };
  
//     return (
//       <div className="form">
//         <div>
//           <h1>User Registration</h1>
//         </div>
  
//         {/* Calling to the methods */}
//         <div className="messages">
//           {errorMessage()}
//           {/* {successMessage()} */}
//         </div>
  
//         <form>
//           {/* Labels and inputs for form data */}
  
//           <label className="label">Email</label>
//           <input onChange={handleEmail} className="input"
//             value={email} type="email" /><br/><br/>
  
//           <label className="label">Password</label>
//           <input onChange={handlePassword} className="input"
//             value={password} type="password" /><br/><br/>
  
//           <button onClick={handleSubmit} className="btn" type="submit">
//             Submit
//           </button>
//           <button onClick={()=>navigate("/signUp")}>
//             Sign Up
//           </button>
//         </form>
//       </div>
//     );
// }
