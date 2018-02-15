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
    this.confirmButtonClick = this.confirmButtonClick.bind(this);
    this.state = {
      numPlayers: 3,
      players: ['hidden', 'hidden', 'hidden'],
      numPlayersConfirmed: false,
      homesConfirmed: false
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

  confirmButtonClick (propName) {
    let newState = {};
    newState[propName] = true;
    this.setState(newState);
  }

  render () {
    return (
      <div className='container-fluid'>
        <Header />
        {(!this.state.numPlayersConfirmed || !this.state.homesConfirmed) &&
          <form className='form-inline'>
            <div className='row justify-content-center'>
              <div className='offset-sm-3 col-sm-12 form-group'>
                {!this.state.numPlayersConfirmed &&
                  <span className='form-group'>
                    <label htmlFor='numPlayers' className='mb-2 mr-sm-2 mb-sm-0 col-form-label'>Number of Players: </label>
                    <Select id='numPlayers' className='mb-2 mr-sm-2 mb-sm-0' value={this.state.numPlayers} onChange={this.handleClick} options={numPlayerOptions} clearable={false} />
                    <button type='button' className='btn btn-primary btn-sm' onClick={() => this.confirmButtonClick('numPlayersConfirmed')}>Confirm Player Count</button>
                  </span>
                }
                {!this.state.homesConfirmed &&
                  <button type='button' className='ml-1 btn btn-primary btn-sm' onClick={() => this.confirmButtonClick('homesConfirmed')}>Confirm Home Cities</button>
                }
              </div>
            </div>
          </form>
        }
        <br />
        <div className='row text-center border border-secondary ml-1 mr-1 pt-3 pb-3'>
          <div className='col-xl-1'><strong>#</strong></div>
          <div className='col-xl-2'><strong>Name</strong></div>
          <div className='col-xl-2'><strong>Home City</strong></div>
          <div className='col-xl-2'><strong>Origin</strong></div>
          <div className='col-xl-2'><strong>Destination</strong></div>
          <div className='col-xl-1'><strong>Arrive</strong></div>
          <div className='col-xl-2'><strong>Payoff</strong></div>
        </div>
        <Player num='1' homeConfirmed={this.state.homesConfirmed} />
        <Player num='2' homeConfirmed={this.state.homesConfirmed} />
        <Player num='3' homeConfirmed={this.state.homesConfirmed} />
        <Player num={this.state.players[0]} homeConfirmed={this.state.homesConfirmed} />
        <Player num={this.state.players[1]} homeConfirmed={this.state.homesConfirmed} />
        <Player num={this.state.players[2]} homeConfirmed={this.state.homesConfirmed} />
      </div>
    );
  }
}

export default RailBaron;
