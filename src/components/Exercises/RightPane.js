import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default props => (
  <Paper className={props.styles}>
    <Typography variant="h6"> Welcome! </Typography>
    <Typography variant="subtitle1"> Please select title from left. </Typography>
  </Paper>
);
