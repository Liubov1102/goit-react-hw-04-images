import React from 'react';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Header, Button, Input } from 'components/SearchBar/SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (values, { resetForm }) => {
        if (values.searchQuery.trim() === '') {
            return toast.warn('Please, enter search query.');
        }
        onSubmit(values);
        resetForm();
    };
    return (
        <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
            <Header >
                <Form >
                    <Button type="submit" >
                        Search
                    </Button>

                    <Input
                        type="text"
                        name="searchQuery"
                        autoComplete="off"
                        placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        </Formik>
    )
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
