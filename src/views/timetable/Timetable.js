import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { tableHeader, tableData } from '../../datasource/Student';
import SimpleStepper from '../../components/admission/Stepper';

const styles = theme => ({

});

class Timetable extends React.Component {

  render() {

    const { classes } = this.props;

    return (

      <h4>Timetable</h4>

    );
  }
}

export default withStyles(styles)(Timetable);
