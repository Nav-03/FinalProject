import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCard = (props) => {
    // const { props } = props;
    const { store, actions } = useContext(Context);

    let buttonClass = "btn btn-outline-danger";
    if (props.isFavorite) buttonClass = "btn btn-danger";

    console.log("the card for " + props.name + " has the class " + buttonClass, props.isFavorite);

    return (
        <div className="card mx-4" style={{ width: "20rem", display: "inline-block" }}>
            <img className="card-img-top" width="200px" height="300px" src={store.images[props.type + props.uid] || "https://snr.unl.edu/images/portrait-large/staff/whiteblank.gif"} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text text-wrap">{props.climate})</p>
                <div className="d-flex justify-content-around align-items-center">
                    <Link to={`${props.type}/${props.uid}`}>
                        <a href="#" className="btn btn-primary ">Learn More!</a>
                    </Link>
                    <button className={buttonClass} onClick={() => props.isFavorite ? actions.deleteFavorite(props) : actions.addFavorites(props)}>
                        <i className="fas fa-heart "></i>
                    </button>

                </div>

            </div>
        </div>
    )
}




export default PlanetCard;