import React from "react";

const tagline = {
	title: "DINOSAURS That Can Eat Bad People",
	text: "bhaoifjaisofjnvksdskdghsghsghioasghsdjvhjkdsfkdfsdgf",
	button: {
		url: "https://en.wikipedia.org/wiki/Dinosaur",
		label: "Dinos"
	}
};

export const Jumbotron = () => {
	return (
		<div className="container  p-1">
			<div className="row">
				<div className="col-12 m-auto">
					<div className="jumbotron mb-0">
						<h1 className="title">{tagline.title}</h1>
						<p className="text">{tagline.text}.</p>
						<a
							className="button jumbotron-button btn btn-primary btn-lg"
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
