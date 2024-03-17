import React, { useState, useEffect } from 'react';
import './WeatherPage.css';
import { VerticalWidget } from '../../components/VerticalWidget/VerticalWidget';
import { HorizontalWidget } from '../../components/HorizontalWidget/HorizontalWidget';
import { HistoryWeatherTable } from '../../components/HistoryWeatherTable/HistoryWeatherTable';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { FetchWeather } from '../../hooks/useFetchWeather';
import Spinner from '../../components/Spinner/Spinner';
import { Notification } from '../../components/Notification/Notification';
import { fetchWeatherData } from '../../hooks/usefetchWeatherData';


export const WeatherPage = () => {

  const [city, setCity] = useState('')
  const [dataWeather, setDataWeather] = useState(null)
  const [historicalData, setHistoricalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [selectedData, setSelectedData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleChangeCity = (e) => {
      setCity(e.target.value)
  }
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setShowNotification(null);
  
      try {
        const data = await FetchWeather(city);
        setHistoricalData(prevData => [...prevData, data]);
        setDataWeather(data);
        setSelectedData(null);
        setIsLoading(false);
      } catch (error) {
          console.error('An error occurred: ', error.message);
          setShowNotification('Did you try to enter a non-existent city?')
      }
  }

  const handleRowClick = (rowData) => {
    setSelectedData(rowData);
    console.log("rowData: ", rowData);
  };

  useEffect(() => {
    fetchWeatherData(setHistoricalData);
    const intervalId = setInterval(() => fetchWeatherData(setHistoricalData), 10 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="weather-page-container">
      {historicalData.length === 0 && !showNotification && isLoading ? (
        <Spinner/>
      ) : (
        <>
          <div className='search-bar'>
              <SearchBox 
                city={city}
                handleChangeCity={handleChangeCity}
                handleSubmit={handleSubmit}
              />
          </div>
          {dataWeather && (
            <>
              <div className="widget-container">
                <div className="vertical-widget-container">
                  <VerticalWidget dataWeather={selectedData ? selectedData : dataWeather}/>
                </div>
                <div className="horizontal-widget-container">
                  <HorizontalWidget dataWeather={selectedData ? selectedData : dataWeather}/>
                </div>
              </div>
              <div className="table-container">
                <HistoryWeatherTable historicalData={historicalData} onRowClick={handleRowClick}/>
              </div>
            </>
          )}
        </>
      )}
      {showNotification && <Notification message={showNotification} />}
    </div>
  );
  
};
