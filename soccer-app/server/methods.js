import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';


//this to the way to use methods for security
Meteor.methods({
  insertPlayer(player) {
    Players.insert(player);
  },

  updatePlayer(player) {
    Players.update(player._id,
    { $set: player});
  },

  deletePlayer(playerId) {
    Players.remove(playerId);

  }
});
