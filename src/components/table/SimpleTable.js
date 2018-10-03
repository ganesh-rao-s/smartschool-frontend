import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Toolbar, Paper, Typography, MuiThemeProvider } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  table: {
    minWidth: 275,
  },
});


class SimpleTable extends Component {
  state = {}

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { rowClicked, classes, title, subTitle, tableData, tableHeader, order, orderBy, onRequestSort, showToolbar, toolbar } = this.props;

    const headerdbKeys = [];

    const headerRow = tableHeader.map((item) => {
      headerdbKeys.push(item.dbKey)
      return (
        <TableCell component="th" scope="row" numeric={item.numeric}>
          {order && orderBy && onRequestSort ?
            <TableSortLabel
              active={orderBy === item.dbKey}
              direction={order}
              onClick={this.createSortHandler(item.dbKey)}
            >
              {item.label}
            </TableSortLabel> : item.label}
        </TableCell>
      );
    })

    const dataRows = tableData.map((item) => {
      return (
        <TableRow hover onClick={event => rowClicked(event, item)}>
          {headerdbKeys.map((dbKey, j) => {
            return (
              <TableCell numeric={tableHeader[j].numeric}>
                {tableHeader[j].dbKey === "house" ?
                  <Chip label={item[dbKey]} color="primary" className={classes.chip} /> : item[dbKey]
                }
              </TableCell>
            )
          })}
        </TableRow>
      );
    })



    return (
      <Paper >
        {toolbar ? toolbar :
          <Toolbar >
            <Typography variant="headline" color="inherit" noWrap >
              {title}&nbsp;
          </Typography>
          </Toolbar>}

        <Table className={classes.table}>
          <TableHead>
            <TableRow >
              {headerRow}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length > 0 ? dataRows : <TableRow ><TableCell >No rows are available</TableCell></TableRow>}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  tableData: PropTypes.array.isRequired,
  tableHeader: PropTypes.array.isRequired,
  rowClicked: PropTypes.func
};

export default withStyles(styles)(SimpleTable);