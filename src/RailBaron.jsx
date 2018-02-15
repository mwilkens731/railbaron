import React from 'react';
import Header from './components/Header';
import Player from './components/Player';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import numPlayerOptions from './data/NumPlayerOptions';

class RailBaron extends React.Component{
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.confirmNumPlayers = this.confirmNumPlayers.bind(this);
    this.state = {
      numPlayers: 3,
      players: ['hidden', 'hidden', 'hidden'],
      numPlayersConfirmed: false
    }
  }

  handleClick (e) {
    if(e && e.value){
      let newPlayers = ['hidden', 'hidden', 'hidden'];
      for (let i = 3; i <= e.value; i++){
        newPlayers[i - 4] = i.toString();
      }
      this.setState({
        players: newPlayers,
        numPlayers: e.value
      });
    }
  }

  confirmNumPlayers () {
    this.setState({numPlayersConfirmed: true});
  }

  render () {
    return(
      <div className='container-fluid'>
        <Header/>
        {!this.state.numPlayersConfirmed &&
          <form className='form-inline'>
            <div className='row justify-content-center'>
              <div className='offset-sm-6 col-sm-12 form-group'>
                <label htmlFor='numPlayers' className='mb-2 mr-sm-2 mb-sm-0 col-form-label'>Number of Players: </label>
                <Select id='numPlayers' className='mb-2 mr-sm-2 mb-sm-0' value={this.state.numPlayers} onChange={this.handleClick} options={numPlayerOptions} clearable={false}/>
                <button type='button' className='btn btn-primary btn-sm' onClick={this.confirmNumPlayers}>Confirm</button>
              </div>
            </div>
          </form>
        }
        <br/>
        <div className='row'>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Home City</th>
                <th>Origin</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>
              <Player num='1'/>
              <Player num='2'/>
              <Player num='3'/>
              <Player num={this.state.players[0]}/>
              <Player num={this.state.players[1]}/>
              <Player num={this.state.players[2]}/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RailBaron;
