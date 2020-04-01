import {
    SEARCH_MOVIE_START,
    SEARCH_MOVIE_ERROR,
    SEARCH_MOVIE_COMPLETE,
    SEARCH_MOVIE_BY_ID_START,
    SEARCH_MOVIE_BY_ID_COMPLETE,
    SEARCH_MOVIE_BY_ID_ERROR
} from '../../consts/actionTypes';

export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload
});

export const searchMovieById = payload => ({
    type: SEARCH_MOVIE_BY_ID_START,
    payload
});