import React from 'react'
import './HorizontalWidget.css'

export const HorizontalWidget = ({dataWeather}) => {
  return (
    <div className="horizontal-widget">
      <div className="horizontal-info">
        <div className="top-row">
          <div>
            <p><strong>Condition</strong> {dataWeather?.condition}</p>
          </div>
          <div>
            <p><strong>Description</strong> {dataWeather?.description}</p>
          </div>
          <div>
            <p><strong>Temperature</strong> {dataWeather?.temperature}°C</p>
          </div>
          <div>
            <p><strong>Thermal Sensation</strong> {dataWeather?.feels_like}°C</p>
          </div>
        </div>
        <div className="bottom-row">
          <div>
            <p><strong>Temp Min</strong> {dataWeather?.temp_min}°C</p>
          </div>
          <div>
            <p><strong>Temp Max</strong> {dataWeather?.temp_max}°C</p>
          </div>
          <div>
            <p><strong>Pressure</strong> {dataWeather?.pressure}mb</p>
          </div>
          <div>
            <p><strong>Humidity</strong> {dataWeather?.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
