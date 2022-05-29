import {useState, useEffect} from "react"
import { CurrentDate } from "./CurrentDate/CurrentDate"
import {GiWaterDrop} from "react-icons/gi"
import {FiSun} from "react-icons/fi"
import {IoUmbrellaSharp} from "react-icons/io5"
import { DateForecast } from "./CurrentDate/DateForecast"
import { Loading } from "../../Loading/Loading"


function roundValues(deg) {
  return Math.round(deg);
}

export function WeatherApi() {

const [data,setData] = useState(null);

useEffect(() => {
    async function getWeather() {
      const d = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=46.77&lon=23.59&units=metric&exclude=alerts&appid=926472c73ad8d9cf097a3d5e9e7d7bb2`
      ).then((res) => res.json());

      setData(d);
    }
getWeather()
   
  }, []);



  if (!data) {
    return <Loading/>;
  }

  return (
      <>
      <div className="weatherWidgetContainer">
          <p><CurrentDate /></p>
          <h2>Weather for Cluj-Napoca, RO</h2>

        <div className="weatherWidgetTempDesc">
          <img src={`https://openweathermap.org/img/wn/${data?.current.weather[0].icon}.png`}alt={data?.current.weather[0].main}/>
          <p>{roundValues(data?.current.temp)}&deg;C, {data?.current.weather[0].main}</p>
        </div>

        <div className="weatherWidgetMoreInfoContainer">

          <p>{roundValues(data?.daily[0].temp.min)}&deg;C / {roundValues(data?.daily[0].temp.max)}&deg;C</p>
          <p>Feels like {roundValues(data?.current.feels_like)}&deg;C, {data?.current.weather[0].description}</p>
          <p><i><IoUmbrellaSharp/></i>Probability of precipitation: {roundValues(data?.hourly[0].pop)}%</p>
          <p><i><GiWaterDrop/></i>Humidity: {roundValues(data?.current.humidity)}%</p>
          <p><i><FiSun/></i>UV Index: {roundValues(data?.current.uvi)}</p>

          <div className="sevenDayForecastContainer"><DateForecast tomorrowMinTemp={roundValues(data?.daily[1].temp.min)} tomorrowMaxTemp={roundValues(data?.daily[1].temp.max)}
         dayAfterTomorrowMinTemp={roundValues(data?.daily[2].temp.min)} dayAfterTomorrowMaxTemp={roundValues(data?.daily[2].temp.max)}
         dayOneAfterTomorrowMinTemp={roundValues(data?.daily[3].temp.min)} dayOneAfterTomorrowMaxTemp={roundValues(data?.daily[3].temp.max)}
         dayTwoAfterTomorrowMinTemp={roundValues(data?.daily[4].temp.min)} dayTwoAfterTomorrowMaxTemp={roundValues(data?.daily[4].temp.max)}
         dayThreeAfterTomorrowMinTemp={roundValues(data?.daily[5].temp.min)} dayThreeAfterTomorrowMaxTemp={roundValues(data?.daily[5].temp.max)}
         dayFourAfterTomorrowMinTemp={roundValues(data?.daily[6].temp.min)} dayFourAfterTomorrowMaxTemp={roundValues(data?.daily[6].temp.max)}
         dayFiveAfterTomorrowMinTemp={roundValues(data?.daily[7].temp.min)} dayFiveAfterTomorrowMaxTemp={roundValues(data?.daily[7].temp.max)}
        />
          </div>

        </div>
          



      </div>
      

      

          
          
  
     
         
          
    



      </>
  )


}
        
  
    

