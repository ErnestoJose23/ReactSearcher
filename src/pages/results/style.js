import { makeStyle } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";

export default makeStyles({
    container: {
        flexDirection: "column",
        marginTop: 100,
        width: '125vh'
    },
    progress: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "200px"
    }
});