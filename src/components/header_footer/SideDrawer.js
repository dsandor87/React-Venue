import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {
  return (
    <Drawer
    anchor="right"
    open={props.open}
    onClose= {()=> props.onClose(false)}
    >
<List component="nav">
  <ListItem
  button onClick= {()=> console.log('Featurede')}
  >Events starts</ListItem>
  <ListItem
  button onClick= {()=> console.log('Info')}
  >Venue Info</ListItem>
  <ListItem
  button onClick= {()=> console.log('high')}
  >Highlights</ListItem>
  <ListItem
  button onClick= {()=> console.log('pricing')}
  >Pricing</ListItem>
  <ListItem
  button onClick= {()=> console.log('Location')}
  >Location</ListItem>





</List>

    </Drawer>
  );
};

export default SideDrawer;