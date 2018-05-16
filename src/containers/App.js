import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';

import Burst from '../components/Burst';
import Transition from '../components/Transition';
import Video from '../components/Video';
import Nav from '../components/Nav'

var t;

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      pageTransitions: 0,
      destination: '/',
      redirect: false
    };
    this.burst = React.createRef();
    this.video = React.createRef();
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.match.url !== undefined && this.props.match.url !== undefined) {
      if (prevProps.match.url !== this.props.match.url) {
        console.log('here');
        this.setState({
          destination: this.props.match.url
        })
      }
    } else {
      this.video.current.play();
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.video.current.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    var videoOverlayText, videoOverlayHighlight, videoToUse;
    switch(this.props.match.params.paramters) {
      case "what": 
        videoOverlayText = "What We Do";
        videoOverlayHighlight = 
          <Fragment>
            <span>Engineering</span> 
            <span>Human</span> 
            <span>Performance</span> 
          </Fragment>
        videoToUse = <Video ref={this.video} video="Grasp" />
        break;
      case "how":
        videoOverlayText = "How We Do It";
        videoOverlayHighlight = 
          <Fragment>
            <span>Engineering</span> 
            <span>Human</span> 
            <span>Performance</span> 
          </Fragment>
        videoToUse = <Video ref={this.video} video="Rolling" />
        break;
      case "huh":
        videoOverlayText = "Where We Do It";
        videoOverlayHighlight = 
          <Fragment>
            <span>Engineering</span> 
            <span>Human</span> 
            <span>Performance</span> 
          </Fragment>
        videoToUse = <Video ref={this.video} video="2-hands" />
        break;
      default: 
        videoOverlayText = "We Are";
        videoOverlayHighlight = 
          <Fragment>
            <span>Engineering</span> 
            <span>Human</span> 
            <span>Performance</span> 
          </Fragment>
        videoToUse = <Video ref={this.video} video="Hand-test" />;
    }
    return (
      <div className="App"> 
        <Nav />
        <section className="video-overlay">
          <h4>{videoOverlayText}</h4>
          <h1>{videoOverlayHighlight}</h1>
        </section>
        {videoToUse}
        <Burst ref={this.burst} />
      </div>
    );
  }
}

export default App;