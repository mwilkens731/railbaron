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
      homeConfirmed: this.props.homeConfirmed
    }
  }

  componentWillReceiveProps(propsIn){
    this.setState({
      homeConfirmed: propsIn.homeConfirmed
    });
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
        <div className='row'>
          <div className='col-xl-1'><strong>{this.props.num}</strong></div>
          <div className='col-xl-2'><input type='text' id={'player' + this.props.num + 'Name'} placeholder={'Player ' + this.props.num}/></div>
          <div className='col-xl-2'>
            {!this.state.homeConfirmed &&
              <Select className='d-inline-block' autosize={false} clearable={false} placeholder='Select Home...' value={this.state.home} options={cityOptions} onChange={this.handleHomeChange}/>
            }
            {this.state.homeConfirmed &&
              <span>{this.state.home}</span>
            }
          </div>
          <div className='col-xl-2'>
            <Select autosize={false} clearable={false} placeholder='Select Origin...' value={this.state.origin} options={cityOptions} disabled={!this.state.homeConfirmed} onChange={this.handleOriginChange}/>
          </div>
          <div className='col-xl-2'>
            <Select autosize={false} clearable={false} placeholder='Select Destination...' value={this.state.destination} options={cityOptions} disabled={!this.state.homeConfirmed} onChange={this.handleDestinationnChange}/>
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
