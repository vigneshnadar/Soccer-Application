import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';


export default class TeamList extends Component {

  updateCurrentPlayer(player){
    this.props.updateCurrentPlayer(player);
  }

  render() {
    return (
    <ListItem
      primaryText = {this.props.player.name}
      leftAvatar={<Avatar src="messi.jpg" />}
      onClick={this.updateCurrentPlayer.bind(this, this.props.player)}
    />
    )
  }
}
