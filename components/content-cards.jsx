// import react object from react library for writing and defining react components
import React from 'react';

// function to define the content in jsx
const JewelryCard = ({ jewelryData, addToCart }) => 
{
    return (
        <div className="card">
            <img src={jewelryData.imageURL} alt={jewelryData.name} className="card-img-top" />;
            <div className="card-body">                
            </div>
        </div>
    )
}