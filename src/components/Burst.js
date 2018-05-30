import React, {Component} from 'react';
import anime from 'animejs';

export default class Burst extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fragment: ""
		};
	}

	createElement() {
		var numberOfEls = 750;
	    var duration = 5000;
	    var midScreenX = window.innerWidth / 2;
	    var midScreenY = window.innerHeight / 2;
	    var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY)-150;
	    var fragment = document.createDocumentFragment();
	    for (var i = 0; i < numberOfEls; i++) {
			var angle = Math.random() * Math.PI * 2;
			var el = document.createElement('div');
			var node = document.createTextNode("+");
			el.appendChild(node);
			el.classList.add('particule');
			el.style.backgroundColor = 'transparent';
			el.style.width = '1px';
			el.style.height = '1px';
			anime({
				targets: el,
				width: ['1px', '10px'],
				height: ['1px', '10px'],
				left: [Math.floor(Math.random() * 50 - 50) + midScreenX, Math.floor(Math.random() * Math.cos(angle) * radius + midScreenX) + 'px'],
				top: [Math.floor(Math.random() * midScreenY - midScreenY/2) + midScreenY, 
				      Math.floor(Math.random() * Math.sin(angle) * radius/2 + midScreenY) + 'px'],
				duration: duration,
				easing: 'easeOutSine',
				loop: 2,
				direction: 'alternate'
			});
			fragment.appendChild(el);
	    }
	    document.querySelector('.burst-display').appendChild(fragment);
	    
	}

	render() {
		return (
			<div className="burst-display">
				
			</div>
		)
	}
}
