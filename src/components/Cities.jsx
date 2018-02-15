import React from 'react';
import PropTypes from 'prop-types';

class Cities extends React.Component{
  constructor(props){
    super(props);
  }
  render () {
    return(
      <select id={this.props.htmlId} className="custom-select" defaultValue='default'>
        <option value='default'>{this.props.description}</option>
          <option value='alb'>Albany</option>
          <option value='atl'>Atlanta</option>
          <option value='bal'>Baltimore</option>
        	<option value='bil'>Billings</option>
          <option value='bir'>Birmingham</option>
          <option value='bos'>Boston</option>
        	<option value='buf'>Buffalo</option>
          <option value='but'>Butte</option>
          <option value='cas'>Casper</option>
        	<option value='cha'>Charleston</option>
          <option value='chr'>Charlotte</option>
          <option value='cht'>Chattanooga</option>
        	<option value='chi'>Chicago</option>
          <option value='cin'>Cincinnati</option>
          <option value='cle'>Cleveland</option>
        	<option value='col'>Columbus</option>
          <option value='dal'>Dallas</option>
          <option value='den'>Denver</option>
        	<option value='des'>Des Moines</option>
          <option value='det'>Detroit</option>
          <option value='elp'>El Paso</option>
        	<option value='far'>Fargo</option>
          <option value='ftw'>Ft. Worth</option>
          <option value='hou'>Houston</option>
        	<option value='ind'>Indianapolis</option>
          <option value='jac'>Jacksonville</option>
          <option value='kc'>Kansas City</option>
        	<option value='kno'>Knoxville</option>
          <option value='lv'>Las Vegas</option>
          <option value='lr'>Little Rock</option>
        	<option value='la'>Los Angeles</option>
          <option value='lou'>Louisville</option>
          <option value='mem'>Memphis</option>
        	<option value='mia'>Miami</option>
          <option value='mil'>Milwaukee</option>
          <option value='min'>Minneapolis</option>
        	<option value='mob'>Mobile</option>
          <option value='nas'>Nashville</option>
          <option value='no'>New Orleans</option>
        	<option value='ny'>New York</option>
          <option value='nor'>Norfolk</option>
          <option value='oak'>Oakland</option>
        	<option value='okc'>Oklahoma City</option>
          <option value='oma'>Omaha</option>
          <option value='phi'>Philadelphia</option>
        	<option value='pho'>Phoenix</option>
          <option value='pit'>Pittsburgh</option>
          <option value='poc'>Pocatello</option>
        	<option value='porme'>Portland, Maine</option>
          <option value='poror'>Portland, Oregon</option>
          <option value='pue'>Pueblo</option>
        	<option value='rc'>Rapid City</option>
          <option value='ric'>Richmond</option>
          <option value='ren'>Reno</option>
        	<option value='sac'>Sacremento</option>
          <option value='sal'>Salt Lake City</option>
          <option value='sa'>San Antonio</option>
        	<option value='sd'>San Diego</option>
          <option value='sf'>San Francisco</option>
          <option value='sea'>Seattle</option>
        	<option value='shr'>Shreveport</option>
          <option value='spo'>Spokane</option>
          <option value='stl'>St. Louis</option>
        	<option value='stp'>St. Paul</option>
          <option value='tb'>Tampa</option>
          <option value='tuc'>Tucumcari</option>
        	<option value='was'>Washington</option>
      </select>
    );
  }
}
Cities.propTypes = {
  htmlId: PropTypes.string,
  description: PropTypes.string
};
export default Cities;
