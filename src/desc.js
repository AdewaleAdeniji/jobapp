import React,{Component} from 'react';
import Jobs from './jobs.json';

export default class Desc extends Component{
	state ={
		company:'<i className="fa fa-spinner fa-spin"></i>',
		name:'<i className="fa fa-spinner fa-spin"></i>',
		description:'<i className="fa fa-spinner fa-spin"></i>',
		apply:'',
		skills:'',
	}
	componentDidMount(){
		try{
		const jobid = this.props.match.params.jobid;
		const job = Jobs[jobid];
		if(job===undefined||job===''){
			this.props.history.push("/");
		}
		else {
		this.setState({company:job.company,name:job.name,description:job.description,apply:job.link,skills:job.skills})
	}
	}
	catch(err){
		this.props.history.push("/");
	}
	}
	render(){
		//console.log(this.props.history.params);
		return (
				<React.Fragment>
				<section className="hero-wrap js-fullheight fullscreen">
		  		<div className="container">
		  			<div className="row description js-fullheight align-items-center center-text justify-content-center">
		  				<div className="col-md-8 text-center">
		  					<div className="text">
		  						<h1>{this.state.company}</h1>
		  						<h4 className="mb-5 remotedesc">
		  						{this.state.name}
		  						</h4>
		  						
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  	</section>
		  	<section className="ftco-section ftco-section-2 bg-primary" id="carousel">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12">
						<h2 className="heading-section mb-4 pb-md-3">
							{this.state.name}
						</h2>
						<p>{this.state.skills}</p>
						<p>{this.state.description}</p>
						<p><a href={this.state.apply} className="btn btn-white" target="_blank" rel="noopener noreferrer">Apply</a></p>
					</div>
					
				</div>
			</div>
	  </section>

				</React.Fragment>
			)
	}
}