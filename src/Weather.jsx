import Searchbox from './Searchbox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const[weatherinfo,setweatherinfo]=useState({
        city:"pune",
        feelsLike: 28.58,
        humidity: 59,
        temp: 27.45,
        tempMax: 28.1,
        tempMin: 27.45,
        weather: "overcast clouds",
    });
    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }

    return(
        <>
        <Searchbox updateinfo={updateinfo}/>
        <InfoBox info={weatherinfo}/>
        </>
    )
}