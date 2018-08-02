import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DataTable from '../../components/table/DataTable';
import {tableHeader,tableData} from '../../datasource/Student';

const styles = theme => ({
});

class Student extends React.Component {
  render() {

    return (
        <DataTable title="List of Students"
        subTitle = "August 1, 2018"
        tableHeader={tableHeader}
        tableData={tableData}
        />
      
    );
  }
}

export default withStyles(styles)(Student);
