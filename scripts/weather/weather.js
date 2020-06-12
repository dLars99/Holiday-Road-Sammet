// listing the temp min and max and desciption from the weather.daliy forcast
const weatherConverter = (weatherList) => {
  
    const weatherHTMLRespresentation = `<section class="weather">
    <div>${dateConverter(weatherList.dt)}<br>
    ${weatherList.weather.timezone}<br>
    ${Math.round(weatherList.temp.min)} low <br>
    ${Math.round(weatherList.temp.max)} high <br>
    ${weatherList.weather[0].description}</div>
   <div class="weatherIcon" ><img src="http://openweathermap.org/img/wn/${weatherList.weather[0].icon}.png"></div>
 
    </section>`
    return weatherHTMLRespresentation
}

function dateConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var day = month + ' ' + date + ' ' +  year;
    return day;
}
