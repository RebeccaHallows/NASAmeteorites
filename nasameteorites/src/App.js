import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "https://data.nasa.gov/resource/gh4g-9sfh.json";

function App() {
  
  const [data, setData] = useState();
  const meteoriteImgs = [
    {
      id: 0,
      url: "https://solarsystem.nasa.gov/system/resources/list_images/2240_Bennu-Survey_320.jpg",
    },
    {
      id: 1,
      url: "https://solarsystem.nasa.gov/system/resources/list_images/1031_ida_dactyl_320.jpg",
    },
    {
      id: 2,
      url: "https://solarsystem.nasa.gov/system/resources/list_images/782_PIA02487_thumb.jpg",
    },
  ];

  const testData = [
    {
      name: "Aachen",
      id: 1,
      mass: 21,
      fall: "fell",
      year: "1880-01-01T00:00:00.000",
      geolocation: { latitude: "50.775", longitude: "6.08333" },
    },
    {
      name: "Kaachen",
      id: 2,
      mass: 200,
      fall: "fell",
      year: "1900-01-01T00:00:00.000",
      geolocation: { latitude: "80.2398", longitude: "2.04443" },
    },
  ];

  const getRandomMeteoriteImg = () => {
    let randomNum = Math.floor(Math.random() * meteoriteImgs.length);  
    return meteoriteImgs[randomNum]
    }
  

  useEffect(()=>{
    axios.get(apiUrl).then((response)=>{
      console.log("calling")
      setData(response.data)

    })
    .catch((err) => {
      console.log(err);
    });
  } ,[])

  if (data){
    console.log(data)
  }
  
  
  return (
    <div>
    <body className='body'>
    </body>
      
    <h1 className='text-3xl'>
      Meteorites </h1>  
      <div>
        {
          data.map((meteorite)=>{
            return(
              <div className='card' key={meteorite.id}>
              <p>{meteorite.name}</p>

                <div class='center'>
                  <img src = {getRandomMeteoriteImg().url}/>
                </div>

                  <div className='text'>
                    <p>Mass: {meteorite.mass}</p>
                    <p>Date: {String(meteorite.year).slice(0,10)}</p>
                    <p><span>Latitude: {meteorite.geolocation?.latitude}</span> <span>Longitude: {meteorite.geolocation?.longitude}</span></p>
                  </div>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;

