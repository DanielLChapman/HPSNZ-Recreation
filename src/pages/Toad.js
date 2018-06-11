import React, {Component, Fragment} from 'react';

import { NavLink } from 'react-router-dom';

export default class Toad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increment: 0,
			all: false
		};
	}
	componentDidMount() {
		setTimeout(
			window.startStar, 500);
		setTimeout(function() {
			var y = document.getElementsByClassName('journal-flex-all');
			Array.prototype.forEach.call(y, (x) => {
				x.classList.add('image-container-container-active');
			});
		}, 500); 
	}

	mobileClick = () => {
		this.props.mobileClick()
	}

	handleClick = (type) => {
		let t = document.getElementsByClassName('journal-flex-div');

		Array.prototype.forEach.call(t, (x) => {
			x.classList.remove('image-container-container-active');
		})
		var y = document.getElementsByClassName(`journal-flex-${type}`);

		setTimeout( () => {
			Array.prototype.forEach.call(y, (x) => {
				x.classList.add('image-container-container-active');
			});
		}, 500);
	}

	render() {
		return (
			<Fragment>
				<article className="toad-article">
					<span className="article-top-nav">
						<span className="article-top-nav-name" onClick={() => {this.handleClick('all')}}>All</span>
						<span className="article-top-nav-name" onClick={() => {this.handleClick('articles')}}>Articles</span>
						<span className="article-top-nav-name" onClick={() => {this.handleClick('case-studies')}}>Case Studies</span>
						<span className="article-top-nav-name" onClick={() => {this.handleClick('interviews')}}>Interviews</span>
						<span className="article-top-nav-name" onClick={() => {this.handleClick('recipes')}}>Recipes</span>
					</span>
					<section className="fullsize fullsize-journal">
						<section className="journal-flex">
							<div className={`journal-flex-div journal-flex-div-3 journal-flex-all journal-flex-articles `}>
								<div className="image-container">
								  <div className="image-container-slider">
								  </div>
								  <div className="image-container-slider-2">
								  </div>
								  <div className="image-container-image image-container-butterflies">
								  	<img src="/images/butterflies.jpeg" alt="butterflies" />
								  </div>
								</div> 
								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>Alohamora<br />wand</h3>
								</div>
								<NavLink onClick={() => {this.mobileClick()}} to="/journal-entries/alohamora"><button className="article-button-main tag-main">Read Article</button></NavLink>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className='journal-flex-div journal-flex-div-3 journal-flex-all journal-flex-interviews '>
								<div className="image-container">
								  <div className="image-container-slider">
								  </div>
								  <div className="image-container-slider-2">
								  </div>
								  <div className="image-container-image image-container-fire-exposure">
								  	<img src="./images/fire-exposure.jpeg" alt="fire-exposure"/>
								  </div>
								</div> 
								<div className="article-information">
									<h6>MAY 2018 <span></span> INTERVIEWS</h6>
									<h3>Windgardium<br />Leviosa</h3>
								</div>
								<NavLink onClick={() => {this.mobileClick()}} to="/journal-entries/windgardium_leviosa"><button className="article-button-main tag-main">Read Article</button></NavLink>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-3 journal-flex-all journal-flex-recipes ">
								<div className="image-container">
								  <div className="image-container-slider">
								  </div>
								  <div className="image-container-slider-2">
								  </div>
								  <div className="image-container-image image-container-light-book">
								  	<img src="./images/light-book.jpeg" alt="light-book"/>
								  </div>
								</div> 
								<div className="article-information">
									<h6>MAY 2018 <span></span> RECIPES</h6>
									<h3>MAGICAL<br />CREATURES</h3>
								</div>
								<NavLink onClick={() => {this.mobileClick()}} to="/journal-entries/magical_creatures"><button className="article-button-main tag-main">Read Article</button></NavLink>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-5  journal-flex-all journal-flex-case-studies">
								<div className="image-container">
								  <div className="image-container-slider">
								  </div>
								  <div className="image-container-slider-2">
								  </div>
								  <div className="image-container-image image-container-wood-map">
								  	<img src="./images/wood-map.jpeg" alt="wood-map"/>
								  </div>
								</div> 

								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>Rock<br />Cake</h3>
								</div>
								<NavLink onClick={() => {this.mobileClick()}} to="/journal-entries/alohamora"><button className="article-button-main tag-main">Read Article</button></NavLink>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-1 journal-flex-all journal-flex-interviews ">
								<div className="image-container">
								  <div className="image-container-slider">
								  </div>
								  <div className="image-container-slider-2">
								  </div>
								  <div className="image-container-image image-container-fire">
								  	<img src="./images/fire.jpeg" alt="fire"/>
								  </div>
								</div> 
								
								<div className="article-information">
									<h6>MAY 2018 <span></span> INTERVIEWS</h6>
									<h3>BAsilisk<br />Venom</h3>
								</div>
								<NavLink onClick={() => {this.mobileClick()}} to="/journal-entries/alohamora"><button className="article-button-main tag-main">Read Article</button></NavLink>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-2 journal-flex-all journal-flex-articles">
								<div className="image-container">
								  <div className="image-container-slider">
								  </div>
								  <div className="image-container-slider-2">
								  </div>
								  <div className="image-container-image image-container-sparks">
								  	<img src="./images/sparks.jpeg" alt="sparks"/>
								  </div>
								</div> 

								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>Fawkes<br />Maze</h3>
								</div>
								<NavLink onClick={() => {this.mobileClick()}} to="/journal-entries/windgardium_leviosa"><button className="article-button-main tag-main">Read Article</button></NavLink>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-2 journal-flex-all journal-flex-articles">
								<div className="image-container">
								  <div className="image-container-slider">
								  </div>
								  <div className="image-container-slider-2">
								  </div>
								  <div className="image-container-image image-container-smoke">
								  	<img src="./images/smoke.jpeg" alt="smoke"/>
								  </div>
								</div> 

								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>Goblin<br />Wars</h3>
								</div>
								<NavLink onClick={() => {this.mobileClick()}} to="/journal-entries/windgardium_leviosa"><button className="article-button-main tag-main">Read Article</button></NavLink>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
						</section>
					</section>
					<div className="lines">
			          <div></div>
			          <div></div>
			          <div></div>
			          <div></div>
			        </div>
				</article>
			</Fragment>
		)
	}
}