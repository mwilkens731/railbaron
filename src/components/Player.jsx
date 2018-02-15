import React from 'react';
import cityOptions from '../data/CityOptions';
import payoffs from '../data/Payoffs';
import PropTypes from 'prop-types';
import Select from 'react-select';

class Player extends React.Component {
  constructor (props) {
    super(props);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.payMe = this.payMe.bind(this);
    this.state = {
      home: '',
      destination: '',
      origin: '',
      homeConfirmed: this.props.homeConfirmed,
      payoff: ''
    };
  }

  componentWillReceiveProps (propsIn) {
    if (propsIn.homeConfirmed !== this.state.homeConfirmed) {
      this.setState({
        homeConfirmed: propsIn.homeConfirmed,
        origin: this.state.home
      });
    }
  }

  handleCityChange (e, propName) {
    if (e && e.value) {
      let newState = {};
      newState[propName] = e.value;
      this.setState(newState);
    }
  }

  payMe () {
    let oldOrigin = this.state.origin;
    let oldDestination = this.state.destination;
    this.setState({
      origin: oldDestination,
      destination: '',
      payoff: payoffs[oldOrigin][oldDestination]
    });
  }

  render () {
    if (this.props.num !== 'hidden') {
      return (
        <div className='row text-center border border-secondary ml-1 mr-1 pt-3 pb-3'>
          <div className='col-xl-1 mt-1'><strong>{this.props.num}</strong></div>
          <div className='col-xl-2'><input className='mt-1' type='text' id={'player' + this.props.num + 'Name'} placeholder={'Player ' + this.props.num} /></div>
          {!this.state.homeConfirmed &&
            <div className='col-xl-2'>
              <Select autosize={false} clearable={false} placeholder='Select Home...' value={this.state.home} options={cityOptions} onChange={(selectedOption) => this.handleCityChange(selectedOption, 'home')} />
            </div>
          }
          {this.state.homeConfirmed &&
            <div className='col-xl-2 mt-1'>{this.state.home}</div>
          }
          <div className='col-xl-2'>
            <Select autosize={false} clearable={false} placeholder='Select Origin...' value={this.state.origin} options={cityOptions} disabled={!this.state.homeConfirmed} onChange={(selectedOption) => this.handleCityChange(selectedOption, 'origin')} />
          </div>
          <div className='col-xl-2'>
            <Select autosize={false} clearable={false} placeholder='Select Destination...' value={this.state.destination} options={cityOptions} disabled={!this.state.homeConfirmed} onChange={(selectedOption) => this.handleCityChange(selectedOption, 'destination')} />
          </div>
          <div className='col-xl-1'>
            <button type='button' className='ml-1 btn btn-secondary btn-sm' onClick={this.payMe} disabled={this.state.destination === ''}>Arrive!</button>
          </div>
          <div className='col-xl-2'>
            <span>{this.state.payoff}</span>
          </div>
        </div>

      );
    }
    return null;
  }
}
Player.propTypes = {
  num: PropTypes.string,
  homeConfirmed: PropTypes.bool
};

export default Player;
