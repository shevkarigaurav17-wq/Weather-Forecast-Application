import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function Searchbox({updateinfo}){
    const API_Url="https://api.openweathermap.org/data/2.5/weather";
    const API_key="ad51b87f131486083cc7a3f39d43f6cb";
    let [city,setcity]=useState("");
    let[error,seterror]=useState(false);
    let getWeatherinfo=async ()=>{
        try{
            let response=await fetch(`${API_Url}?q=${city}&appid=${API_key}&units=metric`)
        let jsonresp=await response.json();
        let result={
            city:city,
            temp:jsonresp.main.temp,
            tempMin:jsonresp.main.temp_min,
            tempMax:jsonresp.main.temp_max,
            humidity:jsonresp.main.humidity,
            feelsLike:jsonresp.main.feels_like,
            weather:jsonresp.weather[0].description
            };
            console.log(result);
            return result;
        }catch(error){
            throw error;
        }
        
    }
    let handlechange=(event)=>{
        setcity(event.target.value);
    }
    let onsubmit=async (event)=>{
        try{
          event.preventDefault();
        console.log(city);
        setcity("");
        let info=await getWeatherinfo();
        updateinfo(info);
        }catch(error){
            seterror(true);
        }
        
    }
    return(
        <div>
            <h3>Search for Weather App</h3>
            <form>
               <TextField id="city"  onChange={handlechange} label="City name" value={city} size='small' variant="outlined" required/>
                &nbsp; &nbsp;
               <Button onClick={onsubmit} type='submit' variant='contained'>Search</Button>
                {error&& <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}