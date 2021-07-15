let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon")
let tempValue = document.getElementById("temp-value");
let tempUnit = document.getElementById("temp-unit");
let climate = document.getElementById("climate");
let date = document.getElementById("datetime");
let iconFile; 
window.addEventListener("load", () => {
  let long;
  let lat;
  var x = document.lastModified;
  date.textContent=x;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
     
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=32b2fb76d87564a13034a19aececc295`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          const { name } = data;
          const { feels_like, temp, temp_max, temp_min } = data.main;
          const { id, icon, main } = data.weather[0];
          tempValue.textContent = Math.round(feels_like - 273);
          // loc.textContent = name;
          // climate.textContent = main;
          date.textContent=x;
          if (id<250){
            document.getElementById("temp").style.backgroundColor = " #5b6467";
            
            tempIcon.src = './icons/storm.svg' ;
            
          }
          else if (id<350){
            document.getElementById("temp").style.backgroundColor = " #a2b9bc";
            tempIcon.src = './icons/drizzle.svg' ;
  
          }
          else if (id<550){
            document.getElementById("temp").style.backgroundColor = "#034f84";
            tempIcon.src = './icons/rain.svg' ;

          }
          else if (id<650){
            document.getElementById("temp").style.backgroundColor = "#80ced6";
            tempIcon.src = './icons/snow.svg' ;
          }
          else if (id<800){
            document.getElementById("temp").style.backgroundColor = "#87bdd8";
            tempIcon.src = './icons/atmosphere.svg' ;
          }
          else if (id===800){
            document.getElementById("temp").style.backgroundColor = "#feb236";
            tempIcon.src = './icons/sun.svg' ;
          }
          else if(id>800){
            document.getElementById("temp").style.backgroundColor = " #878f99";
            tempIcon.src = './icons/clouds.svg' ;
          }
          setTimeout(function(){
            window.location.reload(1);
         }, 1000);
    
          // console.log(
          //   Math.round(temp - 273),
          //   Math.round(temp_max - 273),
          //   Math.round(temp_min - 273)
          // );
          // console.log(name);
        });
    });
  }
});
