import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

import { MovieIcon } from "../../icons";
import styles from "./style";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleCleanTextClick = event => {
    setSearchText('');
  };
  const handleSearchTextClick = event => {
    history.push(`/results?movieName=${searchText}`)
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid>
          <MovieIcon className={classes.movieIcon} />
        </Grid>
        <Grid container className={classes.titleGridContainer}>

          <Grid>
            <Typography className={classes.title}>
              Welcome to ReactSearcher
            </Typography>
          </Grid>

        </Grid>
        <TextField
          value={searchText}
          placeholder="Search.."
          onChange={handleSearchTextChange}
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonContainer}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCleanTextClick}
            className={classes.cleanButton}
          >
            <i className="far fa-trash-alt" style={{ padding: 5 }}></i>
            Reset
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSearchTextClick}
            className={classes.searchButton}
          >
            <i className="fas fa-search" style={{ padding: 5 }}></i>
            Search
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
