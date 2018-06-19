import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';

import {fakabase} from '../data/fakabase';

var interval, counter = 1;

export default class Home extends Component {

	switchInformation = (count) => {
		if (count > 7) {
			count = 1;
		}
		counter = count;
		
		let data = fakabase["home_page_data"][counter];
		var tempToUse;
		// update image-slider > img 
		tempToUse = document.querySelector('.fullsize-2 > .image-slider > img');
		tempToUse.src = data.image;
		//update background
		setTimeout(function() {
			tempToUse = document.querySelector('.fullsize-2');
			tempToUse.style.backgroundImage = data.background_image;
		}, 0);
		//Update header > h5
		tempToUse = document.querySelector('.fullsize-2 > header > h5');
		tempToUse.innerHTML = data.top_header;
		// Update header > h1
		tempToUse = document.querySelector('.fullsize-2 > header > h1');
		tempToUse.innerHTML = data.main_header;
		// update tag-line > p
		tempToUse = document.querySelector('.fullsize-2 > .tag-line > p > span');
		tempToUse.innerHTML = data.tag;
		//update image-slider > li active class 
		tempToUse = document.querySelector('.image-slider-li-active');
		tempToUse.classList.remove('image-slider-li-active');
		tempToUse = document.querySelector('.image-slider > ul li:nth-child('+(counter)+')');
		tempToUse.classList.add('image-slider-li-active');
	}

	componentDidMount() {
		this.switchInformation(counter);
		interval = setInterval(
			() => {
				counter++;
				this.switchInformation(counter);
			}, 5000);
  	}

  	componentWillUnmount() {
 	   clearInterval(interval);
  	}

	render() {
		return (
			<Fragment>
				<section className="fullsize fullsize-1">
					<header>
						<h5>Devil's Snare</h5>
						<h1>
							<span>Godric</span><br />
							<span>Hollow</span></h1>
						<div className="title-bracket title-bracket-right">
						</div>
					</header>
					<section className="tag-line">
						<p>
							Squashy armchairs dirt on your nose brass scales crush the 
							Sopophorous bean with flat side of silver dagger, releases 
							juice better than cutting. Full moon Whomping Willow three 
							turns should do it lemon drops. Locomotor trunks owl treats 
							that will be 50 points, Mr. Potter. Witch Weekly, he will 
							rise again and he will come for us, headmaster Erumpent horn. 
							Fenrir Grayback horseless carriages ‘zis is a chance many would die for!
							<br />
							<button className="tag-main">Learn More</button>
							<button className="tag-hidden"></button>
						</p>
					</section>
					<div className="lines">
			          <div></div>
			          <div></div>
			          <div></div>
			          <div></div>
			        </div>
				</section>
				<section className="fullsize fullsize-2">
					<header>
						<h5>Fat Lady Baubles</h5>
						<h1>Head Boy<br />Start-of-term</h1>
						<div className="title-bracket title-bracket-left">
						</div>
					</header>
					<section className="tag-line">
						<p><span className="tag-line-text">Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup.</span> <br />
						<button>Learn More</button>
						<button className="tag-hidden"></button>
						</p>
					</section>
					<section className="image-slider">
						<img src="./images/smoke.jpeg" alt="" />
						<ul>
							<li className="image-slider-li-active" onClick={() => {this.switchInformation(1)}}></li>
							<li onClick={() => {this.switchInformation(2)}}></li>
							<li onClick={() => {this.switchInformation(3)}}></li>
							<li onClick={() => {this.switchInformation(4)}}></li>
							<li onClick={() => {this.switchInformation(5)}}></li>
							<li onClick={() => {this.switchInformation(6)}}></li>
							<li onClick={() => {this.switchInformation(7)}}></li>
						</ul>
					</section>
					<div className="lines">
			          <div></div>
			          <div></div>
			          <div></div>
			          <div></div>
			        </div>
				</section>
				<section className="fullsize fullsize-journal">
					<header>
						<h2>The<br />Blog</h2>
						<div className="title-bracket title-bracket-left">
						</div>
					</header>
					<section className="explore-journal-link">
						<NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/huh"><h5>Explore all Entries <span></span></h5></NavLink>
					</section>
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
					<div className="lines">
			          <div></div>
			          <div></div>
			          <div></div>
			          <div></div>
			        </div>
				</section>
			</Fragment>
		)
	}
}
