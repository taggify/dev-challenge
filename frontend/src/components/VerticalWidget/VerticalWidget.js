import React from 'react';
import './VerticalWidget.css';
import { subtractThreeHours } from '../../utils/subtractThreeHours';

export const VerticalWidget = ({ dataWeather }) => {

  const dateTimeParts = dataWeather?.datetime.split('T');
  const date = dateTimeParts[0];
  const time = subtractThreeHours(dateTimeParts[1]?.slice(0, 5));

  return (
    <div className="vertical-widget">
      <div className="bg-image">
        <p style={{color: '#293241'}}><strong>{dataWeather?.city}</strong></p>
        <img src={`https://openweathermap.org/img/wn/${dataWeather?.icon}@2x.png`} alt="Weather" />
      </div>
      <div className="info">
        <p>{dataWeather?.temperature}°C</p>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};
