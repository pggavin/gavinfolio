import React from "react";

function article_1() {
	return {
		date: "July 2023 - Nov 2023",
		title: "Neon Express",
		imageUrl: "gavingold_neonexpress",
		gifUrl: "gavingold_neonexpress",
		description:
			"Neon Express is a 3D 3rd-person fast-paced runner platformer where you play as Velo, a pizza delivery girl, parkouring atop a futuristic city between unusually tall skyscrapers and high-speed trains. Deliver the pizzas as fast as you can to satisfy the customers and become The Parzzaria's top employee!",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="projectDescription">
						Neon Express is a 3D 3rd-person fast-paced runner platformer where you play as Velo, a pizza delivery girl, parkouring atop a futuristic city between unusually tall skyscrapers and high-speed trains. Deliver the pizzas as fast as you can to satisfy the customers and become The Parzzaria's top employee!
						Learn more at => https://vfs-gdpg.itch.io/neon-express

						Worked on "Neon Express", developed as the final project for the Programming for Games, Web & Mobile program at Vancouver Film School. Worked implementing gameplay/parkour mechanics, UI design, UI implementation, & shader development.

						• Programmed in a team of six, with three additional audio and
						animation collaborators.
						• Implemented movement mechanics such as wall-running, sliding,
						and mantling, coded to work with physics interactions from
						high-speed trains.
						• Designed and implemented UI and shaders, iterating using
						feedback from team members, playtesters, and mentors.

					</div>
					<iframe frameBorder="0" src="https://itch.io/embed/2385352" width="552" height="167"><a href="https://vfs-gdpg.itch.io/neon-express">Neon Express by VFS Game Design - Programming</a></iframe>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Dec 2021 – June 2022",
		title: "Penguin Rush",
		imageUrl: "gavingold_penguinrush",
		gifUrl: "gavingold_placeholder",
		description:
			"Use your keyboard arrow keys to move the penguin across the ice and grab as many yummy snacks as possible and gain points. Zoom from side to side by pressing the space bar. And catch the big fish to boost your speed. You can use those points in the shop to buy different penguins! But watch out for the oil slick, barrels and other obstacles that can slow your penguin down. Hit too many obstacles and you'll have to start over.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="projectDescription">
						Use your keyboard arrow keys to move the penguin across the ice and grab as many yummy snacks as possible and gain points. Zoom from side to side by pressing the space bar. And catch the big fish to boost your speed. You can use those points in the shop to buy different penguins! But watch out for the oil slick, barrels and other obstacles that can slow your penguin down. Hit too many obstacles and you'll have to start over.

						• Programmed for and led a team of 4, using feedback from CBC
						and guidance from Ubisoft mentors
						• Designed and optimized for use in modern browsers.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Aug 2023 – Oct 2023",
		title: "Gem Defender",
		imageUrl: "gavingold_gemdefender",
		gifUrl: "gavingold_gemdefender",
		description:
			"Follow Chud on his fight against Dr Soystein's 'jak army in this spine-tingling survival shooter.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div className="projectDescription">
					Follow Chud on his fight against Dr Soystein's 'jak army in this spine-tingling survival shooter.

					• Programmed in a team of 2 for a commercial product selling over
					1,000 copies in its first week on Steam.
					• Managed the scope and schedule, making sure time was
					managed well and spent effectively.
					• Programmed UI, enemy and boss AI, weapons, upgrades, and an
					object-pooling bullet system, built for ease of use when level
					designing.
					• Additionally programmed achievements using the Steam API and
					Rich Presence using the Discord API.
				</div>
				<iframe src="https://store.steampowered.com/widget/2599270/" frameBorder="0" width="646" height="190"></iframe>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "March 2023 - June 2023",
		title: "RoboStrike 3.0",
		imageUrl: "gavingold_robostrike",
		gifUrl: "gavingold_placeholder",
		description:
			"Robostrike 3.0 is a single-player 3rd person isometric rogue-lite where you play as a robot who can possess and take control of other robots- use this skill to save humanity! Players lose if they die, so switching between robots is the key to victory!!",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<div className="projectDescription">
				Robostrike 3.0 is a single-player 3rd person isometric rogue-lite where you play as a robot who can possess and take control of other robots- use this skill to save humanity! Players lose if they die, so switching between robots is the key to victory!!

				Worked on "RoboStrike 3.0", developed as a team project for the Programming for Games, Web & Mobile program at Vancouver Film School. Worked implementing gameplay/combat mechanics, UI design, UI implementation, & shader development in Unity Engine.

				• Programmed in a team of 5.
				• Coded enemy possession system, shaders, adaptive aiming
				system, UI, and custom pooling system for enemies and attacks.
				<iframe width="552" height="167" frameBorder="0" src="https://itch.io/embed/2384431"><a href="https://babigap.itch.io/robostrike-3">RoboStrike 3.0 by BabiGap</a></iframe>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
