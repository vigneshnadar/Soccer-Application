import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';


//this to the way to use methods for security
Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  }
});
