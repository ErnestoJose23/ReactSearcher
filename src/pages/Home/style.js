import { makeStyle } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";

const centeredStyoleObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default makeStyles({
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyoleObject
  },
  cardContainer: {
    flexDirection: "column",
    width: 800,
    opacity: 0.95,
    height: 400,
    padding: "2rem",
    ...centeredStyoleObject
  },
  title: {
    fontSize: "2.5rem"
  },
  titleGridContainer: {
    ...centeredStyoleObject
  },
  textFieldSearch: {
    width: "60%"
  },
  searchButton: {
    marginLeft: "1rem"
  },
  buttonContainer: {
    marginTop: "1rem"
  },
  movieIcon: {
    fontSize: '5rem',
  }
});
