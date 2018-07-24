import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import {Typography} from "@material-ui/core";

const styles = {
};

function Dashboard(props) {
  return (
    <div>
      <Typography noWrap>{'This is the Dashboard'}</Typography>
    </div>
  );
}

export default withStyles(styles)(Dashboard);
