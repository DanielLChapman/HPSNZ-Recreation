import React, {Component} from 'react';

// eslint-disable-next-line
!function() {

	navigator.getUserMedia = navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia;

	/**
	 * value to character mapping from dark to light
	 * add more characters and they will be accounted for automatically
	 * note: the extra &nbsp; is to account for the value range inclusive of 100%
	 */
	//var chars = ['@','#','$','=','*','!',';',':','~','-',',','.','&nbsp;', '&nbsp;'];
	//For light skin
	var chars = ['&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','*','.','+','+','.','.', '&nbsp;'];
	//For booboo
	//var chars = ['+',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', '&nbsp;'];
	var charLen = chars.length-1;
	function getChar(val) { return chars[parseInt(val*charLen, 10)]; }

	/**
	 * log when getUserMedia or when video metadata loading fail
	 */
	function logError(err) { if(console && console.log) console.log('Error!', err); return false; }

	/**
	 * Options:
	 * el        - DOM node (img or video)
	 * container - if supplied, ascii string will automatically be set on container innerHTML during a render
	 * fn        - function, callback to fire during a render with ascii string as arguments[0]
	 * width     - hi-res images/videos must be resized down, specify width and jscii will figure out height
	 * color     - enable color ascii (highly experimental)
	 * interval  - integer - for videos only, this is the interval between each render
	 * webrtc    - bool, default false, only applicable if 'el' is a video
	 */
	function Jscii(params) {
		var self = this;
		var preHeight = document.documentElement.clientHeight;

		var el = this.el = params.el;
		this.container = params.container;
		this.fn = typeof params.fn === 'function' ? params.fn : null;
		this.height = typeof params.height === 'number' ? params.height : Math.floor(preHeight/5);
		this.color = !!params.color;

		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');

		var nodeName = el.nodeName;
		if(nodeName === 'IMG') {
			el.addEventListener('load', function(){ self.render(); });
		} else if(nodeName === 'VIDEO') {
			this.interval = typeof params.interval === 'number' ? params.interval : 15;
			this.webrtc = !!params.webrtc;

			if(this.webrtc) {
				if(typeof navigator.getUserMedia !== 'function') {
					return logError((el.innerHTML = 'Error: browser does not support WebRTC'));
				}
				try {
					navigator.getUserMedia({video: true, audio: false}, function(localMediaStream){
						self.mediaStream = localMediaStream;
						el.src = (window.URL || window.webkitURL).createObjectURL(localMediaStream);
					}, logError);
				}
				catch (err) {
					
				}
			}
			el.addEventListener('loadeddata', function() { self.play(); });
		}
	}

	/**
	 * start rendering, for video type only
	 */
	Jscii.prototype.play = function() {
		var self = this;
		self.pause().videoTimer = setInterval(function() {
			if(self.mediaStream || !self.webrtc) self.render();
		}, self.interval);
		return self;
	};

	/**
	 * pause rendering, for video type only
	 */
	Jscii.prototype.pause = function() {
		if(this.videoTimer) clearInterval(this.videoTimer);
		return this;
	};

	Jscii.prototype.resize = function() {
		this.preHeight = document.documentElement.clientHeight;
		return this;
	};

	/**
	 * getter/setter for output dimension
	 */
	Jscii.prototype.dimension = function(width, height) {
		if(typeof width === 'number' && typeof height === 'number') {
			this._scaledWidth = this.canvas.width = width;
			this._scaledHeight = this.canvas.height = height;
			return this;
		} else {
			return { width: this._scaledWidth, height: this._scaledHeight };
		}
	};

	/**
	 * gets context image data, perform ascii conversion, append string to container
	 */
	Jscii.prototype.render = function() {
		var el = this.el, ratio;
		var dim = this.dimension(), width, height;
		if(!dim.width || !dim.height) {
			ratio = el.videoWidth/el.videoHeight;
			this.dimension(parseInt(this.height*ratio, 10), this.height);
			dim = this.dimension();
		}
		width = dim.width;
		height = dim.height;

		// might take a few cycles before we
		if(!width || !height) return;

		this.ctx.drawImage(this.el, -width/6, -height/6, width, height);
		this.imageData = this.ctx.getImageData(0, 0, width, height).data;
		var asciiStr = this.getAsciiString();
		if(this.container) this.container.innerHTML = asciiStr;
		if(this.fn) this.fn(asciiStr);
	};

	/**
	 * given a picture/frame's pixel data and a defined width and height
	 * return the ASCII string representing the image
	 */
	Jscii.prototype.getAsciiString = function() {
		var dim = this.dimension(), width = dim.width, height = dim.height;
		var len = width*height, d = this.imageData, str = '';

		// helper function to retrieve rgb value from pixel data
		var getRGB = function(i) { return [d[i=i*4], d[i+1], d[i+2]]; };

		for(var i=0; i<len; i++) {
			if(i%width === 0) str += '\n';
			/*if (i%2 !== 0 ) {
				var rgb = getRGB(i);
				var val = Math.max(rgb[0], rgb[1], rgb[2])/255;
				str += getChar(val);
			} else {
				str += " ";
			}*/
			/*if(i%width === 0) str += '\n';
			*/
			var rgb = getRGB(i);
			var val = Math.max(rgb[0], rgb[1], rgb[2])/255;
			//if(this.color) str += '<font style="color: rgb('+rgb.join(',')+')">'+getChar(val)+'</font>';
			if(this.color) {
				str += '<font style="color: rgb('+rgb.join(',')+')">'+getChar(val)+'</font>';
			} 
			else {
				str += getChar(val);
			}
			//else str += '*';
		}
		return str;
	};

	window.Jscii = Jscii;

}();

var videoJscii;
export default class Video extends Component {

	constructor(props) {
		super(props);
		this.state = {
			video: this.props.video,
			burst: this.props.burst
		}
	}

	componentDidMount() {
		videoJscii = new window.Jscii({
			container: document.getElementById('ascii-container-video'),
			el: document.getElementById('jscii-element-video')
		});
		document.getElementById("jscii-element-video").addEventListener('loadeddata', function () {
			document.getElementById("jscii-element-video").play();
		});
	}

	componentWillReceiveProps(nextProps) {
		videoJscii.pause();
		this.setState({
			video: nextProps.video,
			burst: nextProps.burst
		});
		videoJscii.play();
	}

	componentDidUpdate() {
		this.pause();
		setTimeout(this.play, 3000);
		// if (this.props.burst) {
		// 	document.getElementById("jscii-element-video-transition").play();
		// 	document.getElementById("jscii-element-video").pause();
		// 	videoJscii = new window.Jscii({
		// 		container: document.getElementById('ascii-container-video'),
		// 		el: document.getElementById('jscii-element-video-transition')
		// 	});
		// 	document.getElementById("jscii-element-video").addEventListener('loadeddata', function () {
		// 		setTimeout(function() {
		// 			document.getElementById("jscii-element-video-transition").pause();
		// 			document.getElementById("jscii-element-video").play();
		// 			videoJscii = new window.Jscii({
		// 				container: document.getElementById('ascii-container-video'),
		// 				el: document.getElementById('jscii-element-video')
		// 			});
		// 		}, 5000);
		// 	});
		// }
	}

	pause() {
		document.getElementById("jscii-element-video").pause();
		videoJscii.pause();
	}

	play() {
		document.getElementById("jscii-element-video").play();
		videoJscii.play();
	}

	resize() {
		videoJscii.pause();
		videoJscii = new window.Jscii({
			container: document.getElementById('ascii-container-video'),
			el: document.getElementById('jscii-element-video')
		});
		videoJscii.play();
	}

	render() {
		//Maybe I have to pre-load all the videos and then have only certain ones play
		//and the el effects only certain ones.
		//Also get rid of empty space in front of some videos
		return (
			<div className="video-display">
				<video id="jscii-element-video" width="150" height="112" controls loop muted src={`./videos/${this.state.video}.mp4`}>
					Your browser does not support video
				</video>
				<video id="jscii-element-video-transition" width="150" height="112" controls loop muted src='./videos/Transition.mp4'>
					Your browser does not support video
				</video>
				<pre id="ascii-container-video"></pre>
			</div>
		)
	}
}
