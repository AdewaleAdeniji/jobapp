import React,{Component} from 'react';
import Job from './job';
import Jobss from './jobs.json';
import Intro from './intro';

export default class Jobs extends Component{
	
	render(){
		return(
			<React.Fragment>
			<Intro />
			<section className="ftco-section ftco-section-2 bg-light" id="cards">
			<div className="container">
				
				<div className="row">
					{Jobss.map((job,index)=>{
				return <React.Fragment>{
					<Job company={job.company} skills={job.skills} job={job.name} date={job.date} id={index}/>
						}
						</React.Fragment>
					})}
				</div>
			</div>
	  </section>

	  </React.Fragment>
		)
	}
}