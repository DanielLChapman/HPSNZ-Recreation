import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Transition from '../components/Transition';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import {fakabase} from '../data/fakabase';

import Article from '../journal/Article';
import Video from '../journal/Video';

class Journal extends Component {

  constructor (props) {
    super(props);
    this.state = {
      pageTransitions: 0,
      destination: '/',
      redirect: false,
      burst: false,
      transition: false
    };
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.match.url !== undefined && this.props.match.url !== undefined) {
      if (prevProps.match.url !== this.props.match.url) {
        this.setState({
          destination: this.props.match.url
        })
      }
    }
  }

  UNSAFE_componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  navClick = () => {
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

  playVideo = () => {
    //no video
  }

  pauseVideo = () => {
    //no video
  }


  render() {
    var content;
    let data = fakabase['articles'][this.props.match.params.paramters];

    if (!data) {
      data = fakabase['articles']['alohamora'];
    }
    var videoOverlayText = `${data.uploadedAt}, ${data.type}`, videoOverlayHighlight = data.topTitle;

    switch(data.template) {
      case "article": 
        content = <Article data={data} />
        break;
      case "video":
        content = <Video data={data} />
        break;
      default:
        content = <Article data={data} />
        break;
    }

    var transition;
    if (this.state.transition) {
      transition = <Transition key={Date.now()} />
    }
    
    console.log(data);

    return (
      <div className="App"> 
        <header className="journal-header">
          <Nav pause={this.pauseVideo} play={this.playVideo} navClick={this.navClick} mobileClick={this.mobileClick}/>
          <section className="video-overlay">
            <h4>{videoOverlayText}</h4>
            <h1 className="video-overlay-highlight"><span>{videoOverlayHighlight}</span></h1>
          </section>
          {transition}
          <div className="lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>
        <section className={`content ${this.props.match.params.paramters}-content`}>
          <div className="brick"></div> 
          <article className="journal-content">
            <span className="article-top-nav"><NavLink onClick={(e) => {this.linkClick(e, '/')}} to="/" className="article-top-nav-home article-top-nav-home-home">Home</NavLink><NavLink onClick={(e) => {this.linkClick(e, '/toadlike')}} to="/toadlike" className="article-top-nav-home article-top-nav-home-journal">Toad-Like Smile</NavLink><span className="article-top-nav-name">{data.topTitle}</span></span>
            {content}
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Journal;