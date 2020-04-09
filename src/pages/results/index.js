import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress, Grid } from '@material-ui/core'
import queryString from 'query-string';


import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors';
import MovieResult from '../../components/MovieResult';

import styles from "./style";

export default ({ location }) => {
    const classes = styles();

    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));
    const [isLooked, setIsLooked] = useState(false);

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if (movieName && !isLooked) {
            setIsLooked(true);
            dispatch(searchMovie({ movieName }));
        }
    });

    const renderMovies = () => {
        if (movies) {
            return movies.map((value, index) => <MovieResult key={index}{...value} />);
        } else if (isLoading) {
            return <div className={classes.progress}><CircularProgress size={100} color="primary" ></CircularProgress></div>
        }
        return <div />;
    };

    return (
        <Container className={classes.container}>{renderMovies()}</Container>
    )
}