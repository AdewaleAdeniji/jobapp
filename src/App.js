import React,{Component} from 'react';
import './css/App.css';
//import './css/style.css';
import Header from './header';

import Jobs from './jobs';
import Footer from './footer';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom';
import Jreact from './react.js';
import Vue from './vue.js';
import Angular from './angular.js';
import Desc from './desc';

class App extends Component{
 componentDidMount(){
    document.title="Remote Javascript Jobs";
  }

  render(){
    return (
      
        <HashRouter>
        <Header/>
        
        <Route exact path="/" component={Jobs}/>
        <Route path="/react" component={Jreact}/>
        <Route path="/vuejs" component={Vue}/>
        <Route path="/angular" component={Angular}/>
        <Route path="/jobs/:jobid" component={Desc}/>
        <Footer/>
        </HashRouter>
      )
  }
}

export default App;
