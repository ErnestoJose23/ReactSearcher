import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

export default () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleCleanTextClick = event => {
    console.log(2);
  };
  const handleSearchTextClick = event => {
    console.log(3);
  };

  return (
    <Container>
      <Card>
        <Grid container>
          <Grid>
            <Typography>Welcome to ReactSearcher</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Search.."
          onChange={handleSearchTextChange}
        />
        <Grid>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCleanTextClick}
          >
            <i className="far fa-trash-alt" style={{ padding: 5 }}></i>
            Reset
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSearchTextClick}
          >
            <i className="fas fa-search" style={{ padding: 5 }}></i>
            Search
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
