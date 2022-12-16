import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
const ProfileForm = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <h3 className="text-2xl font-semibold text-indigo-900">Create User</h3>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5 mt-6">
              <div className="">
                <label htmlFor="">Name</label>
                <br></br>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Name}
                  className="border rounded-md px-12 py-2 border-indigo-900"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <br></br>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="border rounded-md px-12 py-2 border-indigo-900"
                />
                {/* {errors.email && touched.email && errors.email} */}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-6">
              <div className="">
                <label htmlFor="">Contact Number</label>
                <br></br>
                <input
                  type="text"
                  name="contact"
                  placeholder="contact number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact}
                  className="border rounded-md px-12 py-2 border-indigo-900"
                />
              </div>
              <div>
                <label htmlFor="">Address 1</label>
                <br></br>
                <input
                  type="text"
                  name="adress1"
                  placeholder="adress1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.adress1}
                  className="border rounded-md px-12 py-2 border-indigo-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className=" mt-4 text-white bg-indigo-900 px-6 py-2"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  Name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
    adress1: yup.string().required("required"),

});
const initialValues = {
  Name: "",
  email: "",
  contact: "",
  adress1: "",
  
};
export default ProfileForm;
