import React, {Component, Fragment } from 'react';

export default class Video extends Component {

	convertString(inputString) {
		let newString = inputString.replace(/(\r\n|\n|\r)/gm, "<br>");
		return newString;
	}



	render() {
		let templateData = this.props.data.template_details;
		let right_header_style = {display: 'block'};
		if (templateData.article_right_header === "") {
			right_header_style = {display: 'none'};
		}
		return (
			<Fragment>
				<section className="article-title-header">
					<h1 className="article-title-left">{this.props.data.topTitle}</h1>
					<div className="article-title-header-wrapper">
						<div className="article-title-header-left devil-article-title-header-left">
							<section className="left-title-top">
								<p>{templateData.article_header}</p>
							</section>
							<p className="left-title-main-p" dangerouslySetInnerHTML={{__html: this.convertString(templateData.article_top)}}>
									
							</p>
						</div>
						<div className="article-title-header-right devil-article-title-header-right" style={right_header_style}>
							<h3>{templateData.article_right_header}</h3>
							<ul>
								{
									templateData.article_right_li.map((x, i) => {
										return <li key={x + i}>{x}</li>
									})
								}
							</ul>
						</div>
					</div>
				</section>
				<section className="medium-image medium-video">
					<div className="medium-image-container medium-video-container">
						<iframe src={templateData.center_media.src} frameBorder="0" allow="autoplay; encrypted-media" title="Harry Potter" allowFullScreen></iframe>
					</div>
				</section>

			</Fragment>


		)
	}
}