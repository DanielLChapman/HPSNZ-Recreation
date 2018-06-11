import React, {Component, Fragment } from 'react';

export default class Article extends Component {

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
				<section className="medium-image">
					<div className="medium-image-container">
						<img src={templateData.center_media.src} alt="2 in forest" />
					</div>
				</section>
				<section className="article-bottom">
					<p>{templateData.article_bottom_text}</p>
					<p className="quote">{templateData.article_bottom_quote}</p>
					<p>{templateData.article_bottom_text_1}</p>
					<p className="quote">{templateData.article_bottom_quote_1}</p>
					<p>{templateData.article_bottom_text_2}</p>
					<p className="quote">{templateData.article_bottom_quote_2}</p>
					<p>{templateData.article_bottom_text_3}</p>
				</section>

			</Fragment>


		)
	}
}