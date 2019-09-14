fetch('/weather',{//fetch data from server side and darksky
    method: 'POST',
    headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        "latitude": "37.8267",
        "longitude": "-122.4233"       
    })
}).then(res => res.json()).then(data =>{
    console.log(data)
    setWeatherData(data)
})

var icon = new Skycons({ color: 'red'})//icon for weather
//icon.set('icon', 'clear-day')
icon.play()

function setWeatherData(data) {
    console.log(data.temperature)
    document.getElementById('temp').innerHTML = data.temperature+"&deg;";
    document.getElementById("preci").innerHTML = `${data.precipProbability * 100}%`;
    document.getElementById('wind').innerHTML = data.windSpeed;
    icon.set('icon', data.icon);
    icon.play();
}