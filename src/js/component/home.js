import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { BootstrapCard } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container d-flex justify-content-center">
				<div className="row ">
					<BootstrapCard
						title="Ollie"
						imageUrl="https://images.unsplash.com/photo-1505027014503-e6de34d28116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
						text="bla bla bla"
						buttonUrl="http://www.google.com"
						buttonLabel="press here"
					/>

					<BootstrapCard
						title="Ollie"
						imageUrl="https://images.unsplash.com/photo-1505027014503-e6de34d28116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
						text="bla bla bla"
						buttonUrl="http://www.google.com"
						buttonLabel="press here"
					/>

					<BootstrapCard
						title="Ollie"
						imageUrl="https://images.unsplash.com/photo-1505027014503-e6de34d28116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
						text="bla bla bla"
						buttonUrl="http://www.google.com"
						buttonLabel="press here"
					/>

					<BootstrapCard
						title="Ollie"
						imageUrl="https://images.unsplash.com/photo-1505027014503-e6de34d28116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
						text="bla bla bla"
						buttonUrl="http://www.google.com"
						buttonLabel="press here"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}
