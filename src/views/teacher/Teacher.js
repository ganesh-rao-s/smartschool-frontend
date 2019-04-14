import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { tableHeader, tableData } from '../../datasource/Teacher';
import DataTable from '../../components/table/DataTable';
import SimpleTable from '../../components/table/SimpleTable';

const styles = theme => ({
  
});

class Teacher extends React.Component {

  handleRequestSort = (order, orderBy) => {
    alert(order + "-" + orderBy)
  }

  handleAddButton = () => {
    alert("add")
  }

  handleImportButton = () => {
    alert("import")
  }

  handleExportButton = () => {
    alert("export")
  }

  render() {

    const { classes } = this.props;

    return (
      <DataTable title="List of Teachers"
        subTitle="August 1, 2018"
        tableHeader={tableHeader}
        tableData={tableData}
        order="asc"
        orderBy="name"
        onRequestSort={this.handleRequestSort}
        addButton={true} exportButton={true} importButton ={true}
        onAddClicked={this.handleAddButton}
        onExportClicked={this.handleExportButton}
        onImportClicked={this.handleImportButton}
      />

      // <SimpleTable title="List of Students"
      //   subTitle="August 1, 2018"
      //   tableHeader={tableHeader}
      //   tableData={tableData}
      // />

    );
  }
}

export default withStyles(styles)(Teacher);
