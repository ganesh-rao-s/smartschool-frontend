import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { tableHeader, tableData } from '../../datasource/Student';
import SimpleStepper from '../../components/admission/Stepper';

const styles = theme => ({

});

class Admission extends React.Component {

  render() {

    const { classes } = this.props;

    return (

      <SimpleStepper/>

    );
  }
}

export default withStyles(styles)(Admission);
