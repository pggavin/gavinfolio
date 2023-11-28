import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { title, link } = props;

	return (
		<div className="article-container">
			<div className="wrapper">
				<div className="image-wrapper">
					<img
						src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1583&q=80"
						alt="Article Image"
					/>
				</div>
				<div className="header-wrapper">
					<h1>{title}</h1>
					<h2>
						<a href={link} className="article-link">
							See Project{" "}
							<FontAwesomeIcon style={{ fontSize: "15px" }} icon={faChevronRight} />
						</a>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Article;
