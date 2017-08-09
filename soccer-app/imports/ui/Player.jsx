import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin:12

  }
  }



export default class Player extends Component {
  render() {
    return (
      <Card>

     <CardMedia
       overlay={<CardTitle title="Lionel Messi" subtitle="Offense:5 Defence: 12" />}>
       <img src="messi.jpg" />
     </CardMedia>
     <CardText>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={blue200} backgroundColor={blue900}>
           2
         </Avatar>
         Ball Manipulation
       </Chip>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={blue200} backgroundColor={blue900}>
           2
         </Avatar>
         Passing Abilities
       </Chip>
     </CardText>
     <CardActions>
     </CardActions>
   </Card>
    )
  }
}
