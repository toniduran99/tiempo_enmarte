let db = new PouchDB('my_database');
window.onload = function(){

    fetch('https://mars-weather-rems.netlify.app/rems.json')
      .then((res) => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then((data) => {
        
  
        let contenido = document.getElementById("main_data");
  
        contenido.innerHTML = `

        <div class="secundario">

 <a class="home" href="index.html"><span class="material-icons">home</span></a>
 <a class="datos" href="data.html"><span class="material-icons">list</span></a>
  <a class="descargar" ><span class="material-icons">file_download</span></a>
  <a class="descargar" href="info.html">  <span class="material-icons">info</span></a>
</div> 
        


   <div class="lista_datos"></div>  
   `;
   renderWeather();

   /** Función para pintar la lista  */
   function renderWeather() {
       let lista = document.querySelector(".lista_datos");
       lista.innerHTML = "";
       
       //Retrieving all the documents in PouchDB
       db.allDocs({ include_docs: true }, function (err, docs) {
         if (err) {
           return console.log(err);
         } else {
           let datos = `
   
           <table class="table">
               
                   <div class="superior_data">
                  
                       <div>SOL</div>
                       <div>MIN</div>
                       <div>MAX</div>
                       <div>SUNRISE</div>
                       <div>SUNSET</div>
                       
                   </div>
              
           `;  
           users = docs.rows;
           users.forEach(contenido => {
               console.log(contenido.doc);
             let user = `<div class="inf_data">
                           <div>${contenido.doc.sol}</div>
                           <div>${contenido.doc.min}</div>
                           <div>${contenido.doc.max}</div> 
                           <div></div>
                           <div>${contenido.doc.sunrise}</div>
                           <div></div>
                           <div>${contenido.doc.sunset}</div>
                           <div>
                               <button class="boton" onclick="eliminar('${contenido.doc._id}', '${contenido.doc._rev}')"><span class="material-icons">
                               delete
                               </span></button>
                           </div>
                       </div>`;
             datos += user;
           });
           
           lista.innerHTML = datos;
         }
       });
   }
   eliminar
   function eliminar(id){
       db.remove(id ,function(err) {
           if (err) {
              return console.log(err);
           } else {
              renderWeather();
           }
        });
   }
   
  })}