import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header, Button } from 'components/SearchBar/SearchBar.styled';

const Input = styled(Field)`
    border: 1px solid black;
    font: inherit;
    font-size: 16px;
    padding: 8px;
    border-radius: 4px;
    width: 360px;
    outline: 0;
`;

export const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (values, { resetForm }) => {
    if (values.searchQuery.trim() === '') {
      return alert('Please, enter search query.');
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
                                autoFocus
                                placeholder="Search images and photos"
                            />
                        </Form>
                    </Header>               
            </Formik>
        )
    }

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
