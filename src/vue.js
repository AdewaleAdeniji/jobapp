import React,{Component} from 'react';
import Job from './job';
import Jobss from './jobs.json';

export default class Jobs extends Component{
	
	componentDidMount(){
		document.title="VueJs Jobs";
	}

	render(){
		return(
			<section className="ftco-section ftco-section-2 bg-light" id="cards">
			<div className="container">
				
				<div className="row">
					{Jobss.map((job,index)=>{
						const skills = job.skills;
						let seen = skills.indexOf('vue');
						let see = skills.indexOf('vuejs');
						if(seen>-1||see>-1){
				return <React.Fragment>{
					<Job company={job.company} skills={job.skills} job={job.name} date={job.date} id={index}/>
						}
						</React.Fragment>
					}
					else {
						return false;
					}
					})}
				</div>
			</div>
	  </section>
		)
	}
}