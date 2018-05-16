import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class Nav extends Component {

	constructor(props) {
		super(props);
	}

	linkClick = (event, destination) => {
		this.props.navClick();
	}

	mobileClick = () => {
		document.getElementById('menu-mobile-checkbox').checked = false;
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
					<ul className="nav-list">
						<li className="home-nav-link"><NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/"><h3>Home</h3></NavLink></li>	
						<li><NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/what"><h3>Devil's Snare</h3></NavLink></li>
						<li><NavLink onClick={(e) => {this.linkClick(e, '/how')}} to="/how"><h3>Pidwidgeon</h3></NavLink></li>
						<li><NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/huh"><h3>Toad-Like Smike</h3></NavLink></li>
					</ul>
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
									<li><NavLink onClick={() => {this.mobileClick()}} to="/what"><h1>Devil's Snare</h1></NavLink></li>
									<li><NavLink onClick={() => {this.mobileClick()}} to="/how"><h1>Pidwidgeon</h1></NavLink></li>
									<li><NavLink onClick={() => {this.mobileClick()}} to="/huh"><h1>Toad-Like Smike</h1></NavLink></li>
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