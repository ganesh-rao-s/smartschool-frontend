import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';

const styles = theme => ({

  table: {
    minWidth: 275,
  },
  card: {
    minWidth: 275,
  },
});

class DataTable extends Component {

  render() {
    const { classes, title, subTitle, tableData, tableHeader } = this.props;

    const headerdbKeys = [];

    const headerRow = tableHeader.map((item, key) => {
      headerdbKeys.push(item.dbKey)
      return (
        item.numeric ?
          <TableCell numeric component="th" scope="row">
            {item.label}
          </TableCell>
          :
          <TableCell component="th" scope="row">
            {item.label}
          </TableCell>
      );
    })

    const dataRows = tableData.map((item, key) => {
      return (
        <TableRow hover>
          {headerdbKeys.map((key, i) => {
            return (
              tableHeader[i].numeric ?
                <TableCell numeric>
                  {item[key]}
                </TableCell>
                :
                <TableCell >
                  {item[key]}
                </TableCell>
            )
          })}
        </TableRow>
      );
    })



    return (
      <Card>
        <CardHeader title={title} subheader={subTitle}>
        </CardHeader>

        <Table className={classes.table}>
          <TableHead>
            <TableRow >
              {headerRow}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows}
          </TableBody>
        </Table>
      </Card>
    );
  }
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  tableData: PropTypes.array.isRequired,
  tableHeader: PropTypes.array.isRequired
};

DataTable.defaultProps = {
  subTitle: ""
}

export default withStyles(styles)(DataTable);