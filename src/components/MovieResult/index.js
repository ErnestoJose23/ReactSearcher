import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import style from './style';

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
    const classes = style();
    const handleSeeMovieClick = () => {
        history.push(`/movie/${imdbID}`);
    };
    if (Poster == "N/A") {
        Poster = 'https://www.reelviews.net/resources/img/default_poster.jpg';
    }
    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.info}>
                    <Typography>{Title}</Typography>
                    <Typography>{Year}</Typography>
                    <Typography>{Type}</Typography>
                    <Button variant="outlined"
                        color="primary" className={classes.Button} onClick={handleSeeMovieClick}>Info</Button>
                </Grid>
            </Grid>
        </Card>
    );
}

export default withRouter(MovieResult);