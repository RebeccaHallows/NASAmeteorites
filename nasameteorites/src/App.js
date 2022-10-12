import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "https://data.nasa.gov/resource/gh4g-9sfh.json";

function App() {
  
  const [data, setData] = useState();
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

  // useEffect(()=>{
  //   axios.get(apiUrl).then((response)=>{
  //     console.log("calling")
  //     setData(response.data)

  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // } ,[])

  if (data){
    console.log(data)
  }
  
  
  return (
    <div>
    <h1 className='text-3xl'>
      Hello World </h1>  
      <div>
        {
          testData.map((meteorite)=>{
            return(
              <div key={meteorite.id}>
              {meteorite.name}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

