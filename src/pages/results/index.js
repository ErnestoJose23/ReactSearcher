import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core'
import queryString from 'query-string';


import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors';

import styles from "../Home/style";

export default ({ location }) => {
    const classes = styles();

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if (movieName && !movies) {
            dispatch(searchMovie({ movieName }));
        }
    });
    return (
        <Container className={classes.container}>Results</Container>
    )
}