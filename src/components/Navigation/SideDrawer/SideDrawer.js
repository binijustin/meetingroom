import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = {
  list: {
    width: 250,
  }
};

class SideDrawer extends Component {

  render() {
    const { classes } = this.props;
    console.log(this.props);
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <ListItemText primary="Meeting Room" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.drawer} onClose={this.props.toggleOff}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleOff}
            onKeyDown={this.props.toggleOff}
          >
            {sideList}
          </div>
        </Drawer>

      </div>
    );

  }
}


SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideDrawer);