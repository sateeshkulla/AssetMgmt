/* @flow */
import React, { Component, PropTypes } from "react";
import Radium from "radium";
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'

@Radium
export default class LoginComponent extends Component {
	
	login(e) {
		alert(e.state);
	}
	
    render () {
    	 return (
    			 <div className="container center-block">
    			 	<div className="row">
    			 		<div className="col-sm-6 col-md-4 col-md-offset-4"> 
    			 			<h1>Login</h1>
    			 				<form role="form">
				    		        <div className="form-group">
				    		          <label htmlFor="username">Username</label>
				    		          <input type="text" value={this.state.user} className="form-control" id="username" placeholder="Username" />
				    		        </div>
				    		        <div className="form-group">
				    		          <label htmlFor="password">Password</label>
				    		          <input type="password" value={this.state.password} className="form-control" id="password" ref="password" placeholder="Password" />
				    		        </div>
				    		          <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.login.bind(this)}>Submit</button>
				    		    </form>
				    		 </div>
				    	</div>
    		    </div>
    	        );
    }
}