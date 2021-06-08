
window.onload = function(){

  fetch('https://mars-weather-rems.netlify.app/rems.json')
    .then((res) => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then((data) => {
      

      let contenido = document.getElementById("main_info");

      contenido.innerHTML = `
      <div class="secundario">
           
      <a class="home" href="index.html"><span class="material-icons">home</span></a>
      <a class="datos" href="data.html"><span class="material-icons">list</span></a>
       <a class="descargar" ><span class="material-icons">file_download</span></a>
       <a class="descargar" href="info.html">  <span class="material-icons">info</span></a>
    </div> 

      <div id="main_info">
      <div class="titulo">Información</div>
      <div class="pregunta">¿Qué es un sol?</div>
      <div class="respuesta">${data.weather_report.sol_desc[0].es}</div>

      <div class="pregunta">¿Qué es un día marciano?</div>
      <div class="respuesta">${data.weather_report.terrestrial_date_desc[0].es}</div>

      <div class="pregunta">La emperatura en Marte</div>
      <div class="respuesta">${data.weather_report.magnitudes[0].temp_desc[0].es}</div>

      <div class="pregunta">La presión en Marte</div>
      <div class="respuesta">${data.weather_report.magnitudes[0].pressure_desc[0].es}</div>


      
    </div>
    
      
      `;

          
  });  
      

}