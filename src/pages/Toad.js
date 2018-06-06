import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';

export default class Toad extends Component {

	componentDidMount() {
		setTimeout(
			window.startStar, 500);
	}
	render() {
		return (
			<Fragment>
				<article className="toad-article">
					<span className="article-top-nav"><span className="article-top-nav-name">All</span><span className="article-top-nav-name">Articles</span><span className="article-top-nav-name">Case Studies</span><span className="article-top-nav-name">Interviews</span><span className="article-top-nav-name">Recipes</span></span>
					<section className="fullsize fullsize-journal">
						<section className="journal-flex">
							<div className="journal-flex-div journal-flex-div-3">
								<img src="./images/butterflies.jpeg" alt="butterflies"/>
								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>MAGICAL<br />CREATURES</h3>
								</div>
								<button className="article-button-main tag-main">Read Article</button>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-3">
								<img src="./images/fire-exposure.jpeg" alt="fire-exposure"/>
								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>MAGICAL<br />CREATURES</h3>
								</div>
								<button className="article-button-main tag-main">Read Article</button>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-3">
								<img src="./images/light-book.jpeg" alt="light-book"/>
								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>MAGICAL<br />CREATURES</h3>
								</div>
								<button className="article-button-main tag-main">Read Article</button>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-5">
								<img src="./images/wood-map.jpeg" alt="wood-map"/>
								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>MAGICAL<br />CREATURES</h3>
								</div>
								<button className="article-button-main tag-main">Read Article</button>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-1">
								<img src="./images/fire.jpeg" alt="fire"/>
								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>MAGICAL<br />CREATURES</h3>
								</div>
								<button className="article-button-main tag-main">Read Article</button>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-2">
								<img src="./images/sparks.jpeg" alt="sparks"/>
								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>MAGICAL<br />CREATURES</h3>
								</div>
								<button className="article-button-main tag-main">Read Article</button>
								<button className="article-button-hidden tag-hidden"></button>
							</div>
							<div className="journal-flex-div journal-flex-div-2">
								<img src="./images/smoke.jpeg" alt="smoke"/>
								<div className="article-information">
									<h6>MAY 2018 <span></span> ARTICLES</h6>
									<h3>MAGICAL<br />CREATURES</h3>
								</div>
								<button className="article-button-main tag-main">Read Article</button>
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