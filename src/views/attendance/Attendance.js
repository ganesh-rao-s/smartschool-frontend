import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SimpleCheckbox from '../../components/form/SimpleChechbox';

const styles = theme => ({

});

class Attendance extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
        <SimpleCheckbox label="Ganesh Shreedhar" />
        <SimpleCheckbox label="Chiranjeeb Sahoo" />
        <SimpleCheckbox label="Joydeep Nayak" />
        <SimpleCheckbox label="Narendra Kumar" />
        <SimpleCheckbox label="Dimpul Kumar" />
        <SimpleCheckbox label="Deeptikanta" />
        <SimpleCheckbox label="Vishwas Balakrishna" />
        <SimpleCheckbox label="Rohit Sharma" />

      </div>

    );
  }
}

export default withStyles(styles)(Attendance);
