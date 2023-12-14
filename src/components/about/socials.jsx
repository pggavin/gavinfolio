import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobilePhone } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	const handlePhoneClick = () => {
		// You can implement the logic to add your contact here.
		// For example, open the phone dialer with the phone number.
		window.open(`tel:${INFO.main.phoneNumber}`);
	};

	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faTwitter} className="social-icon" />
					</div>
					<div className="social-text">Follow on Twitter</div>
				</a>
			</div>
			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faGithub} className="social-icon" />
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>
			<div className="social">
				<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faLinkedin} className="social-icon" />
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>
			<div className="social">
				<div className="contact-wrapper">
					<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
			<div className="social">
				<div className="contact-wrapper" onClick={handlePhoneClick}>
					<div className="social-icon">
						<FontAwesomeIcon icon={faMobilePhone} />
					</div>
					<div className="social-text clickable">(431) 999-9986</div>
				</div>
			</div>
		</div>
	);
};

export default Socials;
