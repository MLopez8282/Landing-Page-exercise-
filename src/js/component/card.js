import React from "react";
import PropTypes from "prop-types";

export const BootstrapCard = props => {
	return (
		<div className="#cards" style={{ width: "18rem;" }}>
			<div className="#card1" />
			<img
				className="cardImage1"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<h2 className="cardTitle1">{props.title}</h2>
			<p className="cardText1">{props.text}</p>
			<a href={props.buttonUrl} className="cardButton1 btn btn-primary">
				{props.buttonLabel}
			</a>
		</div>
	);
};

BootstrapCard.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	text: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};

//     ReactDOM.render(
//         <BootstrapCard
//             title="Ollie"
//             imageUrl="http://www.google.com"
//             text="bla bla bla"
//             buttonUrl="http://www.google.com"
//             buttonLabel="press here"
//         />,
//         document.querySelector("#card1")
//     );
// };

// <div class="card2">
//     <img class="cardImage2" href={props.imageUrl} src="" height="325" width="500">
//         <h2 class="cardTitle2">{props.title}</h2>
//         <p class="cardText2">{props.text} </p>
//         <a href={props.buttonUrl} className="cardButton2 btn btn-primary">{props.buttonLabel}</a>
//          </div>

//          BootstrapCard.PropTypes = {
//         title: PropType.string,
//                 imageUrl: PropType.string,
//                 text: PropType.string,
//                 buttonUrl: Proptype.string,
//                 buttonLabel: Proptype.string
// };

//          ReactDOM.render(
//             <BootstrapCard
//         title="mylo"
//         imageUrl="http://www.google.com"
//         text="bla blajsdkfdskfha"
//         buttonUrl="http://www.google.com"
//         buttonLabel="click here"
//     />,
//         document.querySelector("#card2")
//         );

//         <div className="#card3">
//         <img class="cardImage3" href={props.imageUrl} src="" height="325" width="500">
//             <h2 class="cardTitle3">{props.title}</h2>
//             <p class="cardText3">{props.text} </p>
//             <a href={props.buttonUrl} className="cardButton3 btn btn-primary">{props.buttonLabel}</a>
//          </div>

//         BootstrapCard.PropTypes = {
//             title: PropType.string,
//                 imageUrl: PropType.string,
//                 text: PropType.string,
//                 buttonUrl: Proptype.string,
//                 buttonLabel: Proptype.string
// };

//         };

//                <div className="#card4">
//             <img class="cardImage4" href={props.imageUrl} src="" height="325" width="500">
//                 <h2 class="cardTitle4">{props.title}</h2>
//                 <p class="cardText4">{props.text} </p>
//                 <a href={props.buttonUrl} className="cardButton4 btn btn-primary">{props.buttonLabel}</a>
//          </div>

// BootstrapCard.PropTypes = {
//                 title: PropType.string,
//                 imageUrl: PropType.string,
//                 text: PropType.string,
//                 buttonUrl: Proptype.string,
//                 buttonLabel: Proptype.string
// };

//         </div>
//     </div>

// </div>
