import { makeStyle } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";

export default makeStyles({
    grid: {
        textAlign: 'center',
    },
    container: {
        opacity: 0.95,
        flexDirection: "column",
        marginTop: 100,
        width: '125vh'
    },
    card: {
        height: '70vh'
    },
    title: {
        paddingTop: '10px',
    },
    poster: {
        paddingTop: '10px',
        height: 250
    },
    gridInfo: {
        paddingTop: 10,
        paddingLeft: 20
    }
});