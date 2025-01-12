import { useState } from "react"
import SerchBox from "./SerchBox"
import Infobox from "./InfoBox"

export default function WeatherApp(){
    const [WeatherInfo,setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 26.84,
        temp:25.05,
        tempMin:22.05,
        tempMax:30.05,
        humidity:57,
        weather:"haze",

    });
    
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"black"}}>Weather App by Harshad</h2>
            <SerchBox updateInfo ={updateInfo}/>
            
            <Infobox info ={WeatherInfo}/>
            </div>
    )
    
}