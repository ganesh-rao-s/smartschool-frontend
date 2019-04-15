import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SimpleTable from '../../components/table/SimpleTable';
import { Toolbar } from '@material-ui/core';
import { Input, InputAdornment, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit / 2,
        textTransform: 'none',
    },
    input: {
        margin: theme.spacing.unit / 2,
        marginLeft: "auto",
        // flex:2
    },
    iconSmall: {
        fontSize: 20,
        marginRight: theme.spacing.unit / 4,
    },
})

class DataTable extends React.Component {
    state = {
        order: this.props.order,
        orderBy: this.props.orderBy,
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }
        this.setState({ order, orderBy }, () => this.props.onRequestSort(this.state.order, this.state.orderBy));
    };

    handleAddButton = () => {
        this.props.onAddClicked();
    }

    handleImportButton = () => {
        this.props.onImportClicked();
    }

    handleExportButton = () => {
        this.props.onExportClicked();
    }

    render() {
        const { addButton, exportButton, importButton, rowClicked, classes, title, subTitle, tableData, tableHeader } = this.props;
        const { order, orderBy } = this.state;
        const toolbar = [<Toolbar >
            <Typography variant="headline" color="inherit" noWrap >
                {title}&nbsp;&nbsp;
        </Typography>
            {addButton ?
                <Button variant="outlined" size="small" color="primary" className={classes.button} onClick={this.handleAddButton}>
                    <AddIcon className={classes.iconSmall} />
                    Add
      </Button> : ""}
            {exportButton ?
                <Button variant="outlined" size="small" color="primary" className={classes.button} onClick={this.handleExportButton}>
                    <ArrowUpwardIcon className={classes.iconSmall} />
                    Export
      </Button> : ""}
            {importButton ?
                <Button variant="outlined" size="small" color="primary" className={classes.button} onClick={this.handleImportButton}>
                    <ArrowDownwardIcon className={classes.iconSmall} />
                    Import
      </Button> : ""}
            <Input
                placeholder="Search"
                className={classes.input}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon className={classes.iconSmall} />
                    </InputAdornment>
                }
            />
           
        </Toolbar>]

        return (
            <div>
                <SimpleTable title={title}
                    subTitle={subTitle}
                    tableHeader={tableHeader}
                    tableData={tableData}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={this.handleRequestSort}
                    toolbar={toolbar}
                    rowClicked={rowClicked}
                />
            </div>
        );
    }
}

DataTable.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    tableHeader: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    addButton: PropTypes.bool.isRequired,
    exportButton: PropTypes.bool.isRequired,
    importButton: PropTypes.bool.isRequired,
    rowClicked: PropTypes.func,
    onAddClicked: PropTypes.func,
    onExportClicked: PropTypes.func,
    onImportClicked: PropTypes.func,
};

DataTable.defaultProps = {
    isAdd: false,
    rowClicked: () => { }
}

export default withStyles(styles)(DataTable);
