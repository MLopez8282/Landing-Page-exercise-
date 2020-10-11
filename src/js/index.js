//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

import PropType from "prop-types";/* ???*/


/*START NAVBAR*/
const Navbar = () => {
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active d-flex justify-content-end" href={navLink}>Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link d-flex justify-content-end" href={navLink}>Features</a>
                <a className="nav-item nav-link d-flex justify-content-end" href={navLink}>Pricing</a>
                <a className="nav-item nav-link disabled d-flex justify-content-end" href={navLink}>Disabled</a>
            </div>
        </div>
    </nav>
};

ReactDOM.render(<Navbar />, document.querySelector("#navbar"))

/*END NAVBAR*/







/* START JUMBOTRON*/
const tagline = {
    title: "Twins go together like Tequila and Bad decisions",
    text: "bhaoifjaisofjnvksdskdghsghsghioasghsdjvhjkdsfkdfsdgf",
    button: {
        url: "https://www.pinterest.com/pin/36169603245140064/",
        label: "twin love"
    }

};

const jumbotron = (
    <div className="#jumbotron">
        <h1 className="title">{tagline.title}</h1>
        <p className="text">{tagline.text}.</p>
        <a className="button btn btn-primary btn-lg" href={tagline.button.url} role="button">{tagline.button.label}</a>
    </div>
);

ReactDOM.render(<jumbotron />, document.querySelector("#jumbotron"));

/*END JUMBOTRON */

/*START CARD */
const BootstrapCard = props => {
    return (
        <div className="#cards" style="width: 18rem;">
            <div className="#card1"></div>
            <img className="cardImage1" src={props.imageUrl} alt="Card image cap"></img>
            <h2 className="cardTitle1">{props.title}</h5>
            <p className="cardText1">{props.text}</p>
            <a href={props.buttonUrl} className="cardButton1 btn btn-primary">{props.buttonLabel}</a>
        </div>
        
BootstrapCard.PropTypes = {
        title: PropType.string,
        imageUrl: PropType.string,
        text: PropType.string,
        buttonUrl: Proptype.string,
        buttonLabel: Proptype.string
    };

    ReactDOM.render(
        <BootstrapCard
            title="Ollie"
            imageUrl="http://www.google.com"
            text="bla bla bla"
            buttonUrl="http://www.google.com"
            buttonLabel="press here"
        />,
        document.querySelector("#card1")
    );
};

<div class="card2">
    <img class="cardImage2" href={props.imageUrl} src="" height="325" width="500">
        <h2 class="cardTitle2">{props.title}</h2>
        <p class="cardText2">{props.text} </p>
        <a href={props.buttonUrl} className="cardButton2 btn btn-primary">{props.buttonLabel}</a>
         </div>

         BootstrapCard.PropTypes = {
        title: PropType.string,
                imageUrl: PropType.string,
                text: PropType.string,
                buttonUrl: Proptype.string,
                buttonLabel: Proptype.string
};

         ReactDOM.render(
            <BootstrapCard
        title="mylo"
        imageUrl="http://www.google.com"
        text="bla blajsdkfdskfha"
        buttonUrl="http://www.google.com"
        buttonLabel="click here"
    />,
        document.querySelector("#card2")
        );


        <div className="#card3">
        <img class="cardImage3" href={props.imageUrl} src="" height="325" width="500">
            <h2 class="cardTitle3">{props.title}</h2>
            <p class="cardText3">{props.text} </p>
            <a href={props.buttonUrl} className="cardButton3 btn btn-primary">{props.buttonLabel}</a>
         </div>


        BootstrapCard.PropTypes = {
            title: PropType.string,
                imageUrl: PropType.string,
                text: PropType.string,
                buttonUrl: Proptype.string,
                buttonLabel: Proptype.string
};

ReactDOM.render(
            <BootstrapCard
            title="frankie"
            imageUrl="http://www.google.com"
            text="bla ljkjkj blajsdkfdskfha"
            buttonUrl="http://www.google.com"
            buttonLabel="press here"
        />,
        document.querySelector("#card3")
        );
        };


               <div className="#card4">
            <img class="cardImage4" href={props.imageUrl} src="" height="325" width="500">
                <h2 class="cardTitle4">{props.title}</h2>
                <p class="cardText4">{props.text} </p>
                <a href={props.buttonUrl} className="cardButton4 btn btn-primary">{props.buttonLabel}</a>
         </div>


BootstrapCard.PropTypes = {
                title: PropType.string,
                imageUrl: PropType.string,
                text: PropType.string,
                buttonUrl: Proptype.string,
                buttonLabel: Proptype.string
};

 ReactDOM.render(
            <BootstrapCard
                title="moxie"
                imageUrl="http://www.google.com"
                text="bla blajsdkj kj   jklj kfdskfha"
                buttonUrl="http://www.google.com"
                buttonLabel="click here"
            />,
        document.querySelector("#card4")
        );
        </div>
    </div>
        
    );
/*END CARD */




//render your react application