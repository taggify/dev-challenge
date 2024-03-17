import React from 'react';
import './HistoryWeatherTable.css';
import { dateTimeSplit } from '../../utils/dateTimeSplit';

export const HistoryWeatherTable = ({ historicalData, onRowClick }) => {

  const slicedData = historicalData.length > 10 ? historicalData.slice(-10).reverse() : historicalData.slice().reverse();

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature</th>
            <th scope="col">Condition</th>
            <th scope="col">Description</th>
            <th scope="col">Feels_like</th>
            <th scope="col">Temp_min</th>
            <th scope="col">Temp_max</th>
            <th scope="col">Pressure</th>
            <th scope="col">Humidity</th>
            <th scope="col">Datetime</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((data, index) => (
            <tr key={index} onClick={() => onRowClick(data)}>
              <td>{data?.city}</td>
              <td>{data?.temperature}°C</td>
              <td>{data?.condition}</td>
              <td>{data?.description}</td>
              <td>{data?.feels_like}°C</td>
              <td>{data?.temp_min}°C</td>
              <td>{data?.temp_max}°C</td>
              <td>{data?.pressure}mb</td>
              <td>{data?.humidity}%</td>
              <td>{dateTimeSplit(data?.datetime)}</td>
              <td className='img'>
                <img 
                  src={`https://openweathermap.org/img/wn/${data?.icon}@2x.png`}
                  alt="Weather" 
                  className="w-100" 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
