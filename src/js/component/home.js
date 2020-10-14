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
						title="CARNOTAURUS"
						imageUrl="https://as2.ftcdn.net/jpg/01/51/94/49/500_F_151944973_j6W1E0vyOynbc2JieiAlabRUoxiQcwWC.jpg"
						text="Carnotaurus was a carnivorous theropod during the late Cretaceous period. Its name means “meat-eating bull”, and it resembles a Tyrannosaur with horns."
						buttonUrl="https://www.nhm.ac.uk/discover/dino-directory/carnotaurus.html"
						buttonLabel="Stomp Here"
					/>

					<BootstrapCard
						title="TYRANNOSAURUS REX"
						imageUrl="https://as1.ftcdn.net/jpg/02/14/10/16/500_F_214101651_rDo4CQsGCUQqMAYNgxR1JsrWilRKskYZ.jpg"
						text="Tyrannosaurus rex was one of the most ferocious predators to ever walk the Earth. With a massive body, sharp teeth, and jaws so powerful they could crush a car."
						buttonUrl="https://www.nationalgeographic.com/animals/prehistoric/tyrannosaurus-rex/#close"
						buttonLabel="Stomp Here"
					/>

					<BootstrapCard
						title="MOSASAURUS"
						imageUrl="https://as2.ftcdn.net/jpg/03/02/08/67/500_F_302086722_4IWA1p5oNHxEPgeBjAplNox2fgR46N11.jpg"
						text="The Mosasaurus was a carnivore and an enormous aquatic lizard that lived near the surface of the water, feeding on whatever edible animals were unfortunate enough to cross their path."
						buttonUrl="https://dinosaurpictures.org/Mosasaurus-pictures"
						buttonLabel="Stomp Here"
					/>

					<BootstrapCard
						title="SPINOSAURUS"
						imageUrl="https://as2.ftcdn.net/jpg/02/76/90/45/500_F_276904578_RfO32tbURx5i6o6HNk5r18lOwBOvWgWn.jpg"
						text="Spinosaurus was the biggest of all the carnivorous dinosaurs,larger than Tyrannosaurus and Giganotosaurus. It lived during part of the Cretaceous period."
						buttonUrl="https://www.livescience.com/24120-spinosaurus.html"
						buttonLabel="Stomp Here"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}
