// import react object from react library for writing and defining react components
import React from 'react';

// function to define the content in jsx
const JewelryCard = ({ jewelryData, addToCart }) => 
{
    return (
        <div className="card">
            <img src={jewelryData.imageURL} alt={jewelryData.name} className="card-img-top" />
            <div className="card-body"> 
            <h5 className="card-title">{jewelryData.name}</h5>
            <p className="card-text">{jewelryData.desciption}</p>
            <p className="card-text">{jewelryData.price}</p>
            <button className="btn btn-warning"
            onClick={() => addToCart(jewelryData)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default JewelryCard;