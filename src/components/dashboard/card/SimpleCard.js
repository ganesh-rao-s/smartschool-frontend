import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import StudentsIcon from '@material-ui/icons/GroupAdd';
import UpdateIcon from '@material-ui/icons/Update';
const styles = theme => ({
  cardOuter: {
    position: "oblolete"
  },
  cardHeader: {
    background: "#3f51b5",
    padding: 15,
    position: "relative",
    width: "20%",
    marginLeft: "5%",
    top: "10px",
    zIndex: 2
  },
  card: {
    position: "relative",
    top: "-50px",
    zIndex: 1
  },
  cardTitle: {
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 200
  },
  cardData: {
    textAlign: 'right',
    fontSize: 30,
    fontWeight: 300
  },
  cardIcon: {
    width: 40,
    height: 40,
    color: "white"
  },
  cardAction: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 200
  }
});

function SimpleCard(props) {
  const { header, text, classes } = props;

  return (
    <div className="cardOuter">
      <div>
        <Card raised={true} className={classes.cardHeader}>
          <StudentsIcon className={classes.cardIcon} />
        </Card >
      </div>
      <div>
        <Card className={classes.card}>

          <CardContent>
            <Typography className={classes.cardTitle} color="textSecondary">
              {header}
            </Typography>
            <Typography className={classes.cardData}>
              {text}
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
              <Typography color="textSecondary" className={classes.cardAction}>
                Just Updated
          </Typography>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.string,
  text: PropTypes.string
};

export default withStyles(styles)(SimpleCard);
