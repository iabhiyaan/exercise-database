import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textTransform: "capitalize",
    color: theme.palette.text.secondary,
    height: 500,
    overflowY: "auto"
  }
}));

export default ({ exercises }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={6} xs={12}>
        <LeftPane styles={classes.paper} exercises={exercises} />
      </Grid>
      <Grid item sm={6} xs={12}>
        <RightPane styles={classes.paper} exercises={exercises} />
      </Grid>
    </Grid>
  );
};
