import React from 'react';
import './PuppyCard.css';

interface PuppyCardProps {
  name: string;
  image: string;
  gender: string;
  dob: string;
  color: string;
  price: number;
  available: boolean;
}

const PuppyCard: React.FC<PuppyCardProps> = ({
  name,
  image,
  gender,
  dob,
  color,
  price,
  available
}) => {
  return (
    <div className="puppy-card">
      <img src={image} alt={`${name} - Bernedoodle puppy`} />
      <div className="puppy-info">
        <h3>{name}</h3>
        <p>Gender: {gender}</p>
        <p>Born: {dob}</p>
        <p>Color: {color}</p>
        <p>Price: ${price}</p>
        <p className={`status ${available ? 'available' : 'reserved'}`}>
          {available ? 'Available' : 'Reserved'}
        </p>
      </div>
    </div>
  );
};

export default PuppyCard; 