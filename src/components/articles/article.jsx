import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { title, link, image, gif } = props;
	const imageUrl = `${image}.jpg`;
	const gifUrl = `${gif}.gif`;


	return (
		<a href={link} className="article-link-container" style={{ textDecoration: 'none' }}>
			<h2 className="article-date">Oct 500 year one million</h2> {/* Display the date here */}
			<div className="article-container">
				<div className="wrapper">
					<div className="image-wrapper">
						<div
							className="gif-placeholder"
							style={{ backgroundImage: `url(${gifUrl})` }}
						></div>
						<img src={imageUrl} alt="Article Image" />
					</div>
					<div className="header-wrapper">
						<h1>{title}</h1>
						<h2>
                            <span className="article-see-project-link">
                                See Project <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faChevronRight} />
                            </span>
						</h2>
					</div>
				</div>
			</div>
		</a>
	);
};

export default Article;
