import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderBar extends Component {
	
	
	render(){
		return (
	<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark sticky-top fixed-top" id="ftco-navbar">
	    <div className="container">
	      <Link className="navbar-brand" to="/">this.jobs</Link>
	     	<ul className="links">
	     		<li><i className="fab fa-react"></i> <span className="label">React </span></li>
	     		<li><i className="fab fa-vuejs"></i> <span className="label">VueJs </span></li>
	     	<li><i className="fab fa-angular"></i> <span className="label">Angular</span></li>
	     		
	     	</ul>
	      
		  </div>

	  </nav>
			)
	}
}
export default HeaderBar;
