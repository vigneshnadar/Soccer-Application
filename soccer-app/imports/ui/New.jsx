import React, { Component } from 'react';


export default class New extends Component {
  render() {
    return (
  <div className="row">
    <form className="col s12">
      <h3>Add a new player</h3>

      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Name" ref="name" type="text" className="validate" />
        </div>
        <div className="input-field col s6">
          <input placeholder="Team" ref="team" type="text" className="validate" />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          HELLOec
          <select id="dropDown">
  <option value="volvo" color="black">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
          <select ref="ballManipuation">
            <option value="0">0 - Hasn't demonstrated skills</option>
            <option value="1">1 - Needs improvement</option>
            <option value="2">2 - Skill acquired</option>
            <option value="3">3 - Great skills/could teach</option>
          </select>
        </div>

        <div className="input-field col s6">
          <select className="browser-default" ref="kickingAbilities">
            <option value="0">0 - Hasn't demonstrated skills</option>
            <option value="1">1 - Needs improvement</option>
            <option value="2">2 - Skill acquired</option>
            <option value="3">3 - Great skills/could teach</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <textarea placeholder="Notes" ref="notes" type="text" className="materialize-textarea" />
        </div>
        <div className="input-field col s6">
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
        </div>
      </div>

    </form>
  </div>
    )
  }
}
