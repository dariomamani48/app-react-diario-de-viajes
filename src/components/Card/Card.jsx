/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './card.css'


const Card = (props) => {
  return <div className='card'>
    <img className='card-img' src={props.img} alt="nova"></img>
    <div className='card-info'>
    <div><i className="fas fa-map-marker-alt"></i><span className='card-info-location'>{props.location} </span> <a className='card-info-linkto' href={props.googleMaps} target="_blank" rel='noreferrer'>Ver en Google Maps</a></div>
    <h2 className='card-info-title'>{props.title}</h2>
    <h4 className='card-info-date'>{props.startDate}-{props.endDate}</h4>
    <p className='card-info-desc'>{props.description}</p>
    
    </div>
    

  </div>;
};

export default Card;
