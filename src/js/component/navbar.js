import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a
						className="nav-item nav-link active d-flex justify-content-end"
						href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a
						className="nav-item nav-link d-flex justify-content-end"
						href="#">
						Features
					</a>
					<a
						className="nav-item nav-link d-flex justify-content-end"
						href="#">
						Pricing
					</a>
					<a
						className="nav-item nav-link disabled d-flex justify-content-end"
						href="#">
						Disabled
					</a>
				</div>
			</div>
		</nav>
	);
};

/*END NAVBAR*/
