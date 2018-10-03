import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { tableHeader, tableData } from '../../datasource/LovMaster';
import DataTable from '../../components/table/DataTable';
import LovDetails from './LovDetails';

const styles = theme => ({

});

class LovMaster extends React.Component {
  state = {
    type: "",
    showDetails:false
  }

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

  rowClicked = (event, item) => {
    this.setState({ type: item.lovType,showDetails:true })
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <DataTable title="List of Values"
          subTitle="August 1, 2018"
          tableHeader={tableHeader}
          tableData={tableData}
          order="asc" orderBy="name"
          onRequestSort={this.handleRequestSort}
          rowClicked={this.rowClicked}
          addButton={true} exportButton={true} importButton={true}
          onAddClicked={this.handleAddButton}
          onExportClicked={this.handleExportButton}
          onImportClicked={this.handleImportButton}
        />
        <br />
        {this.state.showDetails?
        <LovDetails type={this.state.type} />:""}
      </div>
    );
  }
}

export default withStyles(styles)(LovMaster);
