import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";
import SimpleCard from "../../components/dashboard/card/SimpleCard";
import GridContainer from "../../components/grid/GridContainer";
import GridItem from "../../components/grid/GridItem";

const styles = theme => ({
});

function Dashboard(props) {
  return (
    <GridContainer>
    <GridItem xs={12} sm={6} md={3}>
    <SimpleCard header={"Students"} text={350}/>
    </GridItem>
    <GridItem xs={12} sm={6} md={3}>
    <SimpleCard header={"Events"} text={5}/>
    </GridItem>
    <GridItem xs={12} sm={6} md={3}>
    <SimpleCard header={"Teachers"} text={40}/>
    </GridItem>
    <GridItem xs={12} sm={6} md={3}>
    <SimpleCard header={"Result"} text={"80%"}/>
    </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(Dashboard);
