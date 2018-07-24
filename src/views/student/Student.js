import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography } from "@material-ui/core";

const styles = {
};

function Student(props) {
  return (
    <div>
      <Typography noWrap>{'List of Students'}</Typography>
    </div>
  );
}

export default withStyles(styles)(Student);
