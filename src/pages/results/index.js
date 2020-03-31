import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core'
import queryString from 'query-string';


import { searchMovie } from '../../redux/actions/search';

import styles from "../Home/style";

export default ({ location }) => {
    const classes = styles();

    const dispatch = useDispatch();

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        dispatch(searchMovie({ movieName }));
    });
    return (
        <Container className={classes.container}>Results</Container>
    )
}