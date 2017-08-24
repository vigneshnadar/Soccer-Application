import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';



export default class TeamStat extends Component {




  render() {
    const players = this.props.players;
    const numPlayers = players.length;

    //const team = get a total for ballManipuation
    //const possible = 3 * numPlayers

    const ballManipuation = Math.round((players.reduce((ballManipuation, player) => {
      return ballManipuation + player.ballManipuation;
    }, 0) / (3 * numPlayers)) * 100);

    const kickingAbilities = Math.round((players.reduce((kickingAbilities, player) => {
      return kickingAbilities + player.kickingAbilities;
    }, 0) / (3 * numPlayers)) * 100);

    const passingAbilities = Math.round((players.reduce((passingAbilities, player) => {
      return passingAbilities + player.passingAbilities;
    }, 0) / (3 * numPlayers)) * 100);


    const dualTackling = Math.round((players.reduce((dualTackling, player) => {
      return dualTackling + player.dualTackling;
    }, 0) / (3 * numPlayers)) * 100);

    const fieldCoverage = Math.round((players.reduce((fieldCoverage, player) => {
      return fieldCoverage + player.fieldCoverage;
    }, 0) / (3 * numPlayers)) * 100);

    const blockingAbilities = Math.round((players.reduce((blockingAbilities, player) => {
      return blockingAbilities + player.blockingAbilities;
    }, 0) / (3 * numPlayers)) * 100);

    const gameStrategy = Math.round((players.reduce((gameStrategy, player) => {
      return gameStrategy + player.gameStrategy;
    }, 0) / (3 * numPlayers)) * 100);

    const playmakingRisks = Math.round((players.reduce((playmakingRisks, player) => {
      return playmakingRisks + player.playmakingRisks;
    }, 0) / (3 * numPlayers)) * 100);


    const defense = Math.round((dualTackling + fieldCoverage + passingAbilities + blockingAbilities)/4);
    const offense = Math.round((playmakingRisks + gameStrategy + kickingAbilities + ballManipuation)/4);
    const total = Math.round((offense + defense)/2);


   const data = {
     labels: ['Ball Manipulation', 'Kicking', 'Passing', 'Duel/Tackling', 'Field Coverage', 'Blocking', 'Strategy', 'Risks'],
     datasets: [
       {
         label: 'In % of max possible',
         backgroundColor: 'rgba(143,202,249,0.2)',
         borderColor: 'rgba(12,71,161,1)',
         pointBackgroundColor: 'rgba(12,71,161,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(12,71,161,1)',
         data: [ballManipuation, kickingAbilities, passingAbilities, dualTackling, fieldCoverage, blockingAbilities, gameStrategy, playmakingRisks]
       }
     ]
   };




    return (
      <div>
    <h1>TeamStat</h1>
    <div className="row">
      <div className="col s12 m7">
        <Radar data={data}
          width={500}
          height={500}
          options={{
            maintainAspectRation: false
          }}/>
      </div>

      <div className="col s12 m5">
        <h4>Scores in % of max possible</h4>
        <Divider />
        <h4>Teams offense: {offense}%</h4>
        <h4>Teams defence: {defense}%</h4>
        <h4>Teams total: {total}%</h4>
        <Divider />
          <h4>Number of players: {numPlayers}</h4>
      </div>
    </div>
  </div>
);
  }
}
