import React from "react";

const tagline = {
	title: "DINOSAURS That Can Eat People",
	text:
		"A newly discovered predatory dinosaur from Utah is so large that it may represent the biggest species of meat-eating dino that ever lived in North America.The dinosaur, Siats meekerorum is described in the latest issue of Nature Communications. The specimen was just a juvenile, but conservatively it measured at least 30 feet long and weighed 9,000 pounds..",
	button: {
		url:
			"https://www.foxnews.com/science/man-eating-monster-dino-nearly-wiped-out-t-rex",
		label: "Stomp Here"
	}
};

export const Jumbotron = () => {
	return (
		<div className="container mt-1 mb-1 p-1">
			<div className="row">
				<div className="col-12  m-auto">
					<div className="jumbotron mb-0">
						<h1 className="title">{tagline.title}</h1>
						<p className="text">{tagline.text}</p>
						<a
							className="button jumbotron-button btn mt-4 btn-lg bg-secondary text-white"
							href={tagline.button.url}
							role="button">
							{tagline.button.label}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

/*END JUMBOTRON */
