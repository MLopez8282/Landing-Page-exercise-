import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { BootstrapCard } from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<BootstrapCard
							title="Ollie"
							imageUrl="http://www.google.com"
							text="bla bla bla"
							buttonUrl="http://www.google.com"
							buttonLabel="press here"
						/>
					</div>
					<div className="col-sm">
						<BootstrapCard
							title="Ollie"
							imageUrl="http://www.google.com"
							text="bla bla bla"
							buttonUrl="http://www.google.com"
							buttonLabel="press here"
						/>
					</div>
					<div className="col-sm">
						<BootstrapCard
							title="Ollie"
							imageUrl="http://www.google.com"
							text="bla bla bla"
							buttonUrl="http://www.google.com"
							buttonLabel="press here"
						/>
					</div>
					<div className="col-sm">
						<BootstrapCard
							title="Ollie"
							imageUrl="http://www.google.com"
							text="bla bla bla"
							buttonUrl="http://www.google.com"
							buttonLabel="press here"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
