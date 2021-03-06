import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, lightBlue800, lightBlue50 } from 'material-ui/styles/colors';

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
  showEditForm(){
    this.props.showEditForm();
  }





  render() {
    const player = this.props.player;
    const defense = player.dualTackling + player.fieldCoverage + player.passingAbilities + player.blockingAbilities;
    const offense = player.playmakingRisks + player.gameStrategy + player.kickingAbilities + player.ballManipuation;
    const total = offense + defense;


    return (
      <Card>

     <CardMedia
       overlay={<CardTitle title={player.name} subtitle={`Offense: ${offense} Defence: ${defense} Total: ${total}`} />}>
       <img src="messi.jpg" />
     </CardMedia>
     <CardText>
       <div style={styles.wrapper}>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
           {player.ballManipuation}
         </Avatar>
         Ball Manipulation
       </Chip>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
           {player.kickingAbilities}
         </Avatar>
         Kicking Abilities
       </Chip>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
           {player.passingAbilities}
         </Avatar>
         Passing Abilities
       </Chip>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
           {player.dualTackling}
         </Avatar>
         Dual Tackling
       </Chip>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
           {player.fieldCoverage}
         </Avatar>
         Field Coverage
       </Chip>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
           {player.gameStrategy}
         </Avatar>
         Game Strategy
       </Chip>
       <Chip
         backgroundColor={blue200}
         style={styles.chip}>
         <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
           {player.playmakingRisks}
         </Avatar>
         Playmaking Risks
       </Chip>
      </div>
     </CardText>
     <CardActions>
       <RaisedButton label="Edit player/stats"
     labelPosition="before"
   style={styles.button}
 onClick={this.showEditForm.bind(this)}/>
     </CardActions>
   </Card>
    )
  }
}
