import { useState } from "react";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const api_key = "c93348c002d692bd8b8e47a500b75ed4";

  const handlerInput = (e) => {
    setLocation(e.target.value);
  };

  const search = async () => {
    if(location.trim() !== "") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
    const res = await fetch(url);
    const searchData = await res.json();
    console.log(searchData);
    setData(searchData);
    setLocation("");
    }
    
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
        search()
    }
  }

  const currentDate = new Date()

  const diasESemanas = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]
  
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  const diadaSemana = diasESemanas[currentDate.getDay()]
  const mesDodia = meses[currentDate.getMonth()]
  const diaeMes = currentDate.getDate()

  const formatedDate = `${diadaSemana}, ${diaeMes} ${mesDodia}`

  return (
    <div className="container">
      <div className="weather-app">
        <div className="pesquisa">
          <div className="pesquisa-topo">
            <i className="fa-solid fa-location-dot"></i>
            <div className="localizacao">{data.name}</div>
          </div>
          <div className="barra-pesquisa">
            <input
              type="text"
              placeholder="Insira a Localização"
              value={location}
              onChange={handlerInput}
              onKeyDown={handleKeyDown}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>
        <div className="weather">
          <div className="weather-tipo">{data.weather ? data.weather[0].main : null}</div>
          <div className="temperatura">{data.main ? `${Math.floor((data.main.temp))}°C` : null}</div>
        </div>
        <div className="weather-date">
          <p>{formatedDate}</p>
        </div>
        <div className="weather-data">
          <div className="humidade">
            <div className="data-name">Umidade</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">{data.main ? data.main.humidity : null}%</div>
          </div>
          <div className="wind">
            <div className="data-name">Velocidade Do Vento</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">{Math.floor(data.wind ? data.wind.speed : null)} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
