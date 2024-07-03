import React from 'react';

const VisionMissionValuesDisplay = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>Visão, Missão e Valores</h2>
      <div>
        <h3>Visão</h3>
        <p>{data.vision}</p>
      </div>
      <div>
        <h3>Missão</h3>
        <p>{data.mission}</p>
      </div>
      <div>
        <h3>Valores</h3>
        <ul>
          {data.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VisionMissionValuesDisplay;
