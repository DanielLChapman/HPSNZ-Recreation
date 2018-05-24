import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";

export default class Article extends Component {
	linkClick = () => {

	}
	render() {
		console.log(this.props.parameters);
		let name = "";
		switch(this.props.parameters) {
			case "what":
				name = "Devil's Snare";
				break;
			default: 
				name = "butt";
		}
		return (
			<Fragment>
				<div className="brick"></div>
				<article>
					<span className="article-top-nav"><NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/" className="article-top-nav-home">Home</NavLink><span className="article-top-nav-name">{name}</span></span>
				</article>
			</Fragment>
		)
	}
}