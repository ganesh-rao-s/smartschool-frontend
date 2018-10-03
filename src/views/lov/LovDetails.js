import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { tableHeader, tableData } from '../../datasource/LovDetails';
import DataTable from '../../components/table/DataTable';
import SimpleTable from '../../components/table/SimpleTable';

const styles = theme => ({

});

class LovDetails extends React.Component {

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

    const newTableDate = []
    tableData.map((lov) => {
      if (lov.lovType === this.props.type)
        newTableDate.push(lov)
    })


    const { classes, type } = this.props;

    return (
      <DataTable title={type}
        subTitle="August 1, 2018"
        tableHeader={tableHeader}
        tableData={newTableDate}
        order="asc" orderBy="name"
        onRequestSort={this.handleRequestSort}
        addButton={true} exportButton={true} importButton ={true}
        onAddClicked={this.handleAddButton}
        onExportClicked={this.handleExportButton}
        onImportClicked={this.handleImportButton}
      />

    );
  }
}

export default withStyles(styles)(LovDetails);
