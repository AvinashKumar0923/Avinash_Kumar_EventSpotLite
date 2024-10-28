// Services.jsx
import React from "react";
import { servicesData } from "../data/mock_data";
import "../styles/Services.css"; // Include CSS for styling

const ServiceCard = ({ icon, name, description }) => {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="learn-more-btn">Learn More</button>
    </div>
  );
};

const Services = () => {
  return (
    <>
    <h2>Services</h2>
    <div className="services-container">
      {servicesData.map((service) => (
        <ServiceCard
          key={service.id}
          icon={service.icon}
          name={service.name}
          description={service.description}
        />
      ))}
    </div>
    </>
  );
};

export default Services;
