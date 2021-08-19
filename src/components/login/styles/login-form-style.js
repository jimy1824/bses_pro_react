import { makeStyles } from "@material-ui/core";

export const useLoginStyle = makeStyles((theme) => ({
    buttonWrapper: {
        width: "100%",
        color: "#ffffff",
        textTransform: "none",
        fontSize: "0.9rem",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "2px",
    },
    submitButton: {
        width: "9rem",
        textTransform: "none",
        fontSize: "0.9rem",
        borderRadius: "px",
    },
    textWrapper: {
        marginBottom:"10px",
        fontSize: "0.9rem",
        display:'block',
        color: theme.palette.primary.main,
    },
    textWrapperSignup: {
        fontSize: "0.9rem",
        color: theme.palette.primary.main,
        marginTop: theme.spacing(1),
        textAlign: "center",
    },

}));
