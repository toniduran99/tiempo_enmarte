let db = new PouchDB('my_database');
fetch('https://mars-weather-rems.netlify.app/rems.json')
.then((res) => res.json())
.then(data => {
  let contenido = document.getElementById("main");
          contenido.innerHTML = `   <div class="secundario">
           
          <a class="home" href="index.html"><span class="material-icons">home</span></a>
          <a class="datos" href="data.html"><span class="material-icons">list</span></a>
          <div class = "descargar">
           <a><span class="material-icons">file_download</span></a>
           </div>
           
           <a class="info" href="info.html">  <span class="material-icons">info</span></a>

           

        </div> 
           <div class="principal">
            <div class="ubicacion">MARTE</div>
            <div class="temp">
                <div id="temperatura_actual">
              
                </div>
                <div id="temperatura_actual">
                <div>25º</div>
                <div class="dato">ACTUAL</div>
                </div>
                
                <div class="temperatura_limites">
                    <div id="max">
                    <div class="t_max">${data.weather_report.magnitudes[0].max_temp}</div>
                    <div class="dato">MAX</div>
                    </div>
                    <div id="max">
                    <div class="t_min">${data.weather_report.magnitudes[0].min_temp}</div>
                    <div class="dato">MIN</div>
                    </div>
                </div>
            </div>
            <div class="fecha"  >${data.weather_report.terrestrial_date}</div>
            <div class="sol" >${data.weather_report.sol}</div>
          </div>

          <div class="masinfo">
            <div>
            <div  class="salida_sol">${data.weather_report.magnitudes[0].sunrise}</div>
            <div class="dato">  SUNRISE</div>
            </div>
            <div class="viento">${data.weather_report.magnitudes[0].wind_speed}km/h</div>
            <div>
            <div class="puesta_sol">${data.weather_report.magnitudes[0].sunset}</div>
            <div class="dato">  SUNSET</div>
            </div>
          </div>
          `;

          let btnAdd = document.querySelector(".descargar");

          btnAdd.addEventListener("click", addWeather, false);

          function addWeather() {

            let sol = document.querySelector(".sol").innerHTML;
            let max = document.querySelector(".t_max").innerHTML;
            let min = document.querySelector(".t_min").innerHTML;
            let sunset = document.querySelector(".puesta_sol").innerHTML;
            let sunrise = document.querySelector(".salida_sol").innerHTML;
            
      
      
            console.log(sol);
            console.log(max);
            console.log(min);
            console.log(sunrise);
            console.log(sunset);

            let doc = {
              "_id": sol,
              "sol": sol,
              "max": max,
              "min": min,
              "sunset": sunset,
              "sunrise": sunrise,
            };
            db.put(doc);
      
      
          }
        }
        );

  





