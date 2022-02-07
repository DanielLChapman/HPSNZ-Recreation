import React, { Component, Fragment } from 'react';

import Transition from '../components/Transition';
import Video from '../components/Video';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import Home from '../components/Home';
import Pages from '../components/Pages';

import Toad from '../pages/Toad';
import Stars from '../components/Stars';


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
    if (this.video.current) {
      window.addEventListener("resize", this.video.current.resize);
    }
    var element = document.querySelector('.video-overlay-highlight');
    setTimeout(() => {
      element.classList.add("video-overlay-active");
    }, 100);
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  navClick = () => {
    try {
      this.pauseVideo();
    }
    catch(e) {
      console.log(e);
    }
    this.setState({
      burst: true,
      transition: false
    });
  }

  mobileClick = () => {
    
    
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
    var videoOverlayText, videoOverlayHighlight, content = <Home />, videoToUse, urlParams;
    try {
      urlParams = this.props.match.params.paramters 
    } catch(err) {
      urlParams = "";
    }  
    content = <Pages parameters={urlParams} />
    switch(urlParams) {
      case "devil": 
        videoOverlayText = "Devil’s Snare";
        videoOverlayHighlight = 
          <Fragment>
            <span>Ravenclaw</span> 
            <span>Love</span> 
            <span>Potion</span> 
          </Fragment>
        videoToUse =  <Video ref={this.video} video="Black-3" burst={this.state.burst} />

        break;
      case "pidwidgeon":
        videoOverlayText = "Pigwidgeon";
        videoOverlayHighlight = 
          <Fragment>
            <span>Knut</span> 
            <span>Phoenix</span> 
            <span>Feather</span> 
          </Fragment>
        videoToUse =  <Video ref={this.video} video="Wand-3" burst={this.state.burst} />
        break;
      case "toadlike":
        videoOverlayText = "Toad-like smile";
        videoOverlayHighlight = 
          <Fragment>
            <span>Flourish</span> 
            <span>And</span> 
            <span>Blotts</span> 
          </Fragment>
        content = <Toad mobileClick={this.mobileClick} />
        videoToUse = <Stars />
        break;
      default: 
        videoOverlayText = "We Are";
        videoOverlayHighlight = 
          <Fragment>
            <span>Peruvian</span> 
            <span>Night</span> 
            <span>Powder</span> 
          </Fragment>
          videoToUse =  <Video ref={this.video} video="Grasp" burst={this.state.burst} />
//Black-3
//Wand-3
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

          {videoToUse}
          {transition}
          <div className="lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>
        <section className={`content ${urlParams}-content`}>
          {content}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;