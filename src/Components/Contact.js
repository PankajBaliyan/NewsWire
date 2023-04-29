import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from 'react-bootstrap/Alert';
import emailjs from 'emailjs-com';
import { showToast } from "./utils/showToast";


const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            message: "",
            email: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(30, "Must be 30 characters or less")
                .required("Sorry, Name is required"),
            message: Yup.string()
                .max(500, "Must be 500 characters or less")
                .required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
        }),
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
            resetForm();
        },
    });
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('service_2v2l7zk', 'template_jq18aqq', e.target, 'Q1oCs1Pino_G7g7Qw')
            .then((result) => {
                // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
                // console.log(result)
                showToast('success', 'Successfully sent the email!')
            }, (error) => {
                console.log(error.text);
                showToast('error', 'Something went wrong, please try again later!')
            });
    }

    return (
        <>
            <form onSubmit={(event) => {
                sendEmail(event);
                formik.handleSubmit();
            }}>
                <div className="mt-3">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" type="text" placeholder="Your Name" {...formik.getFieldProps("name")} />
                    {formik.touched.name && formik.errors.name ? (
                        <Alert variant="danger" className="mt-2">{formik.errors.name}</Alert>
                    ) : null}
                </div>

                <div className="mt-3">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" id="email" type="email" placeholder="example@domain.com" {...formik.getFieldProps("email")} />
                    {formik.touched.email && formik.errors.email ? (
                        <Alert variant="danger" className="mt-2">{formik.errors.email}</Alert>
                    ) : null}
                </div>

                <div className="mt-3"><label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" type="text" placeholder="Your Message" {...formik.getFieldProps("message")} />
                    {formik.touched.message && formik.errors.message ? (
                        <Alert variant="danger" className="mt-2">{formik.errors.message}</Alert>
                    ) : null}</div>

                <button className="btn btn-primary mt-3" type="submit">Submit</button>
            </form>
        </>
    );
};

export default Contact;
