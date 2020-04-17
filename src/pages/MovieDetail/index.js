import React, { useEffect } from 'react';
import { Container, CircularProgress, Typography, Card, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { movieResult as movieResultSelector } from '../../redux/selectors';
import { searchMovieById } from '../../redux/actions/search';

import styles from "./style";

export default ({ match }) => {
    const classes = styles();
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));

    useEffect(() => {
        const movieId = match.params.id;
        if (!movieResult || movieResult && movieResult.imdbID != movieId) {
            const movieId = match.params.id;
            dispatch(searchMovieById({ movieId }));

        }
    });


    if (!movieResult) {
        return <div className={classes.progress}><CircularProgress size={50} color="primary" /></div>
    } else {
        if (movieResult.Poster == "N/A") {
            movieResult.Poster = 'https://www.reelviews.net/resources/img/default_poster.jpg';
        }
    }
    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <Grid className={classes.grid}>
                    <Typography variant="h4" className={classes.title}>{movieResult.Title}</Typography>
                    <img src={movieResult.Poster} className={classes.poster} />
                </Grid>
                <Grid className={classes.gridInfo}>
                    <Typography><strong>Actors: </strong>{movieResult.Actors}</Typography>
                    <Typography><strong>Director: </strong>{movieResult.Director}</Typography>
                    <Typography><strong>Country: </strong>{movieResult.Country}</Typography>
                    <Typography><strong>Rated: </strong>{movieResult.Rated}</Typography>
                    <Typography><strong>Awards: </strong>{movieResult.Awards}</Typography>
                    <Typography><strong>Plot: </strong>{movieResult.Plot}</Typography>
                </Grid>
            </Card>
        </Container>
    )
}