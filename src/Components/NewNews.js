import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { showToast } from "./utils/showToast";
import { useNavigate } from 'react-router-dom';

const NewNews = () => {
    const navigate = useNavigate()

    const addNewsToDB = async (values) => {
        try {
            await axios.post('/api/news', {
                title: values.title,
                body: values.body,
                author: values.author,
            })
            showToast('success', 'successfully added the data to news')
            navigate('/')
        } catch (error) {
            showToast('error', 'something went wrong, please try again later')
        }
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            body: "",
            author: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(100, "Must be 30 characters or less")
                .required("Sorry, title is required"),
            body: Yup.string()
                .max(500, "Must be 500 characters or less")
                .required("Sorry, body is required"),
            author: Yup.string()
                .max(30, "Name must be less than 30 characters")
                .required("Sorry, author is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            addNewsToDB(values)
            resetForm()
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" id="title" type="text" placeholder="News Headline..." {...formik.getFieldProps("title")} />
                    {formik.touched.title && formik.errors.title ? (
                        <Alert variant="danger" className="mt-2">{formik.errors.title}</Alert>
                    ) : null}
                </div>

                <div className="mt-3">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" type="text" placeholder="News author ..." {...formik.getFieldProps("author")} />
                    {formik.touched.author && formik.errors.author ? (
                        <Alert variant="danger" className="mt-2">{formik.errors.author}</Alert>
                    ) : null}
                </div>

                <div className="mt-3"><label htmlFor="body">Body</label>
                    <textarea className="form-control" id="body" type="text" placeholder="News Body ..." {...formik.getFieldProps("body")} />
                    {formik.touched.body && formik.errors.body ? (
                        <Alert variant="danger" className="mt-2">{formik.errors.body}</Alert>
                    ) : null}</div>

                <button className="btn btn-primary mt-3" type="submit">Add News</button>
            </form>
        </>
    )
}

export default NewNews