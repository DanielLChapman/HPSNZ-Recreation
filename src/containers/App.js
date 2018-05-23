import React, { Component, Fragment } from 'react';

import Transition from '../components/Transition';
import Video from '../components/Video';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import Home from '../components/Home';



class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      pageTransitions: 0,
      destination: '/',
      redirect: false,
      burst: false,
      transition: false
    };
    this.video = React.createRef();
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.match.url !== undefined && this.props.match.url !== undefined) {
      if (prevProps.match.url !== this.props.match.url) {
        this.setState({
          destination: this.props.match.url
        })
      }
    } else {
      this.video.current.play();
    }
  }

  UNSAFE_componentWillUpdate() {
    var element = document.querySelector('.video-overlay-highlight');
    element.classList.remove("video-overlay-active");
  }

  componentDidUpdate() {
    var element = document.querySelector('.video-overlay-highlight');
    setTimeout(() => {
      element.classList.add("video-overlay-active");
    }, 100);
  }

  componentDidMount() {
    window.addEventListener("resize", this.video.current.resize);
    var element = document.querySelector('.video-overlay-highlight');
    setTimeout(() => {
      element.classList.add("video-overlay-active");
    }, 100);
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  navClick = () => {
    this.pauseVideo();
    this.setState({
      burst: true,
      transition: false
    });
  }

  mobileClick = () => {
    this.pauseVideo();
    this.setState({
      burst: false,
      transition: true
    })
  }

  pauseVideo = () => {
    this.video.current.pause();
  }

  playVideo = () => {
    this.video.current.play();
  }

  render() {
    var videoOverlayText, videoOverlayHighlight, videoToUse, content = <Home />;
    switch(this.props.match.params.paramters) {
      case "what": 
        videoOverlayText = "Devil’s Snare";
        videoOverlayHighlight = 
          <Fragment>
            <span>Ravenclaw</span> 
            <span>Love</span> 
            <span>Potion</span> 
          </Fragment>
        videoToUse = "Grasp";
        break;
      case "how":
        videoOverlayText = "Pigwidgeon";
        videoOverlayHighlight = 
          <Fragment>
            <span>Knut</span> 
            <span>Phoenix</span> 
            <span>Feather</span> 
          </Fragment>
        videoToUse = "Rolling";
        break;
      case "huh":
        videoOverlayText = "Toad-like smile";
        videoOverlayHighlight = 
          <Fragment>
            <span>Flourish</span> 
            <span>And</span> 
            <span>Blotts</span> 
          </Fragment>
        videoToUse = "2-hands";
        break;
      default: 
        videoOverlayText = "We Are";
        videoOverlayHighlight = 
          <Fragment>
            <span>Peruvian</span> 
            <span>Night</span> 
            <span>Powder</span> 
          </Fragment>
        videoToUse = "Hand-test";
        content = <Home />
    }
    var transition;
    if (this.state.transition) {
      transition = <Transition key={Date.now()} />
    }
    return (
      <div className="App"> 
        <header className="cover-header">
          <Nav pause={this.pauseVideo} play={this.playVideo} navClick={this.navClick} mobileClick={this.mobileClick}/>
          <section className="video-overlay">
            <h4>{videoOverlayText}</h4>
            <h1 className="video-overlay-highlight">{videoOverlayHighlight}</h1>
          </section>
          <Video ref={this.video} video={videoToUse} burst={this.state.burst} />
          {transition}
          <div className="lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>
        <section className="content">
          {content}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;