import React, {Component, Fragment} from 'react';

var marginLeft, pageX, pageX2, selectedBox;

export default class Devil extends Component {

	dragTask = (event) => {
		console.log(event);
	};
	mouseX = (event) => {
	    return event.clientX;
	  };

	mouseY = (event) => {
	    return event.pageY;
	};

	componentDidMount() {
		var y = document.querySelector('.flickity-doors');
		y.onmousedown = (event) => {
			event.preventDefault();
			pageX = event.pageX;
			
		}
		y.onmouseup = (event) => {
			pageX2 = event.pageX;

			let diff = parseInt(pageX2, 10) - parseInt(pageX, 10);
			marginLeft = y.children[0].children[0].style.marginLeft || "0";
			marginLeft = marginLeft.split("p")[0];
			y.children[0].children[0].style.marginLeft = parseInt(marginLeft, 10) + diff*1.2 + "px";
			
			console.log(parseInt(marginLeft, 10) + diff*1.2 < -2268);

			if (parseInt(marginLeft, 10) + diff*1.2 > 0) {
				setTimeout(function() {
					y.children[0].children[0].style.marginLeft = 0
				}, 1000);
			} else if (parseInt(marginLeft, 10) + diff*1.2 < -2268) {
				setTimeout(function() {
					y.children[0].children[0].style.marginLeft = "-2268px";
				}, 1000);
			}

		}
		
	}

	hoverTask = (event) => {
		var y = document.querySelector('.flickity-doors');
		var follower = document.getElementById('follower');
		var boundingHeight = event.currentTarget.getBoundingClientRect().top;
		var mouse;
	    mouse = {
	      x: this.mouseX(event),
	      y: this.mouseY(event)
	    };
	    follower.style.top = (parseInt(mouse.y, 10) - boundingHeight).toString() + 'px'
		follower.style.left = mouse.x + 'px';

		//for hovering
		let tempMargin = y.children[0].children[0].style.marginLeft || "0";
		tempMargin = tempMargin.split("p")[0];
		tempMargin = parseInt(tempMargin, 10) * -1;
		let hoveredBox = Math.floor((tempMargin + mouse.x)/500);
		if (hoveredBox > 6) {
			hoveredBox = 6;
		}

		let selected = document.getElementsByClassName('carousel-cell')[hoveredBox];
		if (selected !== selectedBox) {
			//remove class from selectedBox
			try {
				selectedBox.classList.remove('carousel-hovered');
			} catch (err) {
				//there wasnt one to begin with
			}
			//Add class to selected;
			selected.classList.add('carousel-hovered');

			selectedBox = selected;
		}
	}
	mouseEnter = () => {
		document.querySelector('#follower').style.display = "block";
	}
	mouseLeave = () => {
		document.querySelector('#follower').style.display = "none"
	}
	render() {
		return (
			<Fragment>
				<section className="article-title-header">
					<h1 className="article-title-left">Alohamora wand elf parchment, Wingardium Leviosa hippogriff</h1>
					<div className="article-title-header-wrapper">
						<div className="article-title-header-left pidwidgeon-article-title-header-left">
							<section className="left-title-top">
								<p>Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. </p>
								<div className="title-bracket title-bracket-left">
								</div>
							</section>
						</div>
						<div className="article-title-header-right pidwidgeon-article-title-header-right">
							<div className="article-title-header-right-media">
								<img src="/images/woman_shadow.png" alt="woman_shadow" />
								<div className="grey-image-background">
								</div>
							</div>
						</div>
					</div>
					<div className="article-header-content-grey pidwidgeon-article-header-content-grey">
						<p>
							A winning performance is made up of many components. Years of carefully planned training programmes, smart use of cutting edge technology and the upmost attention to health and wellbeing are just some of the elements which underpin an athlete’s successful performance on the day.
							<br /><br />
							High Performance Sport NZ in partnership with NSOs, supports elite athletes and coaches with all these aspects of their athletic and day-to-day lives, calling on our team of sports science, health and technology practitioners. These world class experts leave no stone unturned in finding areas for improvement which will result in maximising athletic performance. From identifying talent to personalising training to optimising performance – we are there in collaboration for the entire journey.
						</p>
					</div>
					<div className="article-header-content-white">	
						<div className="article-header-content-image">
							<img src="/images/man_light.png" alt="man-light" />
						</div>
						<div className="article-header-content-ul">
							<h5>Our Approach</h5>
							<ul>
								<li>
									<b>Stronger Together:</b> Partnership and collaboration is at the heart of how HPSNZ operates. It ensures our athletes, coaches and NSOs never feel isolated or without the right support networks. And being open to new viewpoints and ways of working means the most effective solutions are found together.
								</li>
								<li>
									<b>Totally Prepared:</b> We’re setting a new standard when it comes to the preparation of New Zealand’s elite athletes. We give each athlete long-term programmes based on world-class thinking from the right people at the right time. We also provide a holistic support network customised to their needs as an athlete and person.
								</li>
								<li>
									<b>Always agile:</b> Innovation in the sporting arena requires agility of thinking and perfect execution. Being able to cut through red tape, anticipate the next big thing and make slight adjustments to impact positively on performance are all vital when it comes to putting New Zealanders on the podium.
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className="flickity-doors" draggable={false} onMouseMove={this.hoverTask} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
			
					<div className="carousel">
						<div className="carousel-cell"  >
							<div className="carousel-cell-content">
								<div className="title-bracket title-bracket-background title-bracket-background-left title-bracket-left">
								</div>
								<div className="title-bracket title-bracket-transform title-bracket-transform-left title-bracket-left">
								</div>
								<div className="carousel-cell-content-text">
									<h4>Pigwidgeon</h4>
									<h3>Viktor<br />Krum</h3>
								</div>
							</div>
						</div>
						<div className="carousel-cell"  >
							<div className="carousel-cell-content">
								<div className="title-bracket title-bracket-background title-bracket-bottom title-bracket-background-bottom">
								</div>
								<div className="title-bracket title-bracket-transform title-bracket-transform-bottom title-bracket-bottom">
								</div>
								<div className="carousel-cell-content-text">
									<h4>Pigwidgeon</h4>
									<h3>Invisibility<br />Cloak</h3>
								</div>
							</div>
						</div>
						<div className="carousel-cell"  >
							<div className="carousel-cell-content">
								<div className="title-bracket title-bracket-background title-bracket-top title-bracket-background-top">
								</div>
								<div className="title-bracket title-bracket-transform title-bracket-transform-top title-bracket-top">
								</div>
								<div className="carousel-cell-content-text">
									<h4>Pigwidgeon</h4>
									<h3>Poltergeist<br />Charm</h3>
								</div>
							</div>
						</div>
						<div className="carousel-cell"  >
							<div className="carousel-cell-content">
								<div className="title-bracket title-bracket-background title-bracket-left title-bracket-background-left">
								</div>
								<div className="title-bracket title-bracket-transform title-bracket-transform-left title-bracket-left">
								</div>
								<div className="carousel-cell-content-text">
									<h4>Pigwidgeon</h4>
									<h3>Ickle<br />diddykins</h3>
								</div>
							</div>
						</div>
						<div className="carousel-cell"  >
							<div className="carousel-cell-content">
								<div className="title-bracket title-bracket-background title-bracket-bottom title-bracket-background-bottom">
								</div>
								<div className="title-bracket title-bracket-transform title-bracket-transform-bottom title-bracket-bottom">
								</div>
								<div className="carousel-cell-content-text">
									<h4>Pigwidgeon</h4>
									<h3>Blue<br />Flame Ickle</h3>
								</div>
							</div>
						</div>
						<div className="carousel-cell"  >
							<div className="carousel-cell-content">
								<div className="title-bracket title-bracket-background title-bracket-top title-bracket-background-top">
								</div>
								<div className="title-bracket title-bracket-transform title-bracket-transform-top title-bracket-top">
								</div>
								<div className="carousel-cell-content-text">
									<h4>Pigwidgeon</h4>
									<h3>Erumpent<br />Horn</h3>
								</div>
							</div>
						</div>
						<div className="carousel-cell"  >
							<div className="carousel-cell-content">
								<div className="title-bracket title-bracket-background title-bracket-left title-bracket-background-left">
								</div>
								<div className="title-bracket title-bracket-transform title-bracket-transform-left title-bracket-left">
								</div>
								<div className="carousel-cell-content-text">
									<h4>Pigwidgeon</h4>
									<h3>Half-Giant<br />Jinxes</h3>
								</div>
							</div>
						</div>
					</div>

					<div className="carousel-hover">
					</div>
					
					<div id="follower">
					  <div id="circle1"></div>
					  <div id="circle2"></div>
					</div>

				</section>
			</Fragment>
		)
	}
}