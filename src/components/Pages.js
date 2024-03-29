import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';

import Devil from '../pages/Devil';
import Pidwidgeon from '../pages/Pidwidgeon';
import Toad from '../pages/Toad';

export default class Pages extends Component {
	linkClick = () => {

	}

	render() {
		console.log(this.props.parameters);
		let name = "";
		var page;
		switch(this.props.parameters) {
			case "devil":
				name = "Devil's Snare";
				page = <Devil />
				break;
			case "pidwidgeon":
				name= "Pidwidgeon";
				page = <Pidwidgeon />;
				break;
			default: 
				page = <Toad />
				name = "Toad";
		}
		return (
			<Fragment>
				<div className="brick"></div>
				<article>
					<span className="article-top-nav"><NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/" className="article-top-nav-home">Home</NavLink><span className="article-top-nav-name">{name}</span></span>
					{page}
				</article>
			</Fragment>
		)
	}
}