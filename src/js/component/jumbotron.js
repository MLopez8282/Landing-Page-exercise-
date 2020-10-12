import React from "react";

const tagline = {
	title: "Twins go together like Tequila and Bad decisions",
	text: "bhaoifjaisofjnvksdskdghsghsghioasghsdjvhjkdsfkdfsdgf",
	button: {
		url: "https://www.pinterest.com/pin/36169603245140064/",
		label: "twin love"
	}
};

export const Jumbotron = () => {
	return (
		<div className="#jumbotron">
			<h1 className="title">{tagline.title}</h1>
			<p className="text">{tagline.text}.</p>
			<a
				className="button btn btn-primary btn-lg"
				href={tagline.button.url}
				role="button">
				{tagline.button.label}
			</a>
		</div>
	);
};

/*END JUMBOTRON */
