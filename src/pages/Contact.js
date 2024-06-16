import React from "react";
import { useFormik } from "formik";
import { signUpUpSchema } from './Schema'
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Registration = () => {

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpUpSchema,
        onSubmit: (values, action) => {
            console.log("formvalues", values)
            action.resetForm()
        },
    },
    
    )


    return (
        <>
            <>
                <div className="container">
                    <div className="modal">
                        <div className="modal-container">
                            <div className="modal-left">
                                <h1 className="modal-title">Welcome!</h1>
                                <p className="modal-desc">
                                    To the  website for programmers.
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-block">

                                        <input
                                            type="name"
                                            autoComplete="off"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />


                                    </div>
                                    {
                                        errors.name && touched.name ? <>
                                            <p className="form-error">{errors.name}</p>

                                        </> : <> </>
                                    }


                                    <div className="input-block">

                                        <input
                                            type="email"
                                            autoComplete="off"
                                            name="email"
                                            id="email"
                                            placeholder="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                    </div>
                                    {
                                        errors.email && touched.email ? <>
                                            <p className="form-error">{errors.email}</p>

                                        </> : <></>
                                    }

                                    <div className="input-block">

                                        <input
                                            type="=password"
                                            autoComplete="off"
                                            name="password"
                                            placeholder="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                    </div>
                                    {
                                        errors.password && touched.password ? <>
                                            <p className="form-error">{errors.password}</p>

                                        </> : <></>
                                    }


                                    <div className="input-block">
                                        <input
                                            type="=password"
                                            autoComplete="off"
                                            name="confirm_password"
                                            placeholder="confirm_password"
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {
                                            errors.confirm_password && touched.confirm_password ? <>
                                                <p className="form-error">{errors.confirm_password}</p>

                                            </> : <></>
                                        }

                                    </div>

                                    <div className="modal-buttons">
                                        <a href="#" className="">
                                            Want to register using Gmail?
                                        </a>
                                        <button className="input-button" type="submit">
                                            Registration
                                        </button>
                                    </div>
                                </form>
                                <p className="sign-up">
                                    Already have an account? <a href="#">Sign In now</a>
                                </p>
                            </div>
                            <div className="modal-right">
                                <img
                                    src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};



export default Registration;