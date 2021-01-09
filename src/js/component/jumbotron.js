import React from "react";

const tagline = {
	title: "DINOSAURS That Can Eat People",
	text:
		"A newly discovered predatory dinosaur from Utah is so large that it may represent the ",
	text2:
		"biggest species of meat-eating dino that ever lived in North America.The dinosaur",
	text3:
		"Siats meekerorum is described in the latest issue of Nature Communications. The",
	text4:
		"specimen was just a juvenile, but conservatively it measured at least 30 feet long",
	text5: "and weighed 9,000 pounds..",
	button: {
		url:
			"https://www.foxnews.com/science/man-eating-monster-dino-nearly-wiped-out-t-rex",
		label: "Stomp Here"
	}
};

export const Jumbotron = () => {
	return (
		<div className="container mt-5  pr-2">
			<div className="row">
				<div className="col-12  m-auto  ">
					<div className="jumbotron text-white pt-4">
						<h1 className="title ">{tagline.title}</h1>
						<p className="text  ">
							{tagline.text}
							<br />
							{tagline.text2}
							<br />
							{tagline.text3}
							<br />
							{tagline.text4}
							<br />
							{tagline.text5}
						</p>
						<a
							className="button jumbotron-button btn mt-3 btn-lg bg-white text-dark font-weight-bold"
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
