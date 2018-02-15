import React from 'react';
import '../css/railBaronStyles.css';
import theBaron from '../img/railbaron.png';

class Header extends React.Component{
  render () {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 header'>
            <h3>Rail Baron Helper</h3>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-sm-12 header'>
            <img src={theBaron} alt='the baron'/>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-sm-12 header caption'>
            <p>What up bros</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
