import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import {Typography} from "@material-ui/core";

const styles = {
};

function LovMaster(props) {
  return (
    <div>
      <Typography noWrap>{'List of Values'}</Typography>
    </div>
  );
}

export default withStyles(styles)(LovMaster);
