import React from 'react';
import cityOptions from '../data/CityOptions';
import PropTypes from 'prop-types';
import Select from 'react-select';

class Player extends React.Component{
  constructor(props){
    super(props);
    this.handleHomeChange = this.handleHomeChange.bind(this);
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.confirmHome = this.confirmHome.bind(this);
    this.handleDestinationnChange = this.handleDestinationnChange.bind(this);
    this.state = {
      home: '',
      destination: '',
      origin: '',
      homeConfirmed: false
    }
  }

  handleHomeChange(e){
    if(e && e.value){
      this.setState({home: e.value});
    }
  }

  handleDestinationnChange(e){
    if(e && e.value){
      this.setState({destination: e.value});
    }
  }

  handleOriginChange(e){
    if(e && e.value){
      this.setState({origin: e.value});
    }
  }

  confirmHome(){
    this.setState({
      homeConfirmed: true,
      origin: this.state.home
    });
  }

  render (){
    if(this.props.num !== 'hidden'){
      return (
        <tr>
          <th scope='row'>{this.props.num}</th>
          <td><input type='text' id={'player' + this.props.num + 'Name'} placeholder={'Player ' + this.props.num}/></td>
          <td>
            {!this.state.homeConfirmed &&
              <div>
                <Select autosize={false} clearable={false} placeholder='Select Home...' value={this.state.home} options={cityOptions} onChange={this.handleHomeChange}/>
                {this.state.home !== '' &&
                  <button type='button' className='btn btn-primary btn-sm' onClick={this.confirmHome}>Confirm</button>
                }
              </div>
            }
            {this.state.homeConfirmed &&
              <span>{this.state.home}</span>
            }
          </td>
          <td>
            <Select autosize={false} clearable={false} placeholder='Select Origin...' value={this.state.origin} options={cityOptions} disabled={this.state.home === ''} onChange={this.handleOriginChange}/>
          </td>
          <td>
            <Select autosize={false} clearable={false} placeholder='Select Destination...' value={this.state.destination} options={cityOptions} disabled={this.state.home === ''} onChange={this.handleDestinationnChange}/>
          </td>
        </tr>

      );
    }
    return null;
  }
}
Player.propTypes = {
  num: PropTypes.string
};

export default Player;
