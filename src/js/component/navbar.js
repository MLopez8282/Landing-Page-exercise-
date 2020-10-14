import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary mynavbar">
			<a className=" navbar-brand colortext pl-5 ml-5" href="#">
				Start Bootstrap
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
			<div
				className="collapse navbar-collapse d-flex justify-content-end mr-5 pr-5"
				id="navbarNavAltMarkup">
				<div className="navbar-nav ">
					<a className="nav-item nav-link active colortext" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link colortext" href="#">
						About
					</a>
					<a className="nav-item nav-link colortext" href="#">
						Services
					</a>
					<a className="nav-item nav-link colortext" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

/*END NAVBAR*/
