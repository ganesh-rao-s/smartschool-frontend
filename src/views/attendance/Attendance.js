import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SimpleCheckbox from '../../components/form/SimpleCheckbox';
import GridContainer from "../../components/grid/GridContainer";
import GridItem from "../../components/grid/GridItem";
import {data} from "../../datasource/Attendance";

const styles = theme => ({

});

class Attendance extends React.Component {

  render() {

    const { classes } = this.props;
    const list = data.map((student) => {
      return (
    <GridItem xs={12} sm={6} md={3}>
    <SimpleCheckbox label={student.name} />
    </GridItem>
      )
  })

    return (
      <GridContainer>
      {list}
      </GridContainer>

    );
  }
}

export default withStyles(styles)(Attendance);
