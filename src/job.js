import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Job extends Component {
	state = {
		link:'',
	}
	componentDidMount(){
		const link = "/jobs/"+this.props.id;
		this.setState({link:link});
	}
	render(){
	return (
		<div className="col-md-4">
						
						<div className="card text-center" key={this.props.id}>
						  <h5 className="card-header py-4">
						    {this.props.company}
						  </h5>
						 <Link to={this.state.link}>
						 <div className="card-body">
						    <h5 className="card-title">
						   {this.props.job}
						    </h5>
						    <p className="card-text">
						    
						    {this.props.skills}
						    </p>
						   
						  </div>
						  <div className="card-footer text-muted">
						    {this.props.date}
						  </div>
						  </Link>
						</div>
					</div>
	)
	}
}