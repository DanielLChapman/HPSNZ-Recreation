import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import { TransitionGroup} from 'react-transition-group';

class Nav extends Component {

	linkClick = (event, destination) => {
		this.props.navClick();
	}

	mobileClick = () => {
		setTimeout(() => {
			document.getElementById('menu-mobile-checkbox').checked = false;
		}, 3000)
		this.props.mobileClick()
	}

	handleSideClick = () => {
		if (document.getElementById('menu-mobile-checkbox').checked) {
			this.props.play();
		} else {
			setTimeout( () => {
				this.props.pause();
			}, 1000);
		}
	}

	render() {
		return (
			<Fragment>
				<div className='navbar'>
					<TransitionGroup component="ul" className="nav-list">
						<li className="home-nav-link">
							<NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/"><h3>Home</h3></NavLink>
						</li>	
						<li>
							<NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/devil"><h3>Devil's Snare</h3></NavLink>
						</li>
						<li>
							<NavLink onClick={(e) => {this.linkClick(e, '/how')}} to="/pidwidgeon"><h3>Pidwidgeon</h3></NavLink>
						</li>
						<li>
							<NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/toadlike"><h3>Toad-Like Smile</h3></NavLink>
						</li>
					</TransitionGroup>
				</div>
				<div className="side-nav-container">
					<section className="side-nav">
					</section>
					<section className="menu-mobile">
						<input className="menu-mobile-checkbox" id="menu-mobile-checkbox" type="checkbox" />
						<label onClick={this.handleSideClick} htmlFor="menu-mobile-checkbox" className="menu-mobile-checkbox-label"></label>
						<h6 className="menu-mobile-menu-name">menu</h6>
						<h6 className="menu-mobile-close-name">close</h6>
						<section className="mobile-menu-section">
							<span><NavLink onClick={() => {this.mobileClick()}} to="/"><h3>Home</h3></NavLink></span>
							<div className="side-nav mobile-menu-section-side-nav">
							</div>
							<div className="overflow-container">
								<ul>
									<li className="home-nav-link"><NavLink onClick={() => {this.mobileClick()}} to="/"><h1>Home</h1></NavLink></li>	
									<li><NavLink onClick={() => {this.mobileClick()}} to="/devil"><h1>Devil's Snare</h1></NavLink></li>
									<li><NavLink onClick={() => {this.mobileClick()}} to="/pidwidgeon"><h1>Pidwidgeon</h1></NavLink></li>
									<li><NavLink onClick={() => {this.mobileClick()}} to="/toadlike"><h1>Toad-Like Smike</h1></NavLink></li>
								</ul>
							</div>
						</section>
					</section>
				</div>

			</Fragment>
		)
	}
}

export default withRouter(Nav);