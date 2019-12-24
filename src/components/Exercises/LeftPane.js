import React, { Fragment } from "react";

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

export default ({ exercises, styles }) => {
  return (
    <Paper className={styles}>
      {exercises.map(([category, datas], index) => {
        console.log(datas);
        return (
          <Fragment key={index}>
            <Typography variant="h6">{category}</Typography>
            <List component="nav" aria-label="secondary mailbox folders">
              {datas.map(data => (
                <ListItem key={data.id} button>
                  <ListItemText primary={data.title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        );
      })}
    </Paper>
  );
};
