import React,{Component} from 'react';

export default class Footer extends Component{
	render(){
		return (
		<footer className="ftco-section ftco-section-2">
	  	<div className="col-md-12 text-center">
          <p className="mb-0">
            
            Copyright &copy;
            <script>
              document.write(new Date().getFullYear());
			</script>
			 All rights reserved | Developed with <i className="fa fa-heart" aria-hidden="true">
			 </i> &nbsp; by <a href="https://bit.ly/feranmidev?utm_source=this.jobs" target="_blank" rel="noopener noreferrer">DevFeranmi</a>
           
          </p>
        </div>
	  </footer>
			)
	}
}