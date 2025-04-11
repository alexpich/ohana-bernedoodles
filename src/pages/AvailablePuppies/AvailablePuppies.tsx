import React from 'react';
import PuppyCard from '../../components/PuppyCard/PuppyCard';
import './AvailablePuppies.css';

const AvailablePuppies: React.FC = () => {
  const puppies = [
    {
      name: "Luna",
      image: "/placeholder-puppy.jpg", // Add your image path
      gender: "Female",
      dob: "March 1, 2024",
      color: "Tri-color",
      price: 3500,
      available: true
    }
    // Add more puppies as needed
  ];

  return (
    <div className="available-puppies">
      <h1>Available Puppies</h1>
      <div className="puppies-grid">
        {puppies.map((puppy, index) => (
          <PuppyCard key={index} {...puppy} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePuppies; 